const mongoose = require('mongoose');
const addressSchema = new mongoose.Schema({
    street: String,
    postalCode: String,
    city: String,
    country: String
})

module.exports = mongoose.model('address', addressSchema)