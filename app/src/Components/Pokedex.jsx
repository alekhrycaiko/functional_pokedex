import React, { Component } from 'react';
import {PokeSelector} from "./PokeSelector.jsx";
import {PokeDisplay} from "./PokeDisplay.jsx";
import {PokeText} from "./PokeText.jsx";
import PokedexStore from "../Store/PokedexStore.jsx";
class Pokedex extends React.Component {
	constructor() {
		super();
		this.store = new PokedexStore();
	}
	render() {
		return (
			<div className="pokedex">
				<div className = "left">
					<div className = "top-left-buttons">
						<div className="big-button circle">
							<div className="small-button circle"> </div>
						</div>
						<div className = "circle top-left-red-small"></div>
						<div className = "circle top-left-yellow-small"></div>
						<div className = "circle top-left-green-small"></div>
					</div>
					<div className = "top-left-curve"> </div>
					<div className = "top-left-down-curve"> </div>
					<div className = "screen">
						<div className="button-top-screen-1 circle"></div>
						<div className="button-top-screen-2 circle"></div>
						<div className="sub-screen">
							<PokeDisplay classNameName="poke-display" store = {this.store} />
						</div>
						<div className="screen-red-button circle"></div>
						<div className="screen-stripes">
							<div className="stripe"> </div>
							<div className="stripe"> </div>
							<div className="stripe"> </div>
							<div className="stripe"> </div>
						</div>
					</div>
					<div className="screen-cutoff"></div>
						<div className="circle left-blue-button"></div>
					<div className="left-green-button long-button"></div>
					<div className="left-orange-button long-button">
					</div>
				<div className="left-yellow-button"></div>
				<PokeSelector store = {this.store} />
				</div>
				<div className = "middle">
				<div className = "divider divider-1">
					<div className = "vertical-lines"></div>
			</div>
			<div className = "divider-2 divider">
				<div className = "vertical-lines">
				</div>

			</div>
			</div>
			<div className = "pokdex-rhs">
				<div className="rhs-whitespace"> </div>
			<div className="pokedex-right-top">
				<div className = "right-down-slope"></div>
			<div className = "right-up-slope">
			</div>
			<div className = "pokedex-right-background">
				<div className ="rhs-container">
					<div className="screen-right">
						<PokeText store = {this.store} />
			</div>
			<div className = "right-blue-buttons">
				<div className = "square"></div>
				<div className = "square"></div>
				<div className = "square"></div>
				<div className = "square"></div>
				<div className = "square"></div>
				<div className = "square"></div>
				<div className = "square"></div>
				<div className = "square"></div>
				<div className = "square"></div>
				<div className = "square"></div>
			</div>
			<div className ="rhs-button-row">
				<div className="rhs-small-circles">
					<div className= "circle circle-darkgreen"></div>
			<div className="circle circle-orange"></div>
			</div>
			<div className = "rhs-long-buttons">
				<div className ="rhs-button-1"></div>
			<div className = "rhs-button-2"></div>
			</div>
			</div>
			<div className = "rhs-button-row-2">
				<div className="rhs-direction-button"></div>
			<div className="rhs-direction-button"></div>
			<div className="rhs-back-button  circle"></div>
			</div>
			<div className = "rhs-button-pads">
				<div className ="button-pad"></div>
			<div className="button-pad"></div>
			</div>
			</div>
			</div>
		</div>
	</div>
</div>
		);
	}
}
export default Pokedex;
