const Joi = require("joi");

module.exports.validateBody = (req, res, next) => {
  let { email, password } = req.body;
  const schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
      
    }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  let value = schema.validate({ email, password });
  if (!value.error) {
    next();
  } else {
    res
      .status(500)
      .json({ status: "fall", message: value.error.details[0].message });
  }
};
module.exports.authenticated =(req,res,next)=>{
  console.log(req.cookies);
}