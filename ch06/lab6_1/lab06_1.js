const express = require('express')
const expressHandlebars = require('express-handlebars').engine
const bodyParser = require('body-parser')
const app = express()

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/thank-you', (req, res) => res.render('thank-you'))

app.get('*', (req, res) => res.render('register'))

app.post('/register-form' , (req, res) => {
    console.log(`received register from ${req.body.name}, ${req.body.email}, ${req.body.psw}`)
    res.redirect(303, '/thank-you')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\n navigate to http:localhost:${port}/headers\n`))
