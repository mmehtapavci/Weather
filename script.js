const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'c84e39e1cd8b19a31aa75c5df9e9339a';

const setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value);
};

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
        .then(weather => {
            return weather.json();
        })
        .then(displayResult);
};

const displayResult = (result) => {
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description;

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_min)}°C - ${Math.round(result.main.temp_max)}°C`;

    // Arka plan resmini güncelle
    updateBackground();
};

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);

// Arka plan resmini güncellemek için kullanılacak kodlar
const backgroundImages = ['background1.jpg', 'background2.jpg', 'background3.jpg'];
let currentIndex = 0;

function updateBackground() {
    document.body.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
    currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Sayfa yüklendiğinde ilk hava durumu bilgisini çekin
window.addEventListener('load', () => {
    getResult('YOUR_DEFAULT_CITY_NAME'); // Varsayılan şehir adını buraya ekleyin
});
