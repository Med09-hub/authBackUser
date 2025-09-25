const Joi =require('joi');
exports.signupSchema=Joi.object({
    email:Joi.string()
.min(6)
.max(60)
.required()
.email({
    tlds:{allow:['com','net','fr']},
}),
   password: Joi.string()
   .required()
     .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
}) ;


exports.signinSchema=Joi.object({
    email:Joi.string()
.min(6)
.max(60)
.required()
.email({
    tlds:{allow:['com','net','fr']}
}),
   password:Joi.string()
   .required()
 .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
}) ;
