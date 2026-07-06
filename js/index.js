// Signup: Save to LocalStorage
function handleSignup(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;

    if (password !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPass', password);
    alert("Registered successfully!");
    window.location.href = "SignIn.html";
}

// Signin: Authenticate
function handleSignin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === localStorage.getItem('userEmail') && password === localStorage.getItem('userPass')) {
        window.location.href = "travelapp.html";
    } else {
        alert("Invalid credentials!");
    }
}

// Show/Hide Password
function togglePassword() {
    const x = document.getElementById("password");
    x.type = (x.type === "password") ? "text" : "password";
}

function validateCity(input) {
    const errorSpan = document.getElementById('city-error');
    if (!/^[A-Za-z]+$/.test(input.value)) {
        input.classList.add('invalid');
        errorSpan.style.display = 'block';
    } else {
        input.classList.remove('invalid');
        errorSpan.style.display = 'none';
    }
}

