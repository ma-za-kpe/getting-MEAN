var express = require('express');
var router = express.Router();

/* GET 'home' page */
router.homelist = function(req, res){
    res.render('index', 
    { 
    title: 'Loc8r - find a place to work with wifi' ,
    pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
    locations:[{
        name: 'Starcups',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '100m'
        },
        {
        name: 'Starcups',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '100m'
        },
        {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }]
    });
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
