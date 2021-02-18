import express from "express";
import { Song } from "../../../models/index.js";

const songsRouter = new express.Router();

songsRouter.get("/", async (req, res) => {
  try {
    const songs = await Song.query()

    const serializedSongs = songs.map((repository) => SongSerializer.getDetails(repository))
    return res.status(201).json({ songs: serializedSongs });
  } catch (error) {
    console.log(error);
    return res.status(422).json({ errors: error });
  }
});

export default songsRouter;


