import mongoose from "mongoose";
const { Schema, model } = mongoose;

const quizRecommendationSchema = new Schema({
  /**we will use below data string later to determine if the recomendation should be sent based off which score was highest*/
  typeOfRecommendation:{
    type: String,
    required: true
  },
  typeAScore: {
    type: String,
    required: false,
    trim: true,
  },
  typeBScore: {
    type: String,
    required: false,
    trim: true,
  },
  balancedScore: {
    type: String,
    required: false,
    trim: true,
  },
  resultsMeaning: {
    type: String,
    required: true,
    trim: true,
  },
  tipsSummary: {
    type: String,
    required: true,
    trim: true,
  },
});

const QuizRecommendation = mongoose.models.QuizRecommendation || model('QuizRecommendation', quizRecommendationSchema);

module.exports = QuizRecommendation;

/** great I need you to do it again and  */