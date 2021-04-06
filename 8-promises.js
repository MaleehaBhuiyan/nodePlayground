const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // when things go right 
        // resolve([2,4,6])
        // when things go wrong 
        reject('Things went wrong.')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log("Error!", error)
})