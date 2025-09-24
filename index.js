const mongoose=require('mongoose');
const express=require('express');
const helmet=require('helmet');
const cors=require('cors');
const coockiParser = require ("cookie-parser");
const app =express();
const authRouter = require('./routers/authRouter');
app.use (cors());
app.use(helmet());
app.use(coockiParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database connected")
})
.catch (error => {
console.log(error);
});
app.use('/api/auth',authRouter);
app.get('/',(req,res)=> {
    res.json({message:"Hello from the server" })
})
app.listen(process.env.PORT ,()=>{
console.log('listening...');
});