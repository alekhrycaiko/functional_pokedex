import {action,  observable} from 'mobx';
import axios from 'axios';
class PokedexStore {

	@observable pokemonid = 0;
	@observable name = "";
	@observable sprite = "";

	@action.bound incrementPokeId() { 
		if (this.pokemonid < 152) { 
			this.pokemonid++;
			this.handleChangedPokeId();
		}
	}
	@action.bound decrementPokeId() { 
		if (this.pokemonid > 1) { 
			this.pokemonid--;
			this.handleChangedPokeId();
		}
	}

	handleChangedPokeId () { 
		return axios.get("/pokemon/" + this.pokemonid)
			.then(res => {
				this.name = res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1, res.data.name.length);
				this.sprite = res.data.sprite;
				return res
			}).catch( err => {
				console.log("Service call to API failed on GET by pokeid with err: " + err);
				return err
			});
	}
}
export default PokedexStore;
