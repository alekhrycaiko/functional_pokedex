import React,  {Component} from 'react';
import {observer} from 'mobx-react';
export const PokeDisplay = observer(class PokeDisplay  extends React.Component { 
    
    render() { 
    const pokeId = "pkspr pkmn-" + this.props.store.pokemonid;
    const iconNum = "icon_" + this.props.store.pokemonid;
    return <div>
            <div id={iconNum} className={pokeId}></div>
            <script type="text/javascript">PkSpr.decorate({iconNum};</script>
        </div>
    }
});
