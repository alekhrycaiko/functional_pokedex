/**
 * Handles redis set/get.
 */
const {promisify} = require('util');
module.exports = {
	async setRedisCache (client, key, val) {
		if (client) {
			return  await client.set(key, JSON.stringify(val));
		}
		return new Error("Lack Redis Client")
	},
	async getRedisCache (client, key) {
		if (client) {
			const getAsync = promisify(client.get).bind(client);
			return await getAsync(key);
		}
		return new Error("Lack Redis Client");
	}
}
