var express = require('express');
var router = express.Router();

/* GET home page */
router.about = function(req, res){
    res.render('index', { title: 'About' });
};

module.exports = router;