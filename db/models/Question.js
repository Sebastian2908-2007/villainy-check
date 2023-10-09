import mongoose from "mongoose";
const {Schema, model} = mongoose;

const questionSchema = new Schema({
    ques1: {
      type: String,
      required: true,
      trim: true,
    },
    ques2: {
      type: String,
      required: true,
      trim: true,
    },
    correctAnswer: {
      type: Schema.Types.ObjectId,
      ref: 'Answer',
    },
    answers: [{
      type: Schema.Types.ObjectId,
      ref: 'Answer',
    }],
  });
  
  const Question = mongoose.models.Question || model('Question', questionSchema);
  
  module.exports =  Question ;