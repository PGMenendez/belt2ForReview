// console.log("model.js");
const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "This Pirate needs a Name"],
        minLength: [3, "Name must be at least 3 letters."]
    },     
    position: {
        type: String,
        required: [true, "gotta have a job"],
        maxlength: [22, "Nobody needs a title like that on this crew"]
    },
  
    hasPegLeg: {
        type: Boolean,
        default: true,
        
    },
    hasEyePatch: {
        type: Boolean,
        default: true,
        
    },
    hasHookHand: {
        type: Boolean,
        default: true,
        
    },
    url: {
        type: String,
        required: [true, "Every pirate needs a selfie"],
    },
    catchPhrase: {
        type: String,
        required: [true, "Every pirate needs a catchphrase"],
        minLength: [3, "Even arr is three letters, c'mon man"]
    },
    treasure:{
        type: String,
        required: [true, "Every pirate needs treasure"],
    },


}, {timestamps: true});

module.exports = mongoose.model('Pirate', PirateSchema);