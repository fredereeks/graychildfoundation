import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log({token, cookie: req.cookies, secret: process.env.JWT})
    if(!token){
        console.log({noToken: "Came Here"})
        return next(createError(401, "You are not authenticated"))
    }
    console.log({noToken: "Yet, dummy came here"})
    jwt.verify(token, process.env.JWT, (err, data) => {
        console.log({data})
        if(err){
            return next(createError(403, "Token is not valid"))
        }
        else{
            req.user = data;
            next();
        }
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }
        else{
            return next(createError(403, "You are not authorized"))
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        console.log({admin: req.user, user: req.user})
        if(req.user.isAdmin){
            next()
        }
        else{
            return next(createError(403, "You are not authorized"))
        }
    })
}