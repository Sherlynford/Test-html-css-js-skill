document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    // Retrieve the username and password from cookies
    const cookies = document.cookie.split(';');
    let registeredUsername = '';
    let registeredPassword = '';

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'username') {
            registeredUsername = value;
        }
        if (name === 'password') {
            registeredPassword = value;
        }
    }

    if (enteredUsername === registeredUsername && enteredPassword === registeredPassword) {
        // Successful login
        document.getElementById("error-message").textContent = "";
        alert("Login successful!");
        // Redirect to a different page if needed
        // window.location.href = "dashboard.html";
    } else {
        // Display an error message
        document.getElementById("error-message").textContent = "Invalid username or password. Please try again.";
    }
});
