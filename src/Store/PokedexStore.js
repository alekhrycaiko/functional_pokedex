import {extendObservable, action,  observable} from 'mobx';
import axios from 'axios';
class PokedexStore {
    constructor() { 
        extendObservable(this, {
        pokemonid: 0,
        name: "",
        sprite: "",
        incrementPokeId: action(function () { 
            if (this.pokemonid < 152) { 
                 this.pokemonid++;
                 this.handleChangedPokeId();
            }
         }),
         decrementPokeId: action(function () { 
             if (this.pokemonid > 1) { 
                this.pokemonid--;
                this.handleChangedPokeId();
             }
            })
        });
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
