const BlogModel = require("../models/Blog");

exports.getAllBlogs = async () => {
    return await BlogModel.find();
};

exports.createdBlog = async (blog) => {
    return await BlogModel.create(blog);
};

exports.getBlogById = async (id) => {
    return await BlogModel.findById(id);
};

exports.updatedBlog = async (id, blog) => {
    return await BlogModel.findByIdAndUpdate(id, blog);
};

exports.deletedBlog = async (id) => {
    return await BlogModel.findByIdAndDelete(id);
};
