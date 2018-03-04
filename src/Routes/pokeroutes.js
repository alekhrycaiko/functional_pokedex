const express = require('express');
const router = express.Router();
const axios = require('axios');
const pokeapi = require('./services/poke_api.js');
const redis = require('redis');
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

router.get("/:pokeid", async (req, res) => {
	try { 
		const value = req.params.pokeid;
		if (value > 0 && value < 152) {
			const out = await pokeapi.getPokemonData(client, value);
			debugger
			res.send(out);
		} else { 
			res.status(400).send("Invalid query ID. Needs to be a 1st generation pokemon");
		}
	} catch(err) { 
		console.error(err);
		res.status(500).send("Server error");
	}
});
module.exports = router;
