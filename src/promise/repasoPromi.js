const algoPasara = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Yes si...')
        } else {
            reject('Not .. Ups..')
        }
    })
}

algoPasara()
    .then(response => console.log(response))
    .catch(err => console.log(err))

const algoPasara2 = () => {
    return new Promise((resolve,   reject) => {
        if(true){
            setTimeout(() => resolve('true'), 2000)
        } else {
            const err = new Error('Not ..this is a error')
            reject(err)
        }
    })  
}

algoPasara2()
    .then(response => console.log(response))
    .catch(err => console.log(err))

let promesas = [algoPasara(), algoPasara2()]

Promise
    .all(promesas)
    .then(response => console.log('resultado de los Array', response))
    .catch(err => console.log(err))
    