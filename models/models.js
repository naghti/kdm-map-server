const mongoose = require("mongoose");

const Point = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    coordinates: {type: Array, required: true},
    street: {type: String, required: true},
    description: {type: String, required: true},
    accessibility: {type: Array, required: true},
    photos: {type: Array}
})

module.exports = mongoose.model('Point', Point);
