const nock = require('nock');
const getPokemonData = require('../src/Routes/services/poke_api.js').getPokemonData
const expect = require('chai').expect;
const redis = require('redis');
const client = redis.createClient(process.env.REDIS);
describe('pokeapi gets a pokemon', function () {
	beforeEach( () => {
		nock('https://pokeapi.co/api/v2')
			.get('/pokemon/1/')
			.reply(200, {
				sprite: 'none',
				name: 'bulbasaur'
			});
	});
	it('fails to get a pokemon back', function () {
		return getPokemonData()
			.catch(err => {
				expect(err.length > 0).to.be.true
			});
	});
	it('gets a pokemon back', function () {
		return getPokemonData(client, 1)
			.then( res => {
				try { res = JSON.parse(res);
					expect(res.name).to.equal('bulbasaur');
					expect(res.sprite).to.equal('none');
				} catch(err) {
					throw new Error();
				}
			}).catch( err => {
				throw new Error();
			});
	});

});
