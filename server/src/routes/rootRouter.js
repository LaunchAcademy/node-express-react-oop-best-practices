import express from "express";
import songsRouter from "./api/v1/songsRouter.js";
import clientRouter from "./clientRouter.js";
const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/songs", songsRouter);

export default rootRouter;
