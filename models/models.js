const mongoose = require("mongoose");

const PointSchema = new mongoose.Schema({
    name: {type: String, required: false},
    type: {type: String, required: false},
    coordinates: {type: Array, required: false},
    street: {type: String, required: false},
    description: {type: String, required: false},
    accessibility: {type: Array, required: false},
    photos: {type: Array}
})

const VisitorsSchema = new mongoose.Schema({
    ip: {type: String, required: true},
    visit: {type: String, require: true}
})

const VisitorsCountSchema = new mongoose.Schema({
    amount: {type: Number, required: true, default: 0}
})

const Point = mongoose.model('Point', PointSchema);
const Visitors = mongoose.model('Visitors', VisitorsSchema);
const VisitorsCount = mongoose.model('VisitorsCount', VisitorsCountSchema);

module.exports = {
    Point,
    Visitors,
    VisitorsCount
};