const router = require('express').Router();
const {
  JWT_ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRES_IN,
  SIGN_OPTION,
  EMAIL,
  INVITATION_TOKEN_EXPIRES_IN,
} = require('config');

const {
  Customer,
  Role,
  property,
  PropertyTypes,
  Location,
  User,
  Facing,
  SaveOrder,
  Subscription,


} = require('../db');
const {
  imageUpload
} = require('../middlewares/fileUpload');

// const emailTransporter = require('../utils/email');

const {
  doCustomer,
  doGetCustomer,
  doDeleteCustomer,
  doUpdateCustomer,
  doStatusCustomer,
  doSearchCustomer,
  doGetCustomerbyid,
  doGetCustomerRequirmentbyid,
  doGetCustomerdetailbyid,
  doCheckPropertyByagent


} = require('./customer.service');

const {
  validateCustomerStatus,
  // validateUpadateCustomerData

} = require('./customer.validator');

// const {
//   validateUserRegisterData,
//   // validateSendMailData,
//    validateUserLoginData,
// } 
const makeExpressCallback = require('../utils/express-callback');

const { BadRequestError } = require('../utils/api-errors');
// controller
const controller = require('./customer.controller');
const customerAdd = controller.customerAdd({
  BadRequestError,
  doCustomer,

});

const getCustomer = controller.getCustomer({
  BadRequestError,
  doGetCustomer,
  Customer,
  Role,
  property,
  SaveOrder,
  Subscription,
  User


});

const deleteCustomer = controller.deleteCustomer({
  BadRequestError,
  doDeleteCustomer,
  doCheckPropertyByagent,
  property,
  Customer
});



// const updateCustomer = controller.updateCustomer({
//   BadRequestError,
//   doUpdateCustomer,
//   doCheckUserExist,
//   Customer,
//   imageUpload
// });





const updateCustomer = controller.updateCustomer({
  BadRequestError,
  doUpdateCustomer,
  Customer,
  imageUpload
  // validateUpadateCustomerData,
})


const StatusCustomer = controller.StatusCustomer({
  BadRequestError,
  Customer,
  doStatusCustomer,
  validateCustomerStatus,
});

// Searching customer
const searchCustomer = controller.searchCustomer({
  BadRequestError,
  Customer,
  Role,
  property,
  SaveOrder,
  Subscription,
  doSearchCustomer,
});

// customerdetail by id
const getCustomerdetailbyid = controller.getCustomerdetailbyid({
  BadRequestError,
  Customer,
  Role,
  property,
  doGetCustomerdetailbyid,
});





// Addedcustomer Property detail by id 
const getCustomerbyid = controller.getCustomerbyid({
  BadRequestError,
  Customer,
  Role,
  property,
  PropertyTypes,
  Facing,
  doGetCustomerbyid,
});


// Requirement customer added Property view by id

const getCustomerRequirmentbyid = controller.getCustomerRequirmentbyid({
  BadRequestError,
  Customer,
  // Role,

  PropertyTypes,
  Location,
  User,

  doGetCustomerRequirmentbyid,
});



const CustomerController = {
  customerAdd,
  getCustomer,
  deleteCustomer,
  updateCustomer,
  StatusCustomer,
  searchCustomer,
  getCustomerbyid,
  getCustomerRequirmentbyid,
  getCustomerdetailbyid,
};

// routes
const routes = require('./customer.routes')({
  CustomerController,
  router,
  makeExpressCallback,
});

module.exports = {
  CustomerController,
  CustomerService: {
    doCustomer,
    doGetCustomer,
    deleteCustomer,
    updateCustomer,
    doStatusCustomer,
    doSearchCustomer,
    doGetCustomerbyid,
    doGetCustomerRequirmentbyid,
    doGetCustomerdetailbyid,

  },
  CustomerRoutes: routes,
};