import mongoose from "mongoose";
const {Schema, model} = mongoose;

const questionSchema = new Schema({
    questionText: {
      type: String,
      required: true,
      trim: true,
    },
    correctAnswer: {
      type: String,
      required: true,
      trim: true,
    },
    questionValue: {
      type: String,
      required: true,
      trim: true,
    },
    answerOptions: [{
      type: Schema.Types.ObjectId,
      ref: 'Answer',
    }],
  });
  
  const Question = mongoose.models.Question || model('Question', questionSchema);
  
  module.exports =  Question ;