document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Feedback submitted. Thank you!');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login successful!');
});
