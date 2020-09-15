const express = require('express');

const app = express()
/*
app.use((req, res, next) => {
    console.log(req.url);
    next()
})

app.use((req, res) => {
    res.sendFile(__dirname + '/mipagina.html')
})
*/
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/mipagina.html")
})

app.get('/muestra-imagen', (req, res) => {
    res.sendFile(__dirname + "/js.png")
})

app.get('/acerca-de', (req, res) => {
    res.send("acerca")
})

app.get('/habilidades', (req, res) => {
    res.send("habilidades")
})

app.get('/new', (req, res) => {
    res.send('nueva página!!!!')
})

app.get('/myname', (req, res) => {
    res.send('<h1>José Manuel Herrero</h1>')
})

app.listen( process.env.PORT || 3000)
