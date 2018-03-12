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
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
				name: 'bulbasaur'
			});
	});
	it('fails to get a pokemon back from the cache', function () { 
		return getPokemonData(client, 1)
		.catch(err => {
			expect(err.length > 0).to.be.true;
		});
	});
	it('gets a pokemon back', function () {
		return getPokemonData(client, 1)
			.then( res => {
				 res = JSON.parse(res);
					expect(res.name).to.equal('bulbasaur');
					expect(res.sprite).to.equal('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
			}).catch( err => {

				throw new Error();
			});
	});

});
