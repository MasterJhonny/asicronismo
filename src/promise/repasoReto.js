const fetchData = require('../utils/fechData')

const API = 'https://rickandmortyapi.com/api/character/'

fetchData(API)
    .then(response => {
        console.log(response.info.count)
        return fetchData(API)
    })
    .then(response => {
        console.log(response.results[0].name)
        return fetchData(response.results[0].origin.url)
    })
    .then(response => {
        console.log(response.dimension)
    })
    .catch(err => console.log(err))