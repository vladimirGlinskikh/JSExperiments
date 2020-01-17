document.addEventListener('DOMContentLoaded', () => {

    const search = document.querySelector('.search');
    const cardBtn = document.getElementById('cart');
    const wishlistBtn = document.getElementById('wishlist');
    const goodsWrapper = document.querySelector('.goods-wrapper');
    const cart = document.querySelector('.cart');
    const category = document.querySelector('.category');
    const cardCounter = cardBtn.querySelector('.counter');
    const whishlistCounter = wishlistBtn.querySelector('.counter');
    const cartWrapper = document.querySelector('.cart-wrapper');

    const wishlist = [];
    let goodsBasket = {};

    const loading = () => {
        goodsWrapper.innerHTML = `<div id="spinner"><div class="spinner-loading"><div>
                                  <div><div></div>
                                  </div><div><div>
                                  </div></div><div>
                                  <div></div></div>
                                  <div><div></div></div></div></div></div>`;
    };


    const createCartGoods = (id, title, price, img) => {
        const card = document.createElement('div');
        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        card.innerHTML = `<div class="card">
                  <div class="card-img-wrapper">
                    <img class="card-img-top" src="${img}" alt="">
                    <button class="card-add-wishlist ${wishlist.includes(id) ? 'active' : ''}"
                        data-goods-id="${id}"></button>
                  </div>
                  <div class="card-body justify-content-between">
                    <a href="#" class="card-title">${title}</a>
                    <div class="card-price">${price} ₽</div>
                    <div>
                    <button class="card-add-cart"
                        data-goods-id="${id}">Добавить в корзину</button>
                    </div>
                     </div>
                    </div>`;
        return card;
    };

    const renderCart = (goods) => {
        goodsWrapper.textContent = '';

        if (goods.length) {
            goods.forEach(({id, title, price, imgMin}) => {
                goodsWrapper.append(createCartGoods(id, title, price, imgMin));
            });
        } else {
            goodsWrapper.innerHTML = 'Дико извиняюсь, но по Вашему запросу ничего не найдено.';
        }
    };

    // rendered thing to cart
    const createCardGoodsBasket = (id, title, price, img) => {
        const card = document.createElement('div');
        card.className = 'goods';
        card.innerHTML = `<div class="goods-img-wrapper">
\t\t\t\t\t\t<img class="goods-img" src="${img}" alt="">

\t\t\t\t\t</div>
\t\t\t\t\t<div class="goods-description">
\t\t\t\t\t\t<h2 class="goods-title">${title}</h2>
\t\t\t\t\t\t<p class="goods-price">${price}</p>

\t\t\t\t\t</div>
\t\t\t\t\t<div class="goods-price-count">
\t\t\t\t\t\t<div class="goods-trigger">
\t\t\t\t\t\t\t<button class="goods-add-wishlist ${wishlist.includes(id) ? 'active' : ''}"
 data-goods-id="${id}"></button>
\t\t\t\t\t\t\t<button class="goods-delete" data-goods-id="${id}"></button>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="goods-count">1</div>
\t\t\t\t\t</div>`;
        return card;
    };

    const renderBasket = (goods) => {
        cartWrapper.textContent = '';

        if (goods.length) {
            goods.forEach(({id, title, price, imgMin}) => {
                cartWrapper.append(createCardGoodsBasket(id, title, price, imgMin));
            });
        } else {
            cartWrapper.innerHTML = '<div id="cart-empty">Ваша корзина пока пуста</div>';
        }
    };

    const closeCart = event => {
        const target = event.target;

        if (target === cart ||
            target.classList.contains('cart-close') ||
            event.keyCode === 27) {
            cart.style.display = '';
            document.removeEventListener('keyup', closeCart);
        }
    };

    const openCart = event => {
        event.preventDefault();
        cart.style.display = 'flex';
        document.addEventListener('keyup', closeCart);
    };

    const getGoods = (handler, filter) => {
        loading();
        fetch('db/db.json')
            .then(response => response.json())
            .then(filter)
            .then(handler);
    };

    const randomSort = (item) => item.sort(() => Math.random() - 0.5);

    const choiceCategory = event => {
        event.preventDefault();
        const target = event.target;

        if (target.classList.contains('category-item')) {
            const category = target.dataset.category;
            getGoods(renderCart, goods => goods
                .filter(item => item.category
                    .includes(category)));
        }
    };

    const searchGoods = event => {
        event.preventDefault();

        const input = event.target.elements.searchGoods;
        const inputValue = input.value.trim();
        if (inputValue !== '') {
            const searchString = new RegExp(inputValue, 'i');
            getGoods(renderCart, goods => goods.filter(item => searchString.test(item.title)));
        } else {
            search.classList.add('error');
            setTimeout(() => {
                search.classList.remove('error');
            }, 2000);
        }
        input.value = '';
    };

    const getCookie = (name) => {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    const cookieQuery  = get => {
        if (get){
            goodsBasket = JSON.parse(getCookie('goodsBasket'));
        }else {
            document.cookie = `goodsBasket=${JSON.stringify(goodsBasket)}; max-age=86400e3`;
        }
        console.log(goodsBasket);
        checkCount();
    };


    const checkCount = () => {
        whishlistCounter.textContent = wishlist.length;
        cardCounter.textContent = Object.keys(goodsBasket).length;
    };

    const storageQuery = get => {
        if (get) {
            if (localStorage.getItem('wishlist')) {
                const wishlistStorage = JSON.parse(localStorage.getItem('wishlist'));
                wishlistStorage.forEach(id => wishlist.push(id));
            }

        } else {
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
        checkCount();
    };

    const toggleWhishlist = (id, elem) => {
        if (wishlist.includes(id)) {
            wishlist.splice(wishlist.indexOf(id), 1);
            elem.classList.remove('active')
        } else {
            wishlist.push(id);
            elem.classList.add('active')
        }
        checkCount();
        storageQuery();
    };

    const addBasket = id =>{
        if (goodsBasket[id]){
            goodsBasket[id] += 1
        }else {
            goodsBasket[id] = 1
        }
        checkCount();
        cookieQuery();
    };

    const handlerGoods = event => {
        const target = event.target;

        if (target.classList.contains('card-add-wishlist')) {
            toggleWhishlist(target.dataset.goodsId, target);
        }

        if (target.classList.contains('card-add-cart')){
            addBasket(target.dataset.goodsId);

        }
    };

    const showWishlist = () => {
        getGoods(renderCart, goods => goods.filter(item => wishlist.includes(item.id)))
    };

    cardBtn.addEventListener('click', openCart);
    cart.addEventListener('click', closeCart);
    category.addEventListener('click', choiceCategory);
    search.addEventListener('submit', searchGoods);
    goodsWrapper.addEventListener('click', handlerGoods);
    wishlistBtn.addEventListener('click', showWishlist);

    getGoods(renderCart, randomSort);
    storageQuery(true);
    cookieQuery(true);

});