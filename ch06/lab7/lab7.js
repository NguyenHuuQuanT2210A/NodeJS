const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const students = [
    { id: 1, name: 'Nguyen Van A',email: 'vana@example.com', phone: '123456789', gpa: 3.5, status:'Active' },
    { id: 2, name: 'Tran Thi B',email: 'thib@example.com', phone: '987654321', gpa: 3.2, status:'Inactive' },
]

app.get('/api/students', (req, res) => res.json(students))

app.post('/api/students' , (req, res) => {
    const p = {}
    if(!p) return res.status(410).json({ error: 'No such student exists' })
    if(req.body.name) p.name = req.body.name
    if(req.body.email) p.email = req.body.email
    if(req.body.phone) p.phone = req.body.phone
    if(req.body.gpa) p.gpa = req.body.gpa
    if(req.body.status) p.status = req.body.status

    students.unshift(p);
    res.json(students)
})

app.put('/api/students/:id', (req, res) => {
    const p = students.find(p => p.id === parseInt(req.params.id))
    if(!p) return res.status(410).json({ error: 'No such student exists' })
    if(req.body.name) p.name = req.body.name
    if(req.body.email) p.email = req.body.email
    if(req.body.phone) p.phone = req.body.phone
    if(req.body.gpa) p.gpa = req.body.gpa
    if(req.body.status) p.status = req.body.status
    res.json({ success: true })
})

app.delete('/api/students/:id', (req, res) => {
    const idx = students.findIndex(student => student.id === parseInt(req.params.id))
    if(idx < 0) return res.json({ error: 'No such student exists.' })
    students.splice(idx, 1)
res.json({ success: true })
})

app.use('*', (req, res) => res.send('Check out our "<a href="/api/students">/api/students</a> page!"'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\n navigate to http:localhost:${port}/headers\n`))
