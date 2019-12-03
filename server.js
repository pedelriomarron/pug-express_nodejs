const express = require('express')
const app = express()
const functions = require('./functions/functions')

const port = process.env.PORT || 3000


app.use(express.static(`${__dirname}/public`))
app.set('view engine', 'pug')

app.use((req, res, next) => {
    res.locals.functions = functions;
    next();
})

app.get('/', (req, res) => {
    res.render('home', {
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
    })
})

app.listen(port, () => {
    console.log(`Escuchando peteciones por el puerto ${port}`)
})