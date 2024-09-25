const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result) => {
    console.log(`Error: ${err}`)
    if (err) throw err

    let firstText = result

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        console.log(`Error: ${err}`)
        if (err) throw err
    
        let secondText = result
    
        writeFile('./content/third.txt', `Here is the result: ${firstText}, ${secondText}`, (err) => {
            console.log(`Error: ${err}`)
            if (err) throw err
        })
    })
    
    

})

