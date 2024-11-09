function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedUser = localStorage.getItem(username);
    const messageDiv = document.getElementById('message');

    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            alert('Login successful!');
            messageDiv.textContent = '';

            // Set authentication token in localStorage
            localStorage.setItem("authToken", "authenticated");

            // Redirect to the dashboard or protected page
            window.location.href = '../../Portfolio Website With 3D Effect /index.html';
        } else {
            messageDiv.textContent = 'Incorrect password.';
            alert('Incorrect password.');
        }
    } else {
        messageDiv.textContent = 'User not found. Please sign up.';
        alert('User Not Found. Please Sign Up');
    }
}
