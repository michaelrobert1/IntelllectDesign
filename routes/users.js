var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');

/* GET users listing. */



var users = [{
  "id": 1,
  "firstName": "John",
  "lastName": "Smith",
  "email": 25,
  "pincode": "600001",
  "DOB": "22-12-2016",
  "isActive": true,
  Todos: [{
    id: 1,
    userid: 1,
    text: "tester",
    done: "compeleted",
    targetDate: "27-10-2016"
  }]
}, {
  "id": 2,
  "firstName": "Robert",
  "lastName": "Michael",
  "email": 25,
  "pincode": "600001",
  "DOB": "22-12-2016",
  "isActive": true,
  Todos: [{
    id: 2,
    userid: 1,
    text: "tester",
    done: "compeleted",
    targetDate: "27-10-2016"
  }, {
    id: 2,
    userid: 1,
    text: "tester",
    done: "compeleted",
    targetDate: "27-10-2016"
  }]

},
{
  "id": 3,
  "firstName": "dyna",
  "lastName": "Smith",
  "email": 25,
  "pincode": "600001",
  "DOB": "22-12-2016",
  "isActive": true,
  Todos: [{
    id: 3,
    userid: 1,
    text: "tester",
    done: "compeleted",
    targetDate: "27-10-2016"
  }]
},
{
  "id": 4,
  "firstName": "Madonna",
  "lastName": "Smith",
  "email": 25,
  "pincode": "600001",
  "DOB": "22-12-2016",
  "isActive": true,
  Todos: [{
    id: 4,
    userid: 1,
    text: "tester",
    done: "compeleted",
    targetDate: "27-10-2016"
  }]

}
]



router.get('/', function (req, res, next) {

  res.send(users);
  //res.redirect('/index.html');

});


router.post('/userid', function (req, res) {
  //var userid=req.body.userid;
  var userid = 4;
  for (var i in users) {

    if (user[i].id === userid) {
      //console.log("user"+JSON.stringify(user[i]));
      res.send(user[i]);
    } else {
      res.send("user not found");
    }

  }
  //res.send(user);
});


router.get('/getActiveUser', function (req, res) {
  var activeUser = [{Todos:[{}]}];
  for (var i in users) {

    if (user[i].isActive) {
      activeUser.push(user[i]);

    }
  }

  if (activeUser.length > 0) {
    res.send(activeUser);

  }
  else {
    res.send("no active user")
  }
});

router.get('/todoToday',function(req,res){
  var targetDate=[];
  var now = new Date();
  var current =dateFormat(now, "DD-MON-YYYY");
  for(var i in users){
    for(var j in users[i].Todos){
      if(users[i].Todos[j].targetDate ==current ){
        targetDate.push({userid:users[i].id,text:users[i].Todos[j].task});
      }
    }
  }
  if(targetDate.length>0){
    res.send(targetDate);
  }
  else{
    res.send("no task for today as a target date")
  }
})

module.exports = router;
