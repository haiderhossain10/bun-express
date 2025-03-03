import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes";
import errorHandler from "./middlewares/errorHandler";
import notFoundHandler from "./middlewares/notFoundHandler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);
app.use(morgan("dev"));

// api routes
app.use("/api/v1", router);

// error handler
app.use(errorHandler);

// not found handler
app.use("*", notFoundHandler);

export default app;
