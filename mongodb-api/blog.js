const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// ket noi voi mongodb

mongoose.connect('mongodb://localhost:27017/SEM-3', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//dinh nghia schema cho san pham

const productSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body:String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number,
    },
});

//tao mo hinh product tu schema
const Blog = mongoose.model('Blog', productSchema);

//su dung body-parser de parse du liu tu request
app.use(bodyParser.json());

//Routes

// Get all products
app.get('/api/blogs', async (req, res) => {
    try{
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get a specific product by ID
app.get('/api/blogs/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.json(blog);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//create a new product

app.post('/api/blogs', async (req, res) => {
    const { title, author, body, comments, date, hidden, meta } = req.body;
    try {
        const newBlog = new Blog({ title, author, body, comments, date, hidden, meta });
        const savedBlog = await newBlog.save();
        res.json(savedBlog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// update a product by ID
app.put('/api/blogs/:id', async (req, res) => {
    const { title, author, body, comments, date, hidden, meta } = req.body;
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, author, body, comments, date, hidden, meta },
            { new: true }
        );
        if (!updatedBlog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.json(updatedBlog);
    }catch (error){
        res.status(500).json({ error: error.message });
    }
});

//delete a product by ID
app.delete('/api/blogs/:id', async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.json(deletedBlog);
    }catch (error){
        res.status(500).json({ error: error.message });
    }
});

//start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});