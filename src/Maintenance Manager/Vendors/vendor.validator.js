const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

const options = {
  errors: {
    wrap: {
      label: '',
    },
  },
};

const validateAddCategory = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(data, options);
};
const validateUpdateCategory = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(data, options);
};
const validateFaqStatus = (data) => {
  const schema = Joi.object({
    status: Joi.string().required(),
  });
  return schema.validate(data, options);
};


module.exports = {
  validateAddCategory,
  validateUpdateCategory,
  validateFaqStatus
};
