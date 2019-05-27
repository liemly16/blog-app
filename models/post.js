const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = mongoose.model('Post', {
    title: String,
    content: String,
    thumb: String,
    category: String
    // category: { type: Schema.Types.ObjectId, ref: 'Category'}
});

module.exports = Post;