var express = require('express');
var router = express.Router();
var config = require('config');

// Read configuration for news source options
var sourceConfig = config.get("SourceConfig");

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
        
    client.get("https://newsapi.org/v1/sources", args, function (data, response) {
                
        // parsed response body as js object 
        if (req.accepts('text/html')) {
            res.send(data);
            //next();
            return;
        } else if (req.accepts('application/json')) {
            res.send(data);
            //next();
            return;
        }

        res.send("Must specify content type in request: application/json");
    });
    
}).get("/config", function(req, res, next){
  res.send(sourceConfig);
  //next();
});

module.exports = router;
