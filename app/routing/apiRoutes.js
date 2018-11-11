var express = require('express');
var router = express.Router();
var friends = require("../data/friend");

router.post('/friend', function(req, res){
    console.log(req.body, "New Friend Alert!");
    res.send(req.body);
});

    // Loop over all friends -- for loop
    // Loop over all the scores of current freind
    // compare to the new friend
    // keep track of friend with best match 
    // send best match back.

router.get('/friend', function(req, res) {
    res.json(friends);
});

router.post("/api/friends", function (req, res) {
    var duplicates = friends.filter(function (f) {
        return f.name == req.body.name;
    });
    if (duplicates.length === 0) {
        var match = compareScoring(req.body.scores);            
        friends.push(req.body);
        res.json(match);
    } else {
        res.json({
            name: "Sorry, the name " + duplicates[0].name + " is already used",
            photo: "https://images.pexels.com/photos/127726/pexels-photo-127726.jpeg",
            scores: [1,1,1,1,1,1,1,1,1,1]
        });
    }
});

var compareScoring = function(scores) {
    var closestScore = 50;
    var closestMatch;
   friends.forEach(function(f) {
       var diff = 0;
        for (let i = 0; i < f.scores.length; i++) {
            diff = Math.abs(scores[i] - f.scores[i]);                
        }
        if(diff < closestScore) {
            closestMatch = f;
        }
   });
   return closestMatch;
};

module.exports = router;