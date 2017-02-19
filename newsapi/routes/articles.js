var express = require('express');
var router = express.Router();
//var https = require('https');

const querystring = require('querystring');
var Client = require('node-rest-client').Client;

var client = new Client();

/* GET users listing. */
router.get('/', function(req, res, next) {

    var args = {
        //data: { test: "hello" }, // data passed to REST method (only useful in POST, PUT or PATCH methods) 
        //path: { "id": 120 }, // path substitution var 
        parameters: req.query, // query parameter substitution vars 
        //headers: { "test-header": "client-api" } // request headers 
    };    
    
    args.parameters.apiKey = process.env.API_KEY_NEWSAPI;
    
    client.get("https://newsapi.org/v1/articles", args, function (data, response) {
        // parsed response body as js object 
        console.log(req.accepts);
        
        if (req.accepts('text/html')) {
            res.send(data);
            return;
        } else if (req.accepts('application/json')) {
            res.send(data);
            return;
        }
        
        res.send("Must specify content type in request: application/json");

    });
    
});

module.exports = router;
