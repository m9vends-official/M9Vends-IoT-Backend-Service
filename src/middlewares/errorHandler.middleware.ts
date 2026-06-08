import type { Request, Response, NextFunction } from "express";
import { AppError } from "../config/error.config.js";

export const errorHandler = (
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log('\x1b[31m%s\x1b[0m', `\nERROR\n${req.method}: ${req.originalUrl}`)
    console.error(error);
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
        });
    }
    res.status(500).json({ message: "Something Went Wrong" });
};