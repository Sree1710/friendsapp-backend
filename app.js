const express=require("express");
const FriendData=require('./src/model/FriendData');
const app=express();
app.use(express.json());

// friendList=[
//     {
//         "name":"RAJU",
//         "friendName":"RAM",
//         "friendNickName":"RAMU",
//         "DescribeYourFriend":"Beautiful"
//     },
//     {
//         "name":"THEERTHA",
//         "friendName":"ANJANA",
//         "friendNickName":"ANNA",
//         "DescribeYourFriend":"pretty"
//     },
//     {
//         "name":"ADITYA",
//         "friendName":"SRUTHY",
//         "friendNickName":"SREEKUTTY",
//         "DescribeYourFriend":"lovable"
//     },
//     {
//         "name":"ABHIJITH",
//         "friendName":"NIKHIL",
//         "friendNickName":"NIKKY",
//         "DescribeYourFriend":"wise"
//     }
// ];
// app.post('/add',function(req,res){
// console.log(req.body);
// friendList.push(req.body);
// res.status(200).send(friendList);
// });
// // app.get('/view',function(req,res){
// res.send(friendList);
// });
app.listen(3000);
app.get('/view',function(req,res){
    FriendData.find().then(function(friends){
        console.log(friends);
        res.send(friends);
    });
});
