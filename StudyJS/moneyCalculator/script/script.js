const generateId = () => `genId${Math.round(Math.random() * 1e8).toString(16)}`

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

const renderOperation = (operation) => {
    const className = operation.amount < 0 ?
        'history__item-minus' :
        'history__item-plus';
    const listItem = document.createElement('li');

    listItem.classList.add('history__item');
    listItem.classList.add(className);

    listItem.innerHTML = `${operation.description}
                    <span class="history__money">${operation.amount} KZ</span>
                    <button class="history_delete" data-id="${operation.id}">x</button>
    `;
    historyList.append(listItem);
};

const updateBalance = () => {
    const resultIncome = dbOperation
        .filter((item) => item.amount > 0)
        .reduce((result, item) => result + item.amount, 0);

    const resultExpenses = dbOperation
        .filter((item) => item.amount < 0)
        .reduce((result, item) => result + item.amount, 0);

    totalMoneyIncome.textContent = resultIncome + ' KZ';
    totalMoneyExpenses.textContent = resultExpenses + ' KZ';
    totalBalance.textContent = (resultIncome + resultExpenses) + ' KZ';
};

const addOperation = (event) => {
    event.preventDefault();

    const operationNameValue = operationName.value,
        operationAmountValue = operationAmount.value;

    operationName.style.borderColor = '';
    operationAmount.style.borderColor = '';

    if (operationNameValue && operationAmountValue) {
        const operation = {
            id: generateId(),
            description: operationNameValue,
            amount: +operationAmountValue,
        };
        dbOperation.push(operation);
        init();
        console.log(dbOperation);

    } else {
        if (!operationNameValue) operationName.style.borderColor = 'red';
        if (!operationAmountValue) operationAmount.style.borderColor = 'red';
    }
    operationName.value = '';
    operationAmount.value = '';
};

const deleteOperation = (event) => {
    const target = event.target;
    if (target.classList.contains('history_delete')) {
        dbOperation = dbOperation
            .filter(operation => operation.id !== target.dataset.id);

        init();
    }
};

const init = () => {
    historyList.textContent = '';
    dbOperation.forEach(renderOperation)
    updateBalance();
};

form.addEventListener('submit', addOperation);
historyList.addEventListener('click', deleteOperation);
init();