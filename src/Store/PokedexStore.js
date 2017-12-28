import {action, extendObservable, observable} from 'mobx';
class PokedexStore {
    constructor() { 
        extendObservable(this, {
        pokemonid: 1,
        incrementPokeId: action(function () { 
            if (this.pokemonid < 152) { 
                 this.pokemonid++;
            }
         }),
         decrementPokeId: action(function () { 
             if (this.pokemonid > 1) { 
                this.pokemonid--;
             }
            })
        });
    }
}
export default PokedexStore;
