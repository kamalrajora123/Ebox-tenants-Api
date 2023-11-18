const router = require("express").Router();
// const {
//   JWT_ACCESS_TOKEN_SECRET,
//   ACCESS_TOKEN_EXPIRES_IN,
//   SIGN_OPTION,
//   EMAIL,
//   INVITATION_TOKEN_EXPIRES_IN,
// } = require("config");

const { Faq, FaqCatgory, property, Unit, Vendor, WorkOrder, TaskCategory } = require("../../db");

const { validateAddCategory, validateUpdateCategory, validateFaqStatus } = require("./workorder.validator");
const { imageUpload } = require("../../middlewares/fileUpload");


const {
  doWork,
  doGetWork,
  doSearchWork,
  doUpdateWork,
  doDeleteWork,
  doStatus,
} = require("./workorder.service");

const makeExpressCallback = require("../../utils/express-callback");

const { BadRequestError } = require("../../utils/api-errors");
// controller
const controller = require("./workorder.controller");


// Add Work 
const WorkAdd = controller.WorkAdd({
  BadRequestError,
  doWork,
  imageUpload
  // validateAddCategory,
});
// View Work order
const getWork = controller.getWork({
  BadRequestError,
  doGetWork,
  property,
  Unit,
  Vendor,
  TaskCategory
});


// Searching Work Order
const searchWork = controller.searchWork({
  BadRequestError,
  WorkOrder,
  doSearchWork,
  property,
  Unit,
  Vendor,
  TaskCategory
});

// Edit Work Order
const updateWork = controller.updateWork({
  BadRequestError,
  doUpdateWork,
  WorkOrder,
  imageUpload
  // validateUpdateVendor
});

// Delete Work Order
const Workdelete = controller.Workdelete({
  BadRequestError,
  doDeleteWork,
});




const status = controller.status({
  BadRequestError,
  doStatus,
  Faq,
  validateFaqStatus
});

const WorkController = {
  WorkAdd,
  getWork,
  searchWork,
  updateWork,
  Workdelete,
  status,

};

// routes
const routes = require("./workorder.routes")({
  WorkController,
  router,
  makeExpressCallback,
});

module.exports = {
  WorkController,
  WorkService: {
    doWork,
    doGetWork,
    doStatus,
    doUpdateWork,
    doSearchWork,
    doDeleteWork,
  },
  WorkRoutes: routes,
};
