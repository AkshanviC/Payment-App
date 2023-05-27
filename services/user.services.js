import mongoose from "mongoose";
import userModel from "../models/user.model.js";

//getuser
export const getUser = async ({ user }) => {
  let userid = mongoose.Types.ObjectId(user);
  let error = "";
  const users = await userModel
    .findOne({ _id: userid })
    .catch((err) => (error = err));
  if (users) {
    return {
      success: true,
      status: 200,
      data: users,
    };
  } else {
    if (error) {
      return {
        success: false,
        status: 400,
        error: error,
      };
    } else {
      return {
        success: false,
        status: 404,
        message: "Not found",
      };
    }
  }
};

//updateuser
export const updateUser = async (payload) => {
  let userid = mongoose.Types.ObjectId(payload.user);
  let error = "";
  const user = await userModel
    .findByIdAndUpdate(
      { _id: userid },
      {
        email: payload.email,
        name: payload.name,
        password: passwordGenerator,
        ownerName: payload.ownerName,
        shopAddress: payload.shopAddress,
        country: payload.country,
      }
    )
    .catch((err) => (error = err));
  if (user) {
    return {
      success: true,
      status: 200,
      data: user,
    };
  } else {
    if (error) {
      return {
        success: false,
        status: 400,
        error: error,
      };
    } else {
      return {
        success: false,
        status: 404,
        message: "Not found",
      };
    }
  }
};

//deleteuser
export const deleteuser = (id) => {};