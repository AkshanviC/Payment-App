import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

// const bycryptSalt = process.env.BYCRYPT_SALT;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
  },
  kilogram: {
    type: Number,
  },
  price: {
    type: Number,
  },
  manufacturingDate: {
    type: Date,
  },
  expiryDate: {
    type: Date,
  },
  description: {
    type: String,
  },
});

export default mongoose.model("user", productSchema);
