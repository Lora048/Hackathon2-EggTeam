const Joi = require("joi");

exports.validateUser = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    firstname: Joi.string().min(2).max(100).presence(presence),
    lastname: Joi.string().max(100).presence(presence),
    jobPost: Joi.string().max(100).presence(presence),
    hardSkills: Joi.array().items(Joi.string()).presence(presence),
    agency: Joi.string().max(100).presence(presence),
    picture: Joi.string().max(1000).presence("optional").allow(null, ""),
    email: Joi.string().email().max(100).presence(presence),
    password: Joi.string().min(8).max(255).presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateComment = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optionnal";
  const validationCommentErrors = Joi.object({
    content: Joi.string().max(1000).presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationCommentErrors) {
    return validationCommentErrors;
  }
  return false;
};
