import express from "express";

const spotifyTracksRouter = new express.Router();

spotifyTracksRouter.get("/", async (req, res) => {
  const query = req.params.query

  try {
    const spotifyResults = await SpotifyClient.searchTracks(query)
    return res.status(201).json({ spotifyResults: spotifyResults });
  } catch (error){
    return res.status(422).json({ errors: error });
  }
});

export default spotifyTracksRouter;