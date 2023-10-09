import mongoose from "mongoose";
const {Schema, model} = mongoose;


const answerSchema = new Schema({
    answerTxt:{
        type: String,
        required: true,
        trim: true
    },
    answerType:{
        type: String,
        required: true,
        trim: true 
    },
    correct:{
        type: String,
        required: true,
        trim: true,
    }
});

const Answer = mongoose.models.Answer || model('Answer', answerSchema);

module.exports = Answer;