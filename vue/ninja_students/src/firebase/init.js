import * as firebase from 'firebase/firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyBtnrWFYIE6qVmwhWAnGj2Yb3LzI9kQImc",
  authDomain: "aib-e-learning.firebaseapp.com",
  databaseURL: "https://aib-e-learning.firebaseio.com",
  projectId: "aib-e-learning",
  storageBucket: "",
  messagingSenderId: "264136591289",
  appId: "1:264136591289:web:040b0673b3e50399"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()

