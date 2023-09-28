const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'c84e39e1cd8b19a31aa75c5df9e9339a'

const setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query)
}

const searchBar = document.getElementById('searcBar')
searchBar.addEventListener('keypress', setQuery)