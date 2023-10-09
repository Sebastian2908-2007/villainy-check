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
    /**when each recommend is made it will be pushed here
     * at the end of the quiz we will assess scores and push
     * appropriate recommend based of of its typeOfRecommendation field matching
     * the score field that scored highest or something like that
     */
    outcomeRecommendations:[ {
      type: Schema.Types.ObjectId,
      ref: 'QuizRecommendation',
    }],
  }));
  
  module.exports =  Quiz;