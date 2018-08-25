const mongoose = require('mongoose');

let OrderSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    customer_id: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    items_quantity: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Order', OrderSchema);