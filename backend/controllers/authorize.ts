import {Request, Response, NextFunction}  from "express";
import passport from "passport"


const authorize = (req:Request,res:Response, next:NextFunction)=>{
    passport.authenticate("Jwt",{session:false},(err,user)=>{
        if (!user||err) {
            res.status(401).json({msg:"Unauthorized"})
            
        } else {
            req.user=user;
            next()
        }
    })(req,res,next);
};

export default  authorize;