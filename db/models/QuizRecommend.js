import mongoose from "mongoose";
const { Schema, model } = mongoose;

const quizRecommendationSchema = new Schema({
  typeAScore: {
    type: String,
    required: true,
    trim: true,
  },
  typeBScore: {
    type: String,
    required: true,
    trim: true,
  },
  balancedScore: {
    type: String,
    required: true,
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