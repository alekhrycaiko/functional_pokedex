import React from 'react';
import {shallow} from 'enzyme';
import Pokedex from '../src/Components/Pokedex.jsx';
import {expect} from 'chai';
import {PokeSelector} from '../src/Components/PokeSelector.jsx';
import {PokeDisplay} from '../src/Components/PokeDisplay.jsx';
import {PokeText} from '../src/Components/PokeText.jsx';

describe('<Pokedex /> Component Test', () => {
	it('has a pokedisplay', () => {
		const wrapper = shallow(<Pokedex/>);
		expect(wrapper.find(PokeDisplay).exists()).to.equal(true);
	});
	it('has a pokeselector', () => {
		const wrapper = shallow(<Pokedex/>);
		expect(wrapper.find(PokeSelector).exists()).to.equal(true);
	});
	it('has text ', () => {
		const wrapper = shallow(<Pokedex/>);
		expect(wrapper.find(PokeText).exists()).to.equal(true);
	});
});
