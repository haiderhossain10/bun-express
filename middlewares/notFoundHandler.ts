import type { NextFunction, Request, Response } from "express";

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        status: "error",
        statusCode: 404,
        message: `Cannot find ${req.method} ${req.originalUrl}`,
    });
};

export default notFoundHandler;
