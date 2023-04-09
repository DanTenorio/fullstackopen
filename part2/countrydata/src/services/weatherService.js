import axios from 'axios'
const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
// const API_KEY = process.env.WEATHER_API_KEY

const getWeather = (country) => {
    console.log('Getting Weather for ', country.name.common);
    // console.log(API_KEY)
}

export default { getWeather }