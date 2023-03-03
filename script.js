let temp = document.querySelector("#temp");
let img = document.querySelector("#img");
let temp1 = document.querySelector("#temp1");
let img1 = document.querySelector("#img1");
let temp2 = document.querySelector("#temp2");
let img2 = document.querySelector("#img2");
let butF = document.querySelector("#changeforF");
let butC = document.querySelector("#changeforC");
let temp_max = document.querySelector("#temp_max");
let temp_max1 = document.querySelector("#temp_max1");
let temp_max2 = document.querySelector("#temp_max2");

let temp_min = document.querySelector("#temp_min");
let temp_min1 = document.querySelector("#temp_min1");
let temp_min2 = document.querySelector("#temp_min2");

temp_max.innerHTML = tempMaxKyiv();
temp_max1.innerHTML = tempMaxLondon();
temp_max1.innerHTML = tempMaxNewYourk();

temp_min.innerHTML = tempMinKyiv();
temp_min1.innerHTML = tempMinLondon();
temp_min1.innerHTML = tempMinNewYourk();

temp.innerHTML = temperatureKyiv();
temp1.innerHTML = temperatureLondon();
temp2.innerHTML = temperatureNewYork();

img.innerHTML = imgFunction();
img1.innerHTML = imgFunction1();
img2.innerHTML = imgFunction2();

butF.addEventListener("click", temperatureKyivF);
butF.addEventListener("click", temperatureLondonF);
butF.addEventListener("click", temperatureNewYorkF);
butF.addEventListener("click", tempMinKyivF);
butF.addEventListener("click", tempMinLondonF);
butF.addEventListener("click", tempMinNewYourkF);
butF.addEventListener("click", tempMaxKyivF);
butF.addEventListener("click", tempMaxLondonF);
butF.addEventListener("click", tempMaxNewYourkF);

butC.addEventListener("click", temperatureKyiv);
butC.addEventListener("click", temperatureLondon);
butC.addEventListener("click", temperatureNewYork);
butC.addEventListener("click", tempMinKyiv);
butC.addEventListener("click", tempMinLondon);
butC.addEventListener("click", tempMinNewYourk);
butC.addEventListener("click", tempMaxKyiv);
butC.addEventListener("click", tempMaxLondon);
butC.addEventListener("click", tempMaxNewYourk);


//temperature functions//

function temperatureKyiv() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp.innerHTML = ((Math.floor(data.main.temp - 273.15)) + " °C " + data.weather[0]['description']));
}
function temperatureLondon() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp1.innerHTML = ((Math.floor(data.main.temp - 273.15)) + " °C " + data.weather[0]['description']));
}
function temperatureNewYork() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp2.innerHTML = ((Math.floor(data.main.temp - 273.15)) + " °C " + data.weather[0]['description']));
}

function temperatureKyivF() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp.innerHTML = ((Math.floor(data.main.temp - 273.15) * 1.8 + 32) + " ℉ " + data.weather[0]['description']));
}
function temperatureLondonF() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp1.innerHTML = ((Math.floor(data.main.temp - 273.15) * 1.8 + 32) + " ℉ " + data.weather[0]['description']));
}
function temperatureNewYorkF() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp2.innerHTML = ((Math.floor(data.main.temp - 273.15) * 1.8 + 32) + " ℉ " + data.weather[0]['description']));
}

//max temperature//

function tempMaxKyiv() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp_max.innerHTML = ((Math.floor(data.main.temp - 273.15)) + " °C "));
}
function tempMaxLondon() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp_max1.innerHTML = ((Math.floor(data.main.temp - 273.15)) + " °C "));
}
function tempMaxNewYourk() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp_max2.innerHTML = ((Math.floor(data.main.temp - 273.15)) + " °C "));
}

function tempMaxKyivF() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp_max.innerHTML = ((Math.floor(data.main.temp - 273.15) * 1.8 + 32) + " ℉ "));
}
function tempMaxLondonF() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp_max1.innerHTML = ((Math.floor(data.main.temp - 273.15) * 1.8 + 32) + " ℉ "));
}
function tempMaxNewYourkF() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp_max2.innerHTML = ((Math.floor(data.main.temp - 273.15) * 1.8 + 32) + " ℉ "));
}


//min temperature//
function tempMinKyiv() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp_min.innerHTML = ((Math.floor(data.main['temp_min'] - 273.15)) + " °C "));
}
function tempMinLondon() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp_min1.innerHTML = ((Math.floor(data.main['temp_min'] - 273.15)) + " °C "));
}
function tempMinNewYourk() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp_min2.innerHTML = ((Math.floor(data.main['temp_min'] - 273.15)) + " °C "));
}

function tempMinKyivF() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp_min.innerHTML = ((Math.floor(data.main['temp_min'] - 273.15) * 1.8 + 32) + " ℉ "));
}
function tempMinLondonF() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp_min1.innerHTML = ((Math.floor(data.main['temp_min'] - 273.15) * 1.8 + 32) + " ℉ "));
}
function tempMinNewYourkF() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => temp_min2.innerHTML = ((Math.floor(data.main['temp_min'] - 273.15) * 1.8 + 32) + " ℉ "));
}

//img functions//

function imgFunction() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => img.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`);
}
function imgFunction1() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => img1.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`);
}
function imgFunction2() {
    let response = fetch("http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f")
        .then(response => response.json())
        .then(data => img2.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`);
}
