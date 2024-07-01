import CategorySchema from "./categorySchema.js";

export const insertCategory = (CategoryObj) => {
  return CategorySchema(CategoryObj).save();
};

export const getAllCategory = (filter) => {
  return CategorySchema.findOne(filter);
};

export const deleteCategory = (filter) => {
  return CategorySchema.findOneAndDelete(filter);
};

export const editCategory = (filter) => {};

// export const deleteManyCategory = (filter) => {
//   return CategorySchema.deleteMany(filter);
// };
