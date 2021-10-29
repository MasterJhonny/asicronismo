const hacerAlgo = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('ok esto salio bien'), 2000)
        : reject(new Error('Upss.. algo salio mal... :(')) 
    })
}

const recibirPromise = async () => {
    try {
        let valor = await hacerAlgo()
        console.log(valor)
    } catch (error) { 
        console.log(error)
    }
}

recibirPromise()