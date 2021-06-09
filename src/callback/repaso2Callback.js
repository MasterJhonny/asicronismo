const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/'
const PEOPLE = 'character/'
const LOCATE = 'location/1/'

function obtenerDatos(url, callback) {
    let http = new XMLHttpRequest();
    http.open('GET', url, true)
    http.onreadystatechange = function(){
        if(http.readyState === 4){
            if(http.status === 200){
                let data = JSON.parse(http.responseText)
                callback(data)
            } else {
                let error = new Error(`Upss, se produjo un error..en ${url}`)
                console.log(error)
            }
        }
    }
    http.send()
}

obtenerDatos(`${API}${PEOPLE}`, (data1) => {
    obtenerDatos(`${API}${PEOPLE}1/`, (data2) => {
        obtenerDatos(`${API}${LOCATE}`, (data3) => {
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})
