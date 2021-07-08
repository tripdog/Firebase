 // My web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyClyc64Xd6SlFIEE3_MKlE0pJqvoXm-wVc",
    authDomain: "testing-firebase-9ece4.firebaseapp.com",
    projectId: "testing-firebase-9ece4",
    storageBucket: "testing-firebase-9ece4.appspot.com",
    messagingSenderId: "519711400288",
    appId: "1:519711400288:web:ea05326ef7e8cd462bfe05"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const register = (email, password) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
        console.log(error)
    })
}
const login = (email, password) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
        console.log(error)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    document
        .querySelector("#registration-form")
        .addEventListener("submit", (e) => {
            e.preventDefault()
            const email = document.querySelector('#registration-form input[type="email"]').value
            const password = document.querySelector('#registration-form input[type="password"]').value
            register(email, password)
        })
    
    document.querySelector("#login-form").addEventListener("submit", (e) => {
        e.preventDefault()
        const email = document.querySelector('#login-form input[type="email"]').value
        const password = document.querySelector('#login-form input[type="password"]').value
        login(email, password)
    })
})
  