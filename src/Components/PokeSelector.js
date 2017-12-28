import React from 'react';
import {observer} from 'mobx-react';
import PokedexStore from "./../Store/PokedexStore.js";
export const PokeSelector = observer(class PokeSelector extends React.Component { 
    render() { 
        return <div className = "keyboard-container"> 
            <div className= "keyboard-up key-block">    </div>
            <div onClick = {() => this.props.store.incrementPokeId()} className = "keyboard-right key-block"> </div>
            <div onClick = {() => this.props.store.decrementPokeId()} className = "keyboard-left key-block"> </div>
            <div className = "keyboard-down key-block"> </div> 
            </div> 
    }
});
