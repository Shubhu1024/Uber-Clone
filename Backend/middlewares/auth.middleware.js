const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.authUser = async (req, res, next) =>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
    // const token = req.headers.authorization.split(' ')[ 1 ];
    if(!token){
        return res.status(401).json({
            message:'Unauthorized (No token)'
        })
    }

    // console.log(token);
    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODc0ZWQwYTJkNmVmMzI3MTVmYjE4MDQiLCJpYXQiOjE3NTI3NTMxMzh9.ahfWiJL_3qchAZq4jGVQFHWrT5MyP_Ivz0vEjU8vOl4"
    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODc0ZWQwYTJkNmVmMzI3MTVmYjE4MDQiLCJpYXQiOjE3NTI3NTg5MDJ9.hEswdmNJiHzyjj4EzSnqriEL_QLtNXtDYfKQgQJrQBI"


    const isBlacklisted = await userModel.findOne({token : token});

    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized'})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;
        return next();

    } catch(err){
        return res.status(401).json({
            message: 'Unauthorized caught'
        })
    }

}