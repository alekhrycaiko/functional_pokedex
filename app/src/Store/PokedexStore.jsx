import {action,  observable} from 'mobx';
import axios from 'axios';
import "regenerator-runtime/runtime";

class PokedexStore {

	@observable pokemonid = 0;
	@observable name = "";
	@observable sprite = "";

	@action.bound async incrementPokeId() {
		if (this.pokemonid < 152) {
			this.pokemonid++;
			return await this.handleChangedPokeId();
		}
	}
	@action.bound async decrementPokeId() {
		if (this.pokemonid > 1) {
			this.pokemonid--;
			return await this.handleChangedPokeId();
		}
	}

	async handleChangedPokeId () { 
		try { 
			const {data : {name, sprites : {front_default}}}  = await axios.get(`/pokemon/${this.pokemonid}`);
			this.name = name.charAt(0).toUpperCase() + name.slice(1, name.length);
			this.sprite = front_default; 
		} catch(err) { 
			console.log("Error : ${err}");
		}
	}
}
export default PokedexStore;
