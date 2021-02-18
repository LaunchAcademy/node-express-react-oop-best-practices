import ReviewSerializer from "./ContributorSerializer.js"

class SongSerializer {
  static async getDetails(song) {
   const allowedAttributes = [
      "id",
      "name",
      "album",
      "artist"
    ]

    let serializedSong = {}
    for (const attribute of allowedAttributes) {
      serializedSong[attribute] = song[attribute]
    }
    
    const reviews = await song.$relatedQuery("reviews")
      
    serializedSong.reviews = reviews.map((song) => {
      // return ReviewSerializer.getDetails(song)
    })
    return serializedSong
  }
}

export default SongSerializer