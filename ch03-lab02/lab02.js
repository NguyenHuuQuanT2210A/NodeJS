const express = require('express')
const expressHandlebars = require('express-handlebars').engine;
const app = express()

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
// extname: '.hbs' : đổi đuôi handlebars
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => res.render('about'))

const products = [
    { name: 'Product 1', image: '/img/dua-hau.png' },
    { name: 'Product 2', image: '/img/qua-cam.jpg' }
]

app.get('/product', (req, res) => {
    res.render('product',{ product: products })
})

//custom 404 page
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

//custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})
app.listen(port, () => console.log(`server started on port ${port}; ` +  'press Ctrl-C to terminate.....'))