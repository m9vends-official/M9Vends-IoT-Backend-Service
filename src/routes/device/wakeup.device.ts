import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import type { device } from '../../types/device.type.js';
import { AppError } from '../../config/error.config.js';
import { createDevice } from '../../services/device.services.js';
const router = express.Router()
router.use(express.json())

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const device = req.body as Omit<device, "owner"> | undefined | null
        if (!device) {
            throw new AppError("Bad Request", 400);
        }
        const info = await createDevice(device)
        res.status(200).json(info)
    } catch (error) {
        next(error)
    }
})

export default router