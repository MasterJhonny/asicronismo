const fetchData = require('../utils/fechData');

const API = 'https://rickandmortyapi.com/api/'
const PEOPLE = 'character/'
const LOCATE = 'location/1/'

fetchData(`${API}${PEOPLE}`)
    .then(data => {
        console.log(data.info.count)
        return fetchData(`${API}${PEOPLE}1/`)
    })
    .then(data => {
        console.log(data.name)
        return fetchData(`${API}${LOCATE}`)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.log(err))