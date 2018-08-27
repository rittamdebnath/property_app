const mongoose = require('mongoose');
const propertySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
    },
    photos: [{
        type: String,
    }],
    location: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    amenities: [{
        type: String,
        required: true
    }],
    available_rooms: {
        type: Number,
        required: true
    },
    housemates: [{
        type: String,
        required: true
    }],
    bedrooms: {
        type: Number
    },
    bathrooms: {
        type: Number
    },
    pets: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Property', propertySchema);