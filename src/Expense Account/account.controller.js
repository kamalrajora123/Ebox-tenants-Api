const { validateUpdateStatus } = require("./account.validator");

// View Accounts
const getAccount =
  ({ BadRequestError, doGetAccount, Accounts }) =>
    async (httpRequest) => {
      const data = await doGetAccount({
        Accounts,
        BadRequestError,
      });
      return {
        statusCode: 200,
        body: {
          success: true,
          message: "View Accounts  successfully!",
          data,
        },
      };
    };






module.exports = {
  getAccount,
};
