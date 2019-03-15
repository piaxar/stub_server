const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

app.get('/', function (req, res)  {
    res.send('Hello there')
})

app.get('/genres', function (req, res)  {
    if (req.query.name === 'pop') {
        res.send({name: 'pop', songs_count: 100})
    } else if (req.query.name === 'rock') {
        res.send({name: 'rock', songs_count: 200})
    } else {
        res.send({name: 'no_data'})
    }
})

app.get('/music', function (req, res)  {
    if (req.query.username === 'ivan') {
        res.send([
            {name: 'Dont stop me now', author: 'Queen'},
            {name: 'Bohemian Rhapsody', author: 'Queen'}
        ])
    } else if (req.query.username === 'oleg') {
        res.send([
            {name: 'Cant stop', author: 'Red hot chilli peppers'},
            {name: 'Snow', author: 'Red hot chilli peppers'}
        ])
    } else {
        res.send([
            {name: '', author: ''}
        ])
    }
})

app.get('/ip', (req, res) => res.send('0.0.0.0'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))