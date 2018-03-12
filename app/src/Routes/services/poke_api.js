/**
 Handles contacting PokeAPI
 */
const axios = require('axios');
const redisService = require('./redis_client.js');
module.exports = {
	async getPokemonData(client, id) {
		const redisVal = await redisService.getRedisCache(client, id);
		if (!redisVal) {
			const {data:data} = await axios.get(`http://pokeapi.co/api/v2/pokemon/${id}/`);
			const redisResult = await redisService.setRedisCache(client, id, data);
			return data;
		}
		return redisVal;
	}
}
