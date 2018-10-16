var express = require('express');
var router = express.Router();

/* GET home page */
router.about = function(req, res){
    res.render('generic-text', {
        title: 'About',
        content: 'Suscipit wisi, id pede blandit ac curabitur ipsum auctor, quis velit, sed nulla id tristique vel, sem nisl nec. Vehicula proin sed, sit arcu nec non montes proin vitae, luctus ut nec sed, aenean vitae. Molestie nec vitae. Lacus massa curabitur pede in, proin vestibulum tristique. Justo nec vel elit ut sodales scelerisque, lacinia alias adipiscing urna a quis suspendisse. Fusce laoreet vestibulum wisi, nec mauris aliquam amet sapien voluptatem, ut eu pharetra a enim nec risus, posuere sed eu integer tempus arcu purus. Suspendisse aliquet convallis quam conubia mollis bibendum, ornare ultricies sapien dictum odio, donec iaculis ut, magna varius. Vestibulum etiam mollis varius dolorum vitae, vitae nunc a non vestibulum eleifend, etiam nibh mauris orci lorem, duis a felis a erat suspendisse urna, vitae tellus hendrerit ullamcorper nisl consectetuer montes. A pretium, eu iaculis placerat lectus wisi leo, nulla pellentesque, tellus ullamcorper fusce tincidunt pulvinar morbi, curae amet enim eu libero ultricies suscipit.' 
    });
};

module.exports = router;
