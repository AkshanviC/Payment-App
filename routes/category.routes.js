import express from "express";
import {
  createCategoryController,
  getCategoryByCustomerController,
  getCategoryByIdController,
  updateCategoryByIdController,
} from "../controller/category.controllers.js";
import { verifyUser } from "../verification/verification.js";

const router = express.Router();

router.post("/create", verifyUser, createCategoryController);

router.get("/update", verifyUser, updateCategoryByIdController);

router.post("/getbyid", verifyUser, getCategoryByIdController);

router.get("/getbycustomerid", verifyUser, getCategoryByCustomerController);

// router.get("/update")

// router.delete("/categories/delete");

export { router };
