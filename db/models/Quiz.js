import mongoose from "mongoose";
const {Schema, model} = mongoose;

const Quiz = mongoose.models.Quiz || model('Quiz', new Schema({
    quizTitle: {
      type: String,
      required: true,
      trim: true,
    },
    quizOutcome: {
      type: String,
      required: false,
      trim: true,
    },
    idealOutcome: {
      type: String,
      required: true,
      trim: true,
    },
    questions: [{
      type: Schema.Types.ObjectId,
      ref: 'Question',
    }],
    outcomeRecommendations: {
      type: Schema.Types.ObjectId,
      ref: 'QuizRecommendation',
    },
  }));
  
  module.exports =  Quiz;