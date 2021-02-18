const Model = require("./Model")

class Review extends unique(Model) {
  static get tableName() {
    return "reviews";
  }

  static get jsonSchema() {
     return {
       type: "object",
       required: [],
       properties: {
         username: { type: "string"},
       }
     }
   }

   static get relationMappings(){
     const Song = require("./Song")
      return {
        repositories: {
          relation: Model.BelongsToOneRelation,
          modelClass: Song,
          join: {
            from: "reviews.songId",
            to: "song.id"
          }
        },
      }
   }
}

module.exports = Review