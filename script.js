document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    if (email) {
        alert(`Thank you for contacting us, ${email}! We will get back to you soon.`);
        document.getElementById('contact-form').reset(); // Reset the form
    } else {
        alert('Please enter a valid email address.');
    }
});
