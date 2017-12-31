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
         return new Promise( (resolve, reject) =>  {
            const link = "/pokemon/" + this.pokemonid;
             axios.get(link)
             .then( res => {
                 this.name = res.data.name;
                 this.sprite = res.data.sprite;
                resolve(res);
             }).catch( err =>  { 
                console.log("Service call to API failed on GET by pokeid with err: " + err);
                 reject(err);
             });
         });
    }
}
export default PokedexStore;
