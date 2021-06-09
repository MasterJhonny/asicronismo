

const algoPasara = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Si lo logramos...yes.')
        } else {
            reject('Ups .. sucedio algo raro')
        }
    })
}

algoPasara()
    .then(response => console.log(response))
    .catch(err => console.error(err))


const algoPasara2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('Yes')
            }, 2000)
        } else {
            const err = new Error('Not.. ups sucedio algo raro')
            reject(err)
        }
    })
}

algoPasara2()
    .then(response => console.log(response))
    .catch(err => console.log(err))


let promesas = [algoPasara(), algoPasara2()]
Promise.all(promesas)
    .then(response => console.log(`Array of results `, response))
    .catch(err => console.log(err))