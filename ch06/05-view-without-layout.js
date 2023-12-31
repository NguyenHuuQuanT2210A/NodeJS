const express = require('express')
const expressHandlebars = require('express-handlebars').engine
const app = express()

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/no-layout', (req, res) => {
    res.render('no-layout', { layout: null })
})

app.get('*', (req, res) => res.send('Check out our "<a href="/no-layout">no layout</a> page!"'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\n navigate to http:localhost:${port}/headers\n`))
