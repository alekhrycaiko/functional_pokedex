import React from 'react';
import {shallow} from 'enzyme';
import PokedexStore from '../src/Store/PokedexStore.jsx';
import {PokeText} from '../src/Components/PokeText.jsx';
import {PokeDisplay} from '../src/Components/PokeDisplay.jsx';
import {expect} from 'chai';

describe('<Pokedex /> Component Test', () => {
	beforeEach(function () {
		this.store = new PokedexStore();
		this.store.name = "bulbasaur";
		this.store.sprite = "spriteLink";
		this.store.id = 1;
	});
	it('has read a text value from the store', function () {
		const wrapper = shallow(<PokeText store = {this.store} />);
		expect(wrapper.contains("bulbasaur")).to.be.true;
	});
	it('has read a sprite from the store', function () { 
		const wrapper = shallow(<PokeDisplay store = {this.store} />);
		expect(wrapper.equals(<div><img className="pokemon-image" src="spriteLink"/></div>)).to.be.true;	
	});
});

