const {readFileSync, writeFileSync} = require('fs')
const fs = require('fs')

console.log(fs.readFileSync('./content/first.txt', 'utf-8'))
console.log(fs.readFileSync('./content/subfolder/text.txt', 'utf-8'))

writeFileSync('./content/second.txt', 'Hello this is the second text', {flag: 'a'})