import * as dotenv from 'dotenv'
dotenv.config();
import {Request, Response}  from "express";
import  db  from "../initDb";
import  Jwt  from "jsonwebtoken";

const logIn= async(req:Request,res:Response)=>{
const {username,email,password}=req.body

const user = await db.one('SELECT * FROM  users WHERE  username=$1',username)
if (user && user.password ===password) {
    const payload={
        id: user.id, 
        username,
    }
    const{SECRET = ""}=process.env
    const token = Jwt.sign(payload,SECRET);

    await db.none(' UPDATE user SET token=$2 Where id=$1'[user.id,token])
    res.status(200).json({id: user.id , username, token});
    
} else {
    res.status(400).json({msg:"username or password Incorrect"})
}
}
const signUp= async(req:Request,res:Response)=>{
    const{username,password}=req.body
    const user =await db.oneOrNone('SELECT*FROM users WHERE username=$1',username);
    if(user){
        res.status(409).json({msg:"username already in use"})
    }else{
        await db.one('INSERT INTO users (username,password)VALUES ($1,$2)RETURNING user_id',
        [username,password]
    );
    res.status(201).json({msg:"user created succesfully"})
    }
}
const logOut= async(req:Request,res:Response)=>{
    const user=req.user;
    await db.none('UPDATE users SET token=$2 WHERE id=$1 ', [user?.user_id,null])
    res.status(200).json({msg:"Logged Out."})
};
export {logIn,signUp,logOut};