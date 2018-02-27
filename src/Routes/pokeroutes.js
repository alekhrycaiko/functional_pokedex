const express = require('express');
const router = express.Router();
const axios = require('axios');
const bluebird = require('bluebird');
const redis = require('redis');
// setup promises.
bluebird.promisifyAll(redis.RedisClient.prototype);
const client = redis.createClient();

const limiter = require('express-limiter')(router, client)
// poke api rate limits at 300 req. per day, per ip.
limiter({
        path: '*',
        method: 'get',
        lookup: ['connection.remoteAddress'],
        total: 300,
        expire: 86400000
});

router.get("/:pokeid", function (req, res) {
    value = req.params.pokeid;
    if (value > 0 && value < 152) {
        return client.getAsync(value)
            .then(cachedRes => { 
                if (cachedRes) {
                    res.send(cachedRes);
                }
                return "";
            }).then( _ => { 
                return axios.get("http://pokeapi.co/api/v2/pokemon/" + value + "/")
            }).then( result => { 
                const data = result.data;
                let truncData = { 
                    name: data.name,
                    sprite: data.sprites.front_default
                }
                client.set(value, JSON.stringify(truncData));
                return truncData;
            }).then( result => {
                res.send(JSON.stringify(result)); 
            }).catch(err => {
                res.status(400).send("Error contacting PokeAPI");
            });
    }  
    res.status(400).send("Invalid query ID. Needs to be a 1st generation pokemon");
});
module.exports = router;
