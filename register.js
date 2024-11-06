import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

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
const db = getFirestore(app);

const form = document.getElementById('registerForm');
form.addEventListener('submit', async function (event) {
    event.preventDefault();  // Prevent default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, 'users', user.uid), {
            username: username,
            email: email,
            phone: phone,
            country: country
        });

        alert("Account created successfully! Redirecting to login...");
        window.location.href = 'login.html';
    } catch (error) {
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
    }
});
