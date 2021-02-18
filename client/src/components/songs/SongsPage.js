import React, { useState, useEffect } from "react";
import { Redirect, Route, useParams } from "react-router-dom";

import SongTile from "./SongTile"
import SearchForm from "./SearchForm"

import SweetTunesClient from "../../services/apiClient/SweetTunesClient"

const SongsPage = (props) => {

  const [songs, setSongs] = useState([])

  const searchSongs = async (query) => {
    const response = await SweetTunesClient.searchTracks(query)
    const body = await response.json()
    setSong(body)
  }
  
  const songTiles = songs.map((song) =>{
    <SongTile
      key={song.id}
      song={song}
    />
  }) 


  return (
    <div>
      <h1>Songs Page</h1> 

      <SearchForm searchSongs={searchSongs} />
      {songTiles}
    </div>
  );
};

export default SongShowPage;
