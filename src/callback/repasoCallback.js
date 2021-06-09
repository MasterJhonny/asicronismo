let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://swapi.dev/api/'
const PEOPLE = 'people/1/'
const PLANET = 'planets/1/'
const FILL = 'films/1/'

function obtenerDatos(url, callback) {
    let http = new XMLHttpRequest();
    http.open('GET', url, true);
    http.onreadystatechange = function(){
        if(http.readyState === 4){
            if(http.status === 200){
                let data = JSON.parse(http.responseText)
                callback(null, data)
            } else {
                let error = new Error(`ops sucedio un error ${url}`)
                callback(error, null)
            }
        }
    }
    http.send();
}

obtenerDatos(`${API}${PEOPLE}`, (err1, data1) => {
    if(err1) return console.log(err1)
    obtenerDatos(`${API}${PLANET}`, (err2, data2) => {
        if(err2) return console.log(err2)
        obtenerDatos(`${API}${FILL}`, (err3, data3) => {
            if(err3) return console.log(err3)
            obtenerDatos(`${API}${FILL}`, (err4, data4) => {
                console.log(data1.name)
                console.log(data2.name)
                console.log(data3.episode_id)
                console.log(data4.opening_crawl)
            })
        })
    })
})
