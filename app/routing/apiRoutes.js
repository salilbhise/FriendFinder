var express = require('express');
var router = express.Router();


router.post('/friend', function(req, res){
    console.log(req.body, "New Friend Alert!");
    // Loop over all friends -- for loop
    // Loop over all the scores of current freind
    // compare to the new friend
    // keep track of friend with best match 
    // send best match back.
    res.send(req.body);
});



module.exports = router;