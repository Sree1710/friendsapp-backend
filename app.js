const express=require("express");
const app=express();
app.use(express.json());

friendList=[
    {
        "name":"RAJU",
        "friendName":"RAM",
        "friendNickName":"RAMU",
        "DescribeYourFriend":"Beautiful"
    },
    {
        "name":"THEERTHA",
        "friendName":"ANJANA",
        "friendNickName":"ANNA",
        "DescribeYourFriend":"pretty"
    },
    {
        "name":"ADITYA",
        "friendName":"SRUTHY",
        "friendNickName":"SREEKUTTY",
        "DescribeYourFriend":"lovable"
    },
    {
        "name":"ABHIJITH",
        "friendName":"NIKHIL",
        "friendNickName":"NIKKY",
        "DescribeYourFriend":"wise"
    }
];
app.get('/view',function(req,res){
res.send(friendList);
});
app.listen(3000);