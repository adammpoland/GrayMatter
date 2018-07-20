const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TestSchema = new Schema({
  info:{
        type: String,
        required: true
    },

    date: {
    type: Date,
    default: Date.now
}
});

mongoose.model('tests', TestSchema)
