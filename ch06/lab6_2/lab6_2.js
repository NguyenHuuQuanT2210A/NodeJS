const express = require('express')
const expressHandlebars = require('express-handlebars').engine
const bodyParser = require('body-parser')
const app = express()

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))


app.get('*', (req, res) => res.render('feedback'))

app.post('/feedback-form' , (req, res) => {
    if (req.body.feedbackInput == "happy"){
        res.send('Thank you!')
    }else{
        res.send('Thank you and sorry! :(')
    }
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\n navigate to http:localhost:${port}/headers\n`))
