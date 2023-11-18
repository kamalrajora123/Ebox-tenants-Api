const { validateUpdateStatus } = require("./country.validator");

// View Country
const getCountry =
  ({ BadRequestError, doGetCountry, Country }) =>
    async (httpRequest) => {
      const data = await doGetCountry({
        Country,
        BadRequestError,
      });
      return {
        statusCode: 200,
        body: {
          success: true,
          message: "View Country  successfully!",
          data,
        },
      };
    };






module.exports = {
  getCountry,
};
