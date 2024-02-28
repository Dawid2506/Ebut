const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    brand: String,
    model: String,
    price: Number,
    availableSizes: [Number]
}, { collection: 'items' 
});

module.exports = mongoose.model('Item', itemSchema);