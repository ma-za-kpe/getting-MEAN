var express = require('express');
var router = express.Router();

/* GET 'home' page */
router.homelist = function(req, res){
    res.render('index', { title: 'Home' });
};

/* GET 'Location info' page */
router.locationInfo = function(req, res){
    res.render('location-info', { title: 'Location info' });
};

/* GET 'Add review' page */
router.addReview = function(req, res){
    res.render('index', { title: 'Add review' });
};

router.addReview = function(req, res){
    res.render('location-review-form', { title: 'Add review' });
    };

module.exports = router;
