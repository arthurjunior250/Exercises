const Joi = require("joi");

// query validation
exports.queryValidation = (data) => {
    const schema = Joi.object({
        names: Joi.string().min(4).required(),
        email: Joi.string().min(10).required().email(),
        message: Joi.string().min(3).required(),
    });

    return schema.validate(data);
};

//User validation
exports.registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(2).required(),
        profilePicture: Joi.string(),
        email: Joi.string().min(6).required().email(),
        role: Joi.string().min(2),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(data);
};

//blog validation
exports.blogValidation = (data) => {
    const schema = Joi.object({
        image: Joi.string(),
        title: Joi.string().min(4).required(),
        description: Joi.string().min(100).required(),
    });

    return schema.validate(data);
};
// newsletter
exports.newsletterValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
    });

    return schema.validate(data);
};


//comment validation
exports.commentValidation = (data) => {
    const schema = Joi.object({
        // names: Joi.string().min(4).required(),
        // email: Joi.string().min(10).required().email(),
        comment: Joi.string().min(2).required(),
    });

    return schema.validate(data);
};
