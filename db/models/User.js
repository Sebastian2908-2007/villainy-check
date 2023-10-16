import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password:{
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },

/**fields important to quizzing */

  quizComplete: {
    type: Boolean,
    default: false,
  },
  quizLink: {
    type:String,
    required: false
},
  assignedQuiz: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz',
},
quizOutcome: {
  type: String,
  required: false,
  trim: true,
},
  adminEmail: {
    type: String,
    required: false,
    trim: true,
  },
  isSubject: {
    type: Boolean,
    default: false,
  },
  /**this will be given based on score*/
  quizRecommendations: {
    type: Schema.Types.ObjectId,
    ref: 'QuizRecommendation',
  },
/**fields important to quizzing */

  // Fields for paid and super admin users
  phone: {
    type:String,
    required: false
},
  industryType: {
    type:String,
    required: false
},

  productType: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  usage:  {
    type:String,
    required: false
},
  subjects: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  organizationName:  {
    type:String,
    required: false
},
  // Additional super admin fields (if needed)
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isSuperAdmin: {
    type: Boolean,
    default: false,
  },
  usersPurchases: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      }
  ]
});

const User = mongoose.models.User || model('User', userSchema);

module.exports = User;
