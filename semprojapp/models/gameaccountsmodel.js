var mongoose= require("mongoose");
var GameaccScehema = mongoose.Schema({
    Name:String,
    Company:String,
    Type:String,
Email:String});
var GameModel = mongoose.model("GameModel",GameaccScehema);
module.exports=GameModel;