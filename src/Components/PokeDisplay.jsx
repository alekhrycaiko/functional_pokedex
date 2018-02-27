import React,  {Component} from 'react';
import {observer} from 'mobx-react';
export const PokeDisplay = observer(class PokeDisplay  extends React.Component { 
	render() {
		if (this.props.store.sprite) { 
			return <div><img className="pokemon-image" src={this.props.store.sprite}/></div>
		} 
		return null;
	}
});
