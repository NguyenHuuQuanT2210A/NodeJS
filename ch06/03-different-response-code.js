const express = require('express')
const expressHandlebars = require('express-handlebars').engine
const app = express()

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/about', (req, res) => {
    res.status(500).render('error')
})

app.get('*', (req, res) => res.send('Check out our "<a href="/error">error</a> page!"'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\n navigate to http:localhost:${port}/headers\n`))
