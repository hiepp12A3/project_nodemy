var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');

var shortDesc = document.querySelector('.short-desc');
var visibilyty = document.querySelector('.visibilyty span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var value = document.querySelector('.value');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body = document.querySelector('body');



async function changeWeatherUI(capitalSearch) {
    // let capitalSearch = search.value.trim();
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;

    let data = await fetch(apiURL).then(res => res.json());
    console.log(data);

    if (data.cod == 200) {
        content.classList.remove('hide');

        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibilyty.innerText = data.visibility + ' (m)';
        wind.innerText = data.wind.speed + ' (m/s)';
        sun.innerText = data.main.humidity + '%';
        let temp = Math.round(data.main.temp);
        value.innerText = temp;
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';
        time.innerText = new Date().toLocaleString('vi');

        body.setAttribute('class', 'hot')

        if (temp <= 25) {
            body.setAttribute('class', 'fall')
        }

        if (temp <= 22) {
            body.setAttribute('class', 'spring')
        }


        if (temp <= 19) {
            body.setAttribute('class', 'coll')
        }

        if (temp >= 28) {
            body.setAttribute('class', 'hot')
        }
    } else {
        content.classList.add('hide');
    }
}

search.addEventListener('keypress', function(e) {
    if (e.code === 'Enter') {
        let capitalSearch = search.value.trim();
        changeWeatherUI(capitalSearch);
    }
})

changeWeatherUI('Ha Noi');