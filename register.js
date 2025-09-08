// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDxbYqbBZIsHjXg6x7JrJ17tD7KPAElYE",
    authDomain: "agriusers.firebaseapp.com",
    projectId: "agriusers",
    storageBucket: "agriusers.firebasestorage.app",
    messagingSenderId: "929296211549",
    appId: "1:929296211549:web:8b0178bfa4bc43d21f77b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ Initialize Firestore properly

// Submit button event listener
const submit = document.getElementById('submit');
submit.addEventListener("click", async function (event) {
  event.preventDefault();

  // Fetch input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmpassword').value;
  const name = document.getElementById('name').value;
  const location = document.getElementById('location').value;
  const acres = document.getElementById('acres').value;
  const croptype = document.getElementById('croptype').value;
  const stdate = document.getElementById('stdate').value;

  // Check if password and confirm password match
  if (password !== confirmPassword) {
    passwordError.style.display = "block"; // Show error message
    return;
} else {
    passwordError.style.display = "none"; // Hide error message
}
  try {
      // Create a new user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
          email: email,
          name: name,
          location: location,
          acres: acres,
          croptype: croptype,
          startDate: stdate
      });

      alert("Account created successfully!");
      window.location.href = "login.html"; // Redirect after successful signup
  } catch (error) {
      alert(error.message);
      console.error("Error creating user:", error);
  }
});


// Form navigation logic
const form = document.querySelector("form"),
      nextBtn = form.querySelector(".nextBtn"),
      backBtn = form.querySelector(".backBtn"),
      allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
    let allFilled = true;
    allInput.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });
    if (allFilled) {
        form.classList.add('secActive');
    }
});

backBtn.addEventListener("click", () => form.classList.remove('secActive'));
