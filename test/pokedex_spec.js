import React from 'react';
import {shallow} from 'enzyme';
import Pokedex from '../src/Components/Pokedex.jsx';
import {expect} from 'chai';

describe('<Pokedex /> Component Test', () => {
	it('has a pokedisplay', () => {
		const wrapper = shallow(<Pokedex/>);
		expect(wrapper.find('.poke-display').exists()).to.equal(true);
	});
});
