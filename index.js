const key = 'f46b40ae55e47684a001f5530df452f5'
const thunderstormCode = "2"
const drizzleCode = "3"
const rainCode = "5"
const snowCode = "6"
const clearCode = "8"
const cloudCode = "8"

async function getWeather(city){
    const rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`, {mode: "cors"});
    const dataJson = await rawData.json()
    // console.log(dataJson.main)
    // console.log(dataJson.weather[0].main)
    // console.log(dataJson)

    let feelsLike = dataJson.main.feels_like; //
    let humidity = dataJson.main.humidity; //
    let pressure = dataJson.main.pressure; //
    let wind = dataJson.wind.speed;

    let mainTemp = dataJson.main.temp //
    let cityName = dataJson.name //
    let high = dataJson.main.temp_max //
    let low = dataJson.main.temp_min // 
    let condition = dataJson.weather[0].description //

    let updateName = document.querySelector('#name')
    updateName.textContent = cityName

    let updateMainTemp = document.querySelector('#main-temp')
    updateMainTemp.textContent = mainTemp

    let updateHigh = document.querySelector('#high')
    updateHigh.textContent = high

    let updateLow = document.querySelector('#low')
    updateLow.textContent = low

    let updateCondition = document.querySelector('.condition')
    updateCondition.textContent = condition

    let updateFeelsLike = document.querySelector('.feels-like')
    updateFeelsLike.textContent = feelsLike

    let updatePressure = document.querySelector('.pressure')
    updatePressure.textContent = pressure

    let updateHumidity = document.querySelector('.humidity')
    updateHumidity.textContent = humidity

    let updateWind = document.querySelector('.wind')
    updateWind.textContent = wind

    let imgCode = dataJson.weather[0].id.toString()[0]
    let mainWeatherImg = document.querySelector('.sunny')
    if(imgCode === thunderstormCode){
        mainWeatherImg.textContent = "thunderstorm"
    }
    if(imgCode === drizzleCode || imgCode === rainCode){
        mainWeatherImg.textContent = "rainy"
    }
    if(imgCode === snowCode){
        mainWeatherImg.textContent = "cloudy_snowing"
    }
    if(imgCode === clearCode){
        mainWeatherImg.textContent = "cloud"
    }
    if(dataJson.weather[0].main === 'Clear'){
        mainWeatherImg.textContent = "sunny"
    }

// const thunderstormCode = 2
// const drizzleCode = 3
// const rainCode = 5
// const snowCode = 6
// const clearCode = 8
// const cloudCode = 8

    console.log(imgCode)
    console.log(dataJson)
    console.log(feelsLike)
    console.log(humidity)
    console.log(pressure)
    console.log(wind)
    console.log(mainTemp)
    console.log(cityName)   
    console.log(high) 
    console.log(low)
    console.log(condition)
   
    return dataJson
}

const searchBar = document.querySelector('#form')
searchBar.addEventListener('submit', (e) => {
    // console.log(searchBar)
    const formData = new FormData(searchBar);
    const values = [...formData.entries()];
    console.log(values)
    let weatherJson = getWeather(values[0][1])
    // updateDom(weatherJson)
    // currentSearch = values[0][1]
    // console.log()
    e.preventDefault();
})

function updateDom(weatherJson){
    console.log(weatherJson)
    // let feelsLike = weatherJson.main.feels_like;
    // let humidity = weatherJson.main.humidity;
    // let pressure = weatherJson.main.pressure;
    // let wind = weatherJson.wind.speed;

    // let mainTemp = weatherJson.main.temp
    // let city = weatherJson.name
    // let high = weatherJson.main.temp_max
    // let low = weatherJson.main.temp_min
    // let condition = weatherJson.weather[0].description

    // console.log(feelsLike)
    // console.log(humidity)
    // console.log(pressure)
    // console.log(wind)
    // console.log(mainTemp)
    // console.log(city)   
    // console.log(high) 
    // console.log(low)
    // console.log(condition)


}

// getWeather('calgary')