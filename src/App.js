// Root Parent of application
import React from 'react';
import './stylesheets/Pokedex.scss';
export default class App extends React.Component { 
    constructor(props) { 
        super(props);
    }
    // todo: change this decorator. used for testing setup.
    @autobind
    onChange() {}
}
