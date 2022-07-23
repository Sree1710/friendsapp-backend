const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://Sree1710:kunju@cluster0.ougkge9.mongodb.net/FriendDB?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
const FriendSchema=new Schema({
    name:String,
    friendName:String,
    friendNickName:String,
    DescribeYourFriend:String
});
var FriendData=mongoose.model("friendset",FriendSchema);
module.exports=FriendData;

