let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/'
const PEOPLE = 'character/1/'
const LOCATE = 'location/1/'

const obtenerDatos = (id) => {
    return new Promise((resolve,reject) => {
        const http = new XMLHttpRequest();
        const url = `${API}${PEOPLE.replace('1', id)}`
        http.open('GET', url, true)
        http.onreadystatechange = () => {
            if(http.readyState === 4){
                if(http.status === 200){
                    let data = JSON.parse(http.responseText)
                    resolve(data)
                } else {
                    const error = new Error(`Upss.. ocurrio un error en ... ${url}`)
                    reject(error)
                }
            }
        }
        http.send()
    })
}

let ids = [1,2,3,4,5,6,7]
let promesas = ids.map(id => obtenerDatos(id))

Promise
    .all(promesas)
    .then(response => {
        response.forEach(e => {
            console.log(`#   ${e.id}`)
            console.log(`name:${e.name}`)
            console.log(`especie:${e.species}`)
        })
    })
    .catch(error => console.log(error.message))