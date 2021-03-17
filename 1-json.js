const fs = require("fs")


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book) // takes an object and turns it into a string 

// const parsedData = JSON.parse(bookJSON) // takes a string and parses it into an object 


// fs.writeFileSync('1-json.json', bookJSON) // creates a JSON file with JSON data

/*

const dataBuffer = fs.readFileSync('1-json.json') // first we are reading the data 
const dataJSON = dataBuffer.toString() // then converting the data into a string because when data is read it is initially returned in binary 
const data = JSON.parse(dataJSON) // then we have to parse the string so it will be easier to extract information from it 
console.log(data.title) // now we can grab data with dot notation 

*/ 

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = "Maleeha"
data.age = 21 

const maleehaJSON = JSON.stringify(data)
const parsedMaleeha = JSON.parse(maleehaJSON)
fs.writeFileSync('1-json.json', maleehaJSON)