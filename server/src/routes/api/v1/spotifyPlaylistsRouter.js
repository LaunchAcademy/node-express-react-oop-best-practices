import express from "express";
import got from "got/dist/source";
import { Playlist } from "../../../models/index.js";

const spotifyPlaylistsRouter = new express.Router();

// we hit this endpoint when we submit the form with the song we are looking for 
spotifyPlaylistsRouter.get("/", async (req, res) => {
  // look into the body of the incoming fetch request and retrieve the name of the track
  const { body } = req.body 
  const { query } = body
  
  // make a request to the spotify api, and pass that search query in as an argument to a method that makes our request
  // we should get a response of one spotify chunk of data 
  
  const spotifySearchPlaylistResponse = await got.get("https://api.spotify.com/v1/search?q=&type=track&market=us&API_KEY="sfdsdfsdfsdfsdfd")

  let trackResultsForFrontend = []

  const cleanedPlaylistData = spotifySearchPlaylistResponse.track.items.map((track) => {
    let name = track.name 
    let firstPlayListImage = track.images[0]

    return({
      name, firstPlayListImage
    })
  })

  // sift through that chunk of data and get the info we want: (name of track, creator of track, image, number of songs, array of songs in track)
  // and/or cleanup the data so that it is nice and pretty for when we send it back to the frontend



  // pass that data to the frontend
  return res.status(201).json({ spotifyPlaylists: cleanedPlaylistData });
});

export default spotifyPlaylistsRouter;





  // {
  //   result: {[

  //   ]
  //     trackId: 245654
  //     trackMetaBlaj: afdadfadf
  //     ...
  //     trackName: "Max's Maxiumum Moxi Music"
  //     ...
  //     tracks: 
  //     [{
  //       []
  //     }]
  //   }
  // }