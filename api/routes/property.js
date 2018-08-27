const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Property = require('../models/property')

router.post('/add', (req, res, next) => {
    const property = new Property({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        price: req.body.price,
        photos: req.body.photos,
        thumbnail: req.body.thumbnail,
        location: req.body.location,
        about: req.body.about,
        amenities: req.body.amenities,
        available_rooms: req.body.available_rooms,
        housemates: req.body.housemates,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        pets: req.body.pets
    })
    property.save()
        .then((result) => {
            res.status(201).json({
                message: 'success',
                propertyDetails: result
            })
        }).catch((err) => {
            res.status(500).json({
                error: err
            })
        });
})

router.get('/list', (req, res, next) => {
    Property.find()
        .exec()
        .then((property) => {
            res.status(200).json({
                properties: property
            })
        }).catch((err) => {
            res.status(404).json({
                error: err
            })
        });
})

router.delete('/:propertyId', (req, res, next) => {
    Property.remove({
        _id: req.params.propertyId
    })
        .exec()
        .then((property) => {
            res.status(200).json({
                message: 'removed property successfullly'
            })
        }).catch((err) => {
            res.status(404).json({
                error: err
            })
        });
})

module.exports = router; 


//jsonfiles

// {
//     "title": "Tight knit community looking to fill an open room in our Redwood City home right off the 101 ",
//     "location":"https://www.google.com/maps/place/S.V+sublimation/@17.5047467,78.4948517,15z/data=!4m5!3m4!1s0x3bcb99f19cc3d1dd:0xeb45e5847f63eafd!8m2!3d17.5102741!4d78.4968773",
//     "price": "1250",
//     "photos":["https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=25978c36561a4bc1c1701a469ccf09d3&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1530125086495-effd3661612e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f34af55e7bd90a0adee4a0e51ac1d38&auto=format&fit=crop&w=1350&q=80","https://images.unsplash.com/photo-1530480112856-5190be831ce8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b91b40c435961c004769a685035111eb&auto=format&fit=crop&w=675&q=80"],
//     "thumbnail": "https://images.unsplash.com/photo-1530480112856-5190be831ce8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b91b40c435961c004769a685035111eb&auto=format&fit=crop&w=675&q=80",
//     "about": "This is the perfect place for anyone looking to live in Oakland. The MacArther BART station is just a few minutes away! There's also tons of restaurants, bars, coffee shops and grocery stores right next door. Plus, its only a 3 block walk over to Telegraph Ave where everything else is.",
//     "bathrooms": 3,
//     "available_rooms": 5,
//     "bedrooms": 4,
//     "pets": true,
//     "amenities": ["55' Smart TV","Community Events","Fully furnished","High Speed Wifi","Monthly Cleaning Service"],
//     "housemates": ["Nora l","bingo Lim","fudos","pimarane"]
// }