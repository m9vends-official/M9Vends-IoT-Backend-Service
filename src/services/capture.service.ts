import fs from 'fs';
import 'dotenv/config'
import type { Request, Response, NextFunction } from 'express';

export const captureService = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let html = fs.readFileSync("./public/capture.html", "utf8");

        html = html.replace(
            "{{IMAGE_ML_API_URL}}",
            process.env.IMAGE_ML_API_URL as string
        );

        res.send(html);
    } catch (error) {
        next(error)
    }
}