const mongoose = require('mongoose');

let CustomerSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    orders: {
        type: Array
    }
})

module.exports = mongoose.model('Customer', CustomerSchema);