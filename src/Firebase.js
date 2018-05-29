import * as firebase from "firebase";

let config = {
    apiKey: "AIzaSyAjPQLyLUMN8LPkX517uebyUXmj32OkrDE",
    authDomain: "reactproj-5a49d.firebaseapp.com",
    databaseURL: "https://reactproj-5a49d.firebaseio.com",
    projectId: "reactproj-5a49d",
    storageBucket: "reactproj-5a49d.appspot.com",
    messagingSenderId: "467616039525"
};
firebase.initializeApp(config);
let rootRef = firebase.firestore();;

export default rootRef;