// let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// let API = 'https://rickandmortyapi.com/api/character/'

// function fetchData(url, callback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', url, true);
//     req.onreadystatechange = function(event) {
//         if(req.readyState === 4){
//             if(req.status === 200){
//                 callback(null, JSON.parse(req.responseText));
//             } else {
//                 const error = new Error(`Error ${url}`);
//                 return callback(error, null)
//             }
//         }
//     }
//     req.send()
// }

// fetchData(API, function(error1, data1){
//     if(error1) return console.log(error1)
//     fetchData(API+data1.results[10].id, function(error2, data2){
//         if(error2) return console.log(error2)
//         fetchData(data2.origin.url, function(error3, data3){
//             if(error3) return console.log(error3)
//             console.log(data1.info.count)
//             console.log(data2.name)
//             console.log(data3.dimension)
//         })
//     })
// })

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'


function fetchData(url, callback) {
    let req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onreadystatechange = function(event) {
        if(req.readyState === 4){
            if(req.status === 200){
                callback(null, JSON.parse(req.responseText));
            } else {
                const error = new Error(`Error ${url}`)
                console.log(error)
                return callback(error, null);
            }
        }
    }
    req.send()
}

fetchData(API, function(error1, data1){
    if(error1) return console.log(error1)
    fetchData(API+data1.results[0].id, function(error2, data2){
        if(error2) return console.log(error2)
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.log(error3)
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})