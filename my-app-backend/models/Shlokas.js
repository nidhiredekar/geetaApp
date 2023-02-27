const mongoose = require('mongoose');
const { Schema } = mongoose;
const ShlokaSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    shloka_id: {
        type: String,
        require:true,
        unique : true
    },
    text: {
        type: String,
        require:true
    },
    translation: {
        type: String,
        require:true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const Shloka = mongoose.model('shlokas', ShlokaSchema);
module.exports = Shloka;