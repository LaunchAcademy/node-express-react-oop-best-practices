const Model = require("./Model")

class Song extends unique(Model) {
  static get tableName() {
    return "songs";
  }

  static get relationMappings(){
     const Review = require("./Review")
      return {
        contributors: {
          relation: Model.HasManyRelation,
          modelClass: Review,
          join: {
            from: "repository.id",
            to: "songs.songId"
          }
        },
      }
   }
}

module.exports = Song