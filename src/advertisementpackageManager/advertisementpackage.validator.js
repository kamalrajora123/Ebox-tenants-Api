const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

const options = {
  errors: {
    wrap: {
      label: '',
    },
  },
};

const validateAdvertisementPackageCreateData = (data) => {
  const schema = Joi.object({
    page: Joi.string().required(),
    banner_position_id: Joi.string().required(),
    duration: Joi.string().required(),
    discount_price: Joi.string().required(),
    amount: Joi.string().required(),
    banner_size: Joi.string().required(),
  });
  return schema.validate(data, options);
};
const validateAdvertisementPackageUpdateData = (data) => {
  const schema = Joi.object({
    page: Joi.string().required(),
    banner_position_id: Joi.string().required(),
    duration: Joi.string().required(),
    discount_price: Joi.number().required(),
    amount: Joi.number().required(),
    banner_size: Joi.string().required(),
  });
  return schema.validate(data, options);
};
const validateUpdateAdvertisementPackageStatus = (data) => {
  console.log(data);
  const schema = Joi.object({
    status: Joi.string().required(),
  });
  return schema.validate(data, options);
};
module.exports = { validateAdvertisementPackageCreateData, validateAdvertisementPackageUpdateData, validateUpdateAdvertisementPackageStatus };
