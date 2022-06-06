const express = require('express')
const app = express()
const PORT = 8000

const houses = { 
    'bell blvd': {
        'age':75,
        'location': 'bayside',
        'bathrooms': 3,
    },
    'college point': {
        'age':100,
        'location': 'college point',
        'bathrooms': 1,
    },
    'unknown': {
        'age': 5,
        'location': 'unknown',
        'bathrooms': 1
    }
    
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(houses)
})

app.listen(PORT, ()=> {
    console.log(`The server is now running on ${PORT}! Betta go catch it!`)
})