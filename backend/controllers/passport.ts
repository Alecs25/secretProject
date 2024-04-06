import * as dotenv from 'dotenv'
dotenv.config()
import passport from "passport"
import passportJWT from "passport-jwt"
import { db } from '../initDb';
 
const {SECRET}=process.env;
 
passport.use(
    
    new passportJWT.Strategy(
        {
        secretOrKey: SECRET,
        jwtFromRequest:passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken,
        },
         async(payload,done)=>{
            const User=db.none('SELECT * WHERE user_id=$1',payload.id)
            try {
                return User ? done(null,User):done(new Error("user Not found"))
            } catch (error) {
                
            }
         }
        )
)