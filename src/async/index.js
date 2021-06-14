const doSomething = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Some yes...'), 2000)
            : reject(new Error('Ups.. fatalliss...:('))
    })
}


const doSomeDemo = async () => {
    try{
        let data = await doSomething()
        console.log(data)
    } catch(err){
        console.log(err)
    }
}

doSomeDemo()