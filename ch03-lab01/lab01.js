const express = require('express')
const expressHandlebars = require('express-handlebars').engine;
const app = express()

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => res.render('home', {title: 'Home Page', message: 'Welcome to our website'}))
app.get('/about', (req, res) => res.render('about', {title: 'About Us', message: 'Learn more about our company.'}))

const port = process.env.PORT || 3000


//custom 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404 Not Found'})
})

//custom 500 page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500' ,{title: '500 Interal Server Error'});
})
app.listen(port, () => console.log(`server started on port ${port}; ` +  'press Ctrl-C to terminate.....'))