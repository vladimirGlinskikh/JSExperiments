const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = document.querySelector('.input__cities-from'),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    inputCitiesTo = document.querySelector('.input__cities-to'),
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputDateDepart = document.querySelector('.input__dat-depart');

const city = ['Moscow', 'Kostanay', 'Minsk', 'Karaganda', 'Chelyabinsk',
    'Kerch', 'Volgograd', 'Samara', 'Dnepro', 'Ekaterinburg', 'Odessa'];

inputCitiesFrom.addEventListener('input', () => {
    const filterCity = city.filter((item) => {
        const fixItem = item.toLowerCase();
        return fixItem.includes(inputCitiesFrom.value.toLowerCase());
    });
    console.log(filterCity);
});

const get = (name) => {
    console.log('вызов get: ' + name);
};