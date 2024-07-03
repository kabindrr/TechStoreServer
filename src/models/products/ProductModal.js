import ProductSchema from "./ProductSchema.js";

export const insertProduct = (productObj) => {
  return ProductSchema(productObj).save();
};
export const getAllProducts = () => {
  return ProductSchema().find();
};
