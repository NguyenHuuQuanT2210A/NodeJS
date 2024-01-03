const blogService = require("../services/BlogService");

exports.getAllBlogs = async (req, res) => {
    try{
        const blogs = await blogService.getAllBlogs();
        res.json({data: blogs, status: "success"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.createdBlog = async (req, res) => {
    try {
        const blog = await blogService.createdBlog(req.body);
        res.json({data: blog, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBlogById = async (req, res) => {
    try {
        const blog = await blogService.getBlogById(req.params.id);
        res.json({data: blog, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updatedBlog = async (req, res) => {
    try {
        const blog = await blogService.updatedBlog(req.params.id, req.body);
        res.json({data: blog, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deletedBlog = async (req, res) => {
    try {
        const blog = await blogService.deletedBlog(req.params.id);
        res.json({data: blog, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};