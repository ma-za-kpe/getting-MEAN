var express = require('express');
var router = express.Router();
var ctrlOthers = require('../controllers/others');
var ctrlLocations = require('../controllers/locations');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about)

module.exports = router;
