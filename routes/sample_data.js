var express = require('express');
var router = express.Router();
var database = require('../database');
var bodyParser = require('body-parser');
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extendido: true }));


router.get('/', function(req, res, nex){
    res.render(
        'sample_render', {
            title: 'node ajax CRUD'
        }
    )
});

router.post("/action", function(req, res, nex){
    var action = req.body.action;

    if(action == 'fetch') {
        var query = 'SELECT * pessoas ORDER BY id DESC;';
    }

    database.query(query, function(error, data){
        res.json({
            data: data
        });
    });
})

module.exports = router;