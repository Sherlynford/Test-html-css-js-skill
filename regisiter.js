document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Store the username and password in cookies with an expiration date
    document.cookie = `username=${username}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
    document.cookie = `password=${password}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;

    // Redirect to the login page
    window.location.href = "login.html";
});
