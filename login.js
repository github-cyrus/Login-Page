import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBDFxSZWl3LPkn08XRWZKnSukxzIznLsCc",
    authDomain: "hotel-and-restaurant-guide.firebaseapp.com",
    projectId: "hotel-and-restaurant-guide",
    storageBucket: "hotel-and-restaurant-guide.appspot.com",
    messagingSenderId: "488935295323",
    appId: "1:488935295323:web:a205cf859dfbd0b270327e"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.getElementById('loginForm');  // Correct form ID
form.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            alert("Logged in successfully!");
            window.location.href = 'index.html';  // Redirect to dashboard
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});
