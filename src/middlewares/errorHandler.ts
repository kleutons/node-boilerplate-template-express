// /middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.name !== 'PrismaClientValidationError') {
        res.status(400).send({ message: err.message });
    } else {
        console.log({ message: err.message });    
        res.status(500).json({ message: '500 - Something went wrong. Please try again later.' });
    }
};
