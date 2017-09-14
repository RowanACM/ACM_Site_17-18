import React, {Component} from 'react';
import firebase from './firebase.js';

class SignInPage extends Component{

	startSignInPopup () {
		var provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/plus.login');
		firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a Google Access Token. You can use it to access the Google API.
		  //var token = result.credential.accessToken;
		  // The signed-in user info.
		  //var user = result.user;
		  // ...
		}).catch(function(error) {
		  // Handle Errors here.
		  //var errorCode = error.code;
		  //var errorMessage = error.message;
		  // The email of the user's account used.
		  //var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  //var credential = error.credential;
		});
	}

	render () {
		return (
			<div className="mdl-grid">
				<div className="mdl-layout-spacer"/>
				<h className="mdl-cell mdl-cell--4-col mdl-layout-title">Sign in with your Google Account</h>
				<div className="mdl-layout-spacer"/>
				<div className="mdl-layout-spacer"/>
				<div className="centered mdl-cell mdl-cell--4-col g-signin2" onClick={this.startSignInPopup}/>
				<div className="mdl-layout-spacer"/>
			</div>
		);
	}
}

export default SignInPage;