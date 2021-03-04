import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBDNuB0tIVUcP8ikK5RrPY2GHppC4VjEBw",
    authDomain: "signup-login-dev.firebaseapp.com",
    projectId: "signup-login-dev",
    storageBucket: "signup-login-dev.appspot.com",
    messagingSenderId: "1034285862427",
    appId: "1:1034285862427:web:cb55ce4f351df6314fb2be"
};

const fire=firebase.initializeApp(config);
export default fire;