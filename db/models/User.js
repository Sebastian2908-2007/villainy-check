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
  quizComplete: {
    type: Boolean,
    default: false,
  },
  isSubject: {
    type: Boolean,
    default: false,
  },
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
