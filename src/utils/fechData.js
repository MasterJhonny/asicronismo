let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.onreadystatechange = () => {
            if(req.readyState === 4){
                if(req.status === 200){
                    let data = JSON.parse(req.responseText)
                    resolve(data)
                } else {
                    const error = new Error(`Ups... :( sucedio un error en ${url}`)
                    reject(error)
                }
            }
        }
        req.send()
    })
}

module.exports = fetchData;