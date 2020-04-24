const totalBalance = document.querySelector('.total__balance'),
    totalMoneyIncome = document.querySelector('.total__money-income'),
    totalMoneyExpenses = document.querySelector('.total__money-expenses'),
    historyList = document.querySelector('.history__list'),
    form = document.getElementById('form'),
    operationName = document.querySelector('.operation__name'),
    operationAmount = document.querySelector('.operation__amount');

let dbOperation = [
    {
        id: '1',
        description: 'Получил зарплату',
        amount: 30000,

    },
    {
        id: '2',
        description: 'Купил билеты',
        amount: -10000,

    },
    {
        id: '3',
        description: 'Отдал долг',
        amount: -5000,

    },
    {
        id: '4',
        description: 'Ужин в ресторане',
        amount: -4000,

    },
    {
        id: '5',
        description: 'Заработал на фрилансе',
        amount: 20000,

    },
];

const renderOperation = () => {
    const listItem = document.createElement('li');
    listItem.classList.add('history__item');
    listItem.innerHTML = `
                    <span class="history__money">+30000 ₽</span>
                    <button class="history_delete">x</button>
    `;
    historyList.append(listItem);
};

renderOperation();