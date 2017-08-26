import React, { Component } from 'react';
import firebase from './firebase.js';

class SignOutPage extends Component {

	componentDidMount() {
		firebase.auth().signOut();
	}

	render () {
		return <div/>;
	}
}

export default SignOutPage;