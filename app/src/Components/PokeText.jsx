import {observer} from 'mobx-react';
import React, { Component } from 'react';

export const PokeText = observer(class PokeText extends React.Component {
    render () {
		return (<span className="pokemon-text"> {this.props.store.name} </span>)
    }
});
