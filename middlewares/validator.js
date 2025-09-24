const Joi =require('joi');
exports.signupSchema=Joi.object({
    email:Joi.string()
.min(6)
.max(60)
.required()
.email({
    tlds:{allow:['com','net','fr']}
}),
   password:Joi.string()
   .required()
    .pattern(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")),
    
}) ;
