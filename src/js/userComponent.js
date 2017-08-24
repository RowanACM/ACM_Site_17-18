import React, { Component } from 'react';
import firebase from './firebase.js';

/*
	UserComponent is a utility class which lets a component 
	automatically get a state which keeps track of the logged in user.
	Children can access a boolean isLoggedIn variable and the actual user object
*/
class UserComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {isLoggedIn: false};
	}

	componentWillUnmount() {
		this.firebaseAuthUnsubscribe();
	}

	componentDidMount() {
		const self = this;

		this.firebaseAuthUnsubscribe = firebase.auth().onAuthStateChanged(function(user) {
			if(user) {
				self.setState({isLoggedIn: true, user: user});
			} else {
				self.setState({isLoggedIn: false});
			}
		});
	}
}

export default UserComponent;