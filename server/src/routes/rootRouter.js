import express from "express";
import songsRouter from "./api/v1/songsRouter.js";
import spotifyTracksRouter from "./api/v1/spotifyTracksRouter.js";
import clientRouter from "./clientRouter.js";
const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/songs", songsRouter);
rootRouter.use("/api/v1/spotifyTracks", spotifyTracksRouter);

export default rootRouter;
