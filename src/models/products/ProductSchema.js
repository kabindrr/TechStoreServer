import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },

    name: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      unique: [
        true,
        "this sku has been used for the another product,please use different sku",
      ],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    salesPrice: {
      type: Number,
      default: null,
    },
    salesStart: {
      type: Date,
      default: "",
    },
    salesEnd: {
      type: Date,
      default: "",
    },
    parentCatId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default: "",
    },

    slug: {
      type: String,
      unique: true,
      index: 1,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema); //Products
