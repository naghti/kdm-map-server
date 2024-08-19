const mongoose = require("mongoose");

const Point = new mongoose.Schema({
    name: {type: String, required: false},
    type: {type: String, required: false},
    coordinates: {type: Array, required: false},
    street: {type: String, required: false},
    description: {type: String, required: false},
    accessibility: {type: Array, required: false},
    photos: {type: Array}
})

module.exports = mongoose.model('Point', Point);
