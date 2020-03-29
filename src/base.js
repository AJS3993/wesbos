import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANQ-Ooo4gcIwkg892D7rjVC3HJ6HoYO4w",
    authDomain: "restaurantmenu894703.firebaseapp.com",
    databaseURL: "https://restaurantmenu894703.firebaseio.com"
  })

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp}