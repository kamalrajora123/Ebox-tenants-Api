const router = require("express").Router();
// const {
//   JWT_ACCESS_TOKEN_SECRET,
//   ACCESS_TOKEN_EXPIRES_IN,
//   SIGN_OPTION,
//   EMAIL,
//   INVITATION_TOKEN_EXPIRES_IN,
// } = require("config");

const { Faq, FaqCatgory, Vendorcategory, Vendor, Accounts, State } = require("../../db");

const { validateAddCategory, validateUpdateCategory, validateVendorStatus } = require("./vendor.validator");

const {
  doCategory,
  doGetCategory,
  doDeleteCategory,
  doUpdateCategory,
  doVendor,
  doGetVendor,
  doSearchVendor,
  doUpdatevendor,
  doDeleteVendor,
  doStatus,
  doCheckVendorforcategory

} = require("./vendor.service");

const makeExpressCallback = require("../../utils/express-callback");

const { BadRequestError } = require("../../utils/api-errors");
// controller
const controller = require("./vendor.controller");


// Add vendor category
const categoryAdd = controller.categoryAdd({
  BadRequestError,
  doCategory,
  validateAddCategory,
});

// View Vendor category
const getCategory = controller.getCategory({
  BadRequestError,
  doGetCategory,
  Vendor
});


// Delete Vendor category
const Categorydelete = controller.Categorydelete({
  BadRequestError,
  doDeleteCategory,
  doCheckVendorforcategory,
});

// Edit Vendor category
const updateCategory = controller.updateCategory({
  BadRequestError,
  doUpdateCategory,
  Vendorcategory,
  validateUpdateCategory
});

// Add vendor 
const VendorAdd = controller.VendorAdd({
  BadRequestError,
  doVendor,
  // validateAddCategory,
});
// View Vendor
const getVendor = controller.getVendor({
  BadRequestError,
  doGetVendor,
  Accounts,
  State,
  Vendorcategory
});
// Searching Vendor
const searchVendor = controller.searchVendor({
  BadRequestError,
  Vendor,
  Vendorcategory,
  doSearchVendor,
});

// Edit Vendor
const updateVendor = controller.updateVendor({
  BadRequestError,
  doUpdatevendor,
  Vendor,
  // validateUpdateVendor
});

// Delete Vendor 
const Vendordelete = controller.Vendordelete({
  BadRequestError,
  doDeleteVendor,
});



// status 
const status = controller.status({
  BadRequestError,
  doStatus,
  validateVendorStatus,
  Vendor,
});

const VendorController = {
  categoryAdd,
  getCategory,
  Categorydelete,
  updateCategory,
  VendorAdd,
  getVendor,
  searchVendor,
  updateVendor,
  Vendordelete,
  status,

};

// routes
const routes = require("./vendor.routes")({
  VendorController,
  router,
  makeExpressCallback,
});

module.exports = {
  VendorController,
  VendorService: {
    doCategory,
    doGetCategory,
    doDeleteCategory,
    doUpdateCategory,
    doVendor,
    doGetVendor,
    doStatus,
    doUpdatevendor,
    doSearchVendor,
    doDeleteVendor,
  },
  VendorRoutes: routes,
};
