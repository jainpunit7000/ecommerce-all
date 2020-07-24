const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name : {type: String, required: true },
    email: {type: String, 
        required: true, 
        unique: true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    password: {type: String, required: true },
    address:{type: String, default: " " },
    regNo: {type: String, default: " " },

    
});

module.exports = mongoose.model('Seller', sellerSchema);