import type { NextFunction, Request, Response } from "express";

export const register = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.status(200).json({
            status: "success",
            message: "User registered successfully",
        });
    } catch (error) {
        next(error);
    }
};

export const login = async (req: Request, res: Response) => {
    res.send("Login");
};
