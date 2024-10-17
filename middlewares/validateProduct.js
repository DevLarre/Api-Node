const Joi = require('joi');

const productSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(10).required(),
  quantity: Joi.number().integer().min(1).required(),
});

const validateProduct = (req, res, next) => {
  const { error } = productSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      error: error.details[0].message
    });
  }
  next();
};

module.exports = validateProduct;
