import searchTracks from "./requests/searchTracks"
import getCurrentUser from "./requests/getCurrentUser"

class SweetTunesClient {
  static async getCurrentUser(){
    return getCurrentUser()
  }

  static async searchTracks(){
    return searchTracks()
  }
}


export default SweetTunesClient