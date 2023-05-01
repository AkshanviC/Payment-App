import categoryModel from "../models/category.model.js";
// import mongoose from "mongoose";
//create category
export const createCategory = async (
  { image, categoryName, categoryDescription, colorCode, user },
  res
) => {
  // let id = new mongoose.Types.ObjectId(user);
  // console.log("lol", categoryName, categoryDescription, colorCode, user);
  const category = new categoryModel({
    // image: image ? image : "",
    categoryName: categoryName,
    categoryDescription: categoryDescription,
    colorCode: colorCode,
    user: res.locals.user,
  });
  let error = "";
  await category.save().catch((err) => {
    error = {
      status: 400,
      success: false,
      message: err,
    };
  });
  if (error) {
    return error;
  } else {
    return { success: true, message: "Category created succesfully" };
  }
};

//getall categories
export const getAllCategories = async () => {
  const categories = categoryModel.find();
  if (categories) {
    return {
      data: categories,
    };
  } else {
    return { success: false, status: 404, message: "No category available" };
  }
};

//get category by id
export const getCategoryById = async ({ id }) => {
  const category = categoryModel.findById({ _id: id });
  if (category) {
    return {
      data: category,
    };
  } else {
    return { success: false, status: 404, message: "Category unavailable" };
  }
};

//update category
export const updateCategory = async ({
  id,
  image,
  categoryName,
  categoryDescription,
  colorCode,
  user,
}) => {
  const category = await categoryModel.findByIdAndUpdate(
    { _id: id },
    {
      image: image,
      categoryName: categoryName,
      categoryDescription: categoryDescription,
      colorCode: colorCode,
      user: user,
    }
  );
  if (category) {
    return {
      success: true,
      status: 200,
      message: "Category updated successfully",
    };
  }
};

//get category by customer
export const getCategoryByCustomer = async (id) => {
  const category = await categoryModel.find({ user: id });
  if (category) {
    return {
      success: true,
      status: 200,
      data: category,
    };
  } else {
    return {
      success: false,
      status: 404,
      message: "not found",
    };
  }
};

//delete category
// export const deleteCategory = async (id) => {
//   const category = await categoryModel.deleteOne({ _id: id });
//   if (category) {
//     return {
//       success: true,
//       status: 200,
//       message: "Category deleted",
//     };
//   } else {
//     return { success: false, status: 404, message: "Category unavailable" };
//   }
// };
