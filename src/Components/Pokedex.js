import React, { Component } from 'react';
import {PokeSelector} from "./PokeSelector";
import {PokeDisplay} from "./PokeDisplay";
import {PokeText} from "./PokeText";
import PokedexStore from "../Store/PokedexStore.js";
class Pokedex extends React.Component {
	constructor() { 
        super();
        this.store = new PokedexStore();
    }
    render() {
		return (
			<div class="pokedex">
			<div class = "left">
			<div class = "top-left-buttons">
			<div class="big-button circle">
			<div class="small-button circle"> </div>
			</div>
			<div class = "circle top-left-red-small"></div>
			<div class = "circle top-left-yellow-small"></div>
			<div class = "circle top-left-green-small"></div>
			</div>
			<div class = "top-left-curve">
			</div>
			<div class = "top-left-down-curve"> </div>
            <div class = "screen">
			<div class="button-top-screen-1 circle"></div>
			<div class="button-top-screen-2 circle"></div>
			<div class="sub-screen">
                <PokeDisplay store = {this.store} />
            </div>
			<div class="screen-red-button circle">
			</div>
			<div class="screen-stripes">
			<div class="stripe"> </div>
			<div class="stripe"> </div>
			<div class="stripe"> </div>
			<div class="stripe"> </div>
			</div>
			</div>
			<div class="screen-cutoff"></div>
			<div class="circle left-blue-button"></div>
			<div class="left-green-button long-button"></div>
			<div class="left-orange-button long-button">
			</div>
			<div class="left-yellow-button"></div>
            <PokeSelector store = {this.store} />
			</div>
			<div class = "middle">
			<div class = "divider divider-1">
			<div class = "vertical-lines"></div>
			</div>
			<div class = "divider-2 divider">
			<div class = "vertical-lines">
			</div>

			</div>
			</div>
			<div class = "pokdex-rhs">
			<div class="rhs-whitespace"> </div>
			<div class="pokedex-right-top">
			<div class = "right-down-slope"></div>
			<div class = "right-up-slope">
			</div>
			<div class = "pokedex-right-background">
			<div class ="rhs-container">
			<div class="screen-right">
            <PokeText store = {this.store} />
			</div>
			<div class = "right-blue-buttons">
			<div class = "square"></div>
			<div class = "square"></div>
			<div class = "square"></div>
			<div class = "square"></div>
			<div class = "square"></div>
			<div class = "square"></div>
			<div class = "square"></div>
			<div class = "square"></div>
			<div class = "square"></div>
			<div class = "square"></div>
			</div>
			<div class ="rhs-button-row">
			<div class="rhs-small-circles">
			<div class= "circle circle-darkgreen"></div>
			<div class="circle circle-orange"></div>
			</div>
			<div class = "rhs-long-buttons">
			<div class ="rhs-button-1"></div>
			<div class = "rhs-button-2"></div>
			</div>
			</div>
			<div class = "rhs-button-row-2">
			<div class="rhs-direction-button"></div>
			<div class="rhs-direction-button"></div>
			<div class="rhs-back-button  circle"></div>
			</div>
			<div class = "rhs-button-pads">
			<div class ="button-pad"></div>
			<div class="button-pad"></div>
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
