import got from "got"

// Base URL:   GET https://api.spotify.com/v1/search
// Example Request: "https://api.spotify.com/v1/search?q=I%Was%an%Eagle&type=track&market=us" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQBqefrz_QGVXzmJlMfdVomdbHwfcWzJ9FTTbqSBMmUgFc0-VPaQa75m1XR2j5FFUrFPsJQBpCDPj1zxnMcHdKNMKha2NRj38tFQsv_OQw0IHS1KHdyDl8r0AF2FvRn1NZOvnX7V3pRh-s4"

class SpotifyClient {
  static get baseUrl(){
    return "https://api.spotify.com"
  }

  static searchTracks(query){
    const baseUrl = this.constructor.baseUrl

    const queryPath = "/v1/search"
    // const queryParams = `q=${query}&type=song&market=us&limit=2`

    const tracksResponse = await got.get(`${baseUrl}${queryPath}`, {
      searchParams: query, //you might need to control for spaces in this query 
      headers: { // got allows us to specify headers in a series of key value pairs to its options object
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.SPOTIFY_KEY}`
      }
    })

    const parsedTracksResponse = parseResponse(tracksResponse)
    const serializedTracksResponse = serializeTracksResponse(parsedTracksResponse)
  }

  parseResponse(response){
    const reponseBody = response.body 
    return JSON.parse(responseBody)
  }

  serializeTracksResponse(parsedTracksResponse){
    const serializedTracks = parsedTracksResponse.tracks.items.map((track) => {
      const name = track.name 
      const spotifyId = track.id 
      const album = track.album.name
      const spotifyAlbumId = track.album.id
      const albumArt = track.album.images[0].url
      const apiUrl = track.href
      const externalUrl = track.external_urls.spotify
      const duration = track.duration_ms
      const artist = track.artists[0].name
      const artistId = track.artists[0].id

      return({
        name, spotifyId, album, spotifyAlbumId, albumArt, apiUrl, externalUrl, duration, artist, artistId
      })
    })

    return serializedTracks
  }
}