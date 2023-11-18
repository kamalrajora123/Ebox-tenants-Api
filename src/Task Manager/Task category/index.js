const router = require("express").Router();

const { TaskCategory } = require("../../db");

const {
  doGetTaskcategory,
} = require("./taskcategory.service");
// const {
//   validateUserRegisterData,
//   // validateSendMailData,
//    validateUserLoginData,
// }

const makeExpressCallback = require("../../utils/express-callback");

const { BadRequestError } = require("../../utils/api-errors");
// controller
const controller = require("./taskcategory.controller");


const getTaskcategory = controller.getTaskcategory({
  BadRequestError,
  doGetTaskcategory,
  TaskCategory,
});



const TaskCategoryController = {
  getTaskcategory,
};

// routes
const routes = require("./taskcategory.routes")({
  TaskCategoryController,
  router,
  makeExpressCallback,
});

module.exports = {
  TaskCategoryController,
  CountryService: {
    doGetTaskcategory,
  },
  TaskcategoryRoutes: routes,
};
