
// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDxbYqbBZIsHjXg6x7JrJ17tD7KPAElYE",
  authDomain: "agriusers.firebaseapp.com",
  projectId: "agriusers",
  storageBucket: "agriusers.appspot.com", // ✅ Fixed Storage Bucket URL
  messagingSenderId: "929296211549",
  appId: "1:929296211549:web:8b0178bfa4bc43d21f77b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submit");
  const errorMessage = document.getElementById("error-message");

  

  if (!submit || !errorMessage) {
    console.error("Submit button or error message div not found!");
    return;
  }

  submit.addEventListener("click", function (event) {
    event.preventDefault();

    // Get input values inside event listener
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    

    if (!email || !password) {
      errorMessage.innerText = "Please enter email and password.";
      errorMessage.style.display = "block";
      return;
    }

    errorMessage.style.display = "none"; // Hide previous errors

    // Firebase sign-in
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login successful:", userCredential.user);
        window.location.href = "home.html";
      })
      .catch((error) => {
        console.error("Login failed:", error);
        errorMessage.innerText = "Invalid email or password.";
        errorMessage.style.display = "block";
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const togglePassword = document.querySelector(".toggle-password");

    togglePassword.addEventListener("click", function () {
        // Toggle password visibility
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.innerHTML = "&#128064;"; // Change to an open eye emoji
        } else {
            passwordInput.type = "password";
            togglePassword.innerHTML = "&#128065;"; // Change back to a closed eye emoji
        }
    });
});
