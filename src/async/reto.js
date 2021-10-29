const fetchData = require('../utils/fechData')
const API = 'https://rickandmortyapi.com/api/character/'


const obtenerDatos = async (url) => {
    try {
        let data = await fetchData(url)
        let character = await fetchData(`${url}${data.results[0].id}/`)
        let origin = await fetchData(character.origin.url)
        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    } catch (error) {
        console.log(error)
    }
}


obtenerDatos(API) 

