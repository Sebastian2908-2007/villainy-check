import mongoose from "mongoose";
const {Schema, model} = mongoose;


const answerSchema = new Schema({
    answerText:{
        type: String,
        required: true,
        trim: true
    },
    answerValue:{
        type: String,
        required: true,
        trim: true,
    }
});

const Answer = mongoose.models.Answer || model('Answer', answerSchema);

module.exports = Answer;