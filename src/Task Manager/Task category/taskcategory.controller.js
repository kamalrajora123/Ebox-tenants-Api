const { validateUpdateStatus } = require("./taskcategory.validator");

// View Country
const getTaskcategory = ({ BadRequestError, doGetTaskcategory, TaskCategory }) =>
  async (httpRequest) => {
    const data = await doGetTaskcategory({
      TaskCategory,
      BadRequestError,
    });
    return {
      statusCode: 200,
      body: {
        success: true,
        message: "View Taskcategory  successfully!",
        data,
      },
    };
  };






module.exports = {
  getTaskcategory,
};
