import firebase from 'firebase'
const config = {
	apiKey: "AIzaSyD52Hpo4RJkxLhHPcRRw9HXd-thHVYD_O0",
	authDomain: "rowan-acm.firebaseapp.com",
	databaseURL: "https://rowan-acm.firebaseio.com",
	storageBucket: "rowan-acm.appspot.com",
	messagingSenderId: "536754237521"
};
firebase.initializeApp(config);
export default firebase;