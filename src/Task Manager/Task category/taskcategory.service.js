const { TaskCategory, sequelize } = require("../../db");

const { generateJWT, verifyJWT } = require("../../utils/jwt");

const { NotFoundError, BadRequestError } = require("../../utils/api-errors");


// View TaskCategory
const doGetTaskcategory = async ({ BadRequestError, TaskCategory }) => {
  const taskcategory = await TaskCategory.findAll({
    order: [["name", "ASC"]],
  });
  if (taskcategory[0] == 0) throw new BadRequestError("Please try again later");
  return taskcategory;
};







module.exports = {
  doGetTaskcategory,
};
