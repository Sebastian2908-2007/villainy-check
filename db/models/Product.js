import mongoose from "mongoose";
const { Schema, model } = mongoose;



const productSchema = new Schema({
  productTitle: {
    type: String,
    required: true,
    trim: true,
  },
  marketingCopy: {
    type: String,
    required: true,
    trim: true,
  },
  quiz: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true,
  },
  price: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
});

const Product = mongoose.models.Product || model('Product', productSchema);

module.exports = Product;