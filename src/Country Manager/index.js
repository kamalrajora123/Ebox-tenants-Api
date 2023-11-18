const router = require("express").Router();

const { Country } = require("../db");

const {
  doGetCountry,
} = require("./country.service");
// const {
//   validateUserRegisterData,
//   // validateSendMailData,
//    validateUserLoginData,
// }

const makeExpressCallback = require("../utils/express-callback");

const { BadRequestError } = require("../utils/api-errors");
// controller
const controller = require("./country.controller");


const getCountry = controller.getCountry({
  BadRequestError,
  doGetCountry,
  Country,
});



const CountryController = {
  getCountry,
};

// routes
const routes = require("./country.routes")({
  CountryController,
  router,
  makeExpressCallback,
});

module.exports = {
  CountryController,
  CountryService: {
    doGetCountry,
  },
  CountryRoutes: routes,
};
