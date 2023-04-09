import axios from 'axios'
const baseURL = 'https://restcountries.com/v3.1'

const getAll = () => {
    const req = axios.get(`${baseURL}/all`)
    return req.then(res => res.data)
}

export default { getAll }