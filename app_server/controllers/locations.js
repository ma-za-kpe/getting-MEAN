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
        }],
        about:{
            about:"this website helps you fine MAKU lead Looking for wifi and a seat? Loc8r helps you find places to workwhen out and about. Perhaps with coffee, cake or a pint? Let Loc8r helpyou find the place you're looking for."
        }
    });
};

/* GET 'Location info' page */
router.locationInfo = function(req, res){
    res.render('location-info', { 
        title: 'Starcups',
        pageHeader: {title: 'Starcups'},
        sidebar: {
        title: 'Starcups',
        context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.callToActiove been and you like it - or if you don\'t -please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
                },{
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
                },{
                days: 'Sunday',
                closed: true
                }]
        }
    });
};

/* GET 'Add review' page */
router.addReview = function(req, res){
    res.render('index', { title: 'Add review' });
};

router.addReview = function(req, res){
    res.render('location-review-form', { title: 'Add review' });
    };

module.exports = router;
