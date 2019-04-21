const mongoose = require('mongoose');
const Establishment = new mongoose.Schema({
    
    Establishment:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        require:true
    },
    Owner:{
        type:String,
        require:true
    }
},
    {
        timestamps:true
    }

);

module.exports = mongoose.model('Establishment', Establishment);