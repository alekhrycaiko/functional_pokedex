/**
 * Handles redis set/get.
 */
const {promisify} = require('util');
module.exports = {
	async setRedisCache (client, key, val) {
		return  await client.set(key, JSON.stringify(val));
	},
	async getRedisCache (client, key) {
		const getAsync = promisify(client.get).bind(client);
		return await getAsync(key);
	}
}
