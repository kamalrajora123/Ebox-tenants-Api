const { Country, sequelize } = require("../db");

const { generateJWT, verifyJWT } = require("../utils/jwt");

const { NotFoundError, BadRequestError } = require("../utils/api-errors");


// View Country
const doGetCountry = async ({ BadRequestError, Country }) => {
  const cntry = await Country.findAll({
    order: [["name", "ASC"]],
  });
  if (cntry[0] == 0) throw new BadRequestError("Please try again later");
  return cntry;
};







module.exports = {
  doGetCountry,
};
