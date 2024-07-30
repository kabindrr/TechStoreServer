import CategorySchema from "./CategorySchema.js";

export const insertCategory = (categoryObj) => {
  return CategorySchema(categoryObj).save();
};

export const getAllCategories = () => {
  return CategorySchema.find();
};

// edit find by _id and edit
export const editCategory = (_id, updateObj) => {
  return CategorySchema.findByIdAndUpdate(_id, updateObj);
};
// export const getCategory = (filter) => {
//   return CategorySchema.findOne(filter);
// };

// export const deleteCategory = (filter) => {
//   return CategorySchema.findOneAndDelete(filter);
// };

// export const deleteManyCategory = (filter) => {
//   return CategorySchema.deleteMany(filter);
// };
