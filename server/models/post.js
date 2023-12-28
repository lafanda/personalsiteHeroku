const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const postSchema = new Schema({
    title: {type: String, required: true},
    summary: {type: String},
    content: {type: String, required: true},
    image: {type: String, required: true},
},{
    timestamps: true,
});

const postModel = model('Post', postSchema);

module.exports = postModel;