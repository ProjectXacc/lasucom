// User data and session management with password expiration date (30 days from registration)
const users = [
    { username: "user123", password: "pass123", registrationDate: new Date("2024-12-01") },
    { username: "200710093", password: "PADONU1", registrationDate: new Date("2025-04-01") },
    { username: "190710050", password: "cypher1234", registrationDate: new Date("2024-12-01") },
    { username: "2107100064", password: "mightdeletelater", registrationDate: new Date("2024-12-07") },
{ username: "220710083", password: "455205", registrationDate: new Date("2025-01-30") },
];

// Get user IP address (simulate for local testing)
function getUserIP() {
    // Placeholder for IP retrieval function
    return "127.0.0.1"; // Use a simulated IP for demonstration
}

// Validate login with user limit, IP checks, and password expiration
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const userIP = getUserIP();
    const currentDate = new Date();

    // Check credentials
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Check if password has expired (30 days after registration)
        const expirationDate = new Date(user.registrationDate);
        expirationDate.setDate(expirationDate.getDate() + 30);

        if (currentDate > expirationDate) {
            errorMessage.textContent = "Your password has expired. Please reset your password.";
            return false;
        }

        // IP limit check
        if (user.activeIPs && user.activeIPs.length >= 2 && !user.activeIPs.includes(userIP)) {
            errorMessage.textContent = "More than two users are connected to your account. Please log out to use it.";
            return false;
        }

        // Register or update IP for user
        if (!user.activeIPs) user.activeIPs = [];
        if (!user.activeIPs.includes(userIP)) user.activeIPs.push(userIP);

        // Display a welcome message and then redirect to quiz page
        alert(`Welcome, ${username}! You have successfully logged in.`);
        window.location.href = "quiz_page.html"; // Redirect to quiz page
    } else {
        errorMessage.textContent = "Incorrect username or password.";
    }
    return false;
}