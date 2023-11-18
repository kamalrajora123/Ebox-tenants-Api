const router = require("express").Router();

const { Accounts } = require("../db");

const {
  doGetAccount,
} = require("./account.service");
// const {
//   validateUserRegisterData,
//   // validateSendMailData,
//    validateUserLoginData,
// }

const makeExpressCallback = require("../utils/express-callback");

const { BadRequestError } = require("../utils/api-errors");
// controller
const controller = require("./account.controller");


const getAccount = controller.getAccount({
  BadRequestError,
  doGetAccount,
  Accounts,
});



const AccountController = {
  getAccount,
};

// routes
const routes = require("./account.routes")({
  AccountController,
  router,
  makeExpressCallback,
});

module.exports = {
  AccountController,
  AccountService: {
    doGetAccount,
  },
  AccountRoutes: routes,
};
