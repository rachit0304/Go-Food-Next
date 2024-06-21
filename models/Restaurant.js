const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    name: String,
    ratings: String,
    description: String,
    price: String,
    location: String,
    city: String,
    state: String,
    discountOffer: String,
    image: String,
    latitude: String,
    longitude: String,
    servingAlcohol: {type: Boolean , default: false},
    isGold: {type: Boolean , default: false},
    OutdoorSitting: {type: Boolean , default: false},

}) 

mongoose.models = {};
const RestaurantModel = mongoose.model('go-food-enhanced', RestaurantSchema , 'go-food-enhanced');
module.exports = RestaurantModel;