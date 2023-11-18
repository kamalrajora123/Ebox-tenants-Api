const { Accounts, sequelize } = require("../db");

const { generateJWT, verifyJWT } = require("../utils/jwt");

const { NotFoundError, BadRequestError } = require("../utils/api-errors");


// View Account
const doGetAccount = async ({ BadRequestError, Accounts }) => {
  const accountss = await Accounts.findAll({
    order: [["createdAt", "DESC"]],
  });
  if (accountss[0] == 0) throw new BadRequestError("Please try again later");
  return accountss;
};
module.exports = {
  doGetAccount,
};
