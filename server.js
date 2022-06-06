const express = require('express')
const app = express()
const PORT = 8000


const characters = {
    '21 savage': {
        'age': 29,
        'occupation': 'rapper',
        'sex': 'male'
    },
    'ash ketchum': {
        'age': 19,
        'occupation': 'pokemon trainer',
        'sex': 'male'
    },
    'c.c': {
        'age': 18,
        'occupation': 'nun',
        'sex': 'female'
    },
    'unknown': {
        'age': 0,
        'occupation': 'unknown',
        'sex': 'none'
    }
    
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(characters)
})

app.get('/api/:characterName', (request, response) => { // characterName is a variable
    const queryName = request.params.characterName.toLowerCase()
    if (characters[queryName]) {
        response.json(characters[queryName])
    }
    else {
        response.json(characters['unknown'])
    }
    
})
app.listen(PORT, ()=> {
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})