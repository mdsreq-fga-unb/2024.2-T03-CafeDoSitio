import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import userService from '../services/user.service.js';
dotenv.config();

export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    
    if (!authorization) 
      return res.status(401).send({message: 'User Unauthorized'});
  
    const parts = authorization.split(" ");
  
    if (parts.length !== 2) 
      return res.status(401).send({message: 'User Unauthorized'});
  
    const [schema, token] = parts;
    if (schema !== "Bearer") 
      return res.status(401).send({message: 'User Unauthorized'});
          
    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if(error) {
        return res.status(401).send({message: 'Token Invalid'});
      }
      
      const user = await userService.findByIdService({ _id: decoded.sub});

      if (!user || !user.id)
        return res.status(401).send({message: "Invalid User!"});

      req.userID = decoded._id;

      return next();
    });
  } catch(err) {
    return res.status(500).send({ message: err.message });
  }
}