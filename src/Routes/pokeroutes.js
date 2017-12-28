const express = require('express');
const router = express.Router();
const axios = require('axios');
const bluebird = require('bluebird');
const redis = require('redis');
// setup promises.
bluebird.promisifyAll(redis.RedisClient.prototype);
const client = redis.createClient();

router.get("/:pokeid", function (req, res) {
    value = req.params.pokeid;
    console.log("Value..? " + value); 
    if (value > 0 && value < 152) {
        return client.getAsync(value)
            .then(cachedRes => { 
                if (cachedRes) {
                    debugger
                    res.send(cachedRes);
                }
                // Otherwise continue
                return "";
            }).then(function() { 
                const link = "http://pokeapi.co/api/v2/pokemon/" + value + "/";
                return axios.get(link)
            }).then( result => { 
                const data = result.data;
                client.set(value, JSON.stringify(data));
                return result;
            }).then( result => {
                res.send(JSON.stringify(result.data)); 
            }).catch(err => {
                res.status(400).send("Error contacting PokeAPI");
            });
    }  
    res.status(400).send("Invalid query ID. Needs to be a 1st generation pokemon");
});
module.exports = router;
