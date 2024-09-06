// Initialize EmailJS
(function() {
    emailjs.init('unqXxi3tjnQGPeqkm');  // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // EmailJS parameters
    var templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send email using EmailJS
    emailjs.send('service_febujve', 'template_7nfkguv', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('responseMessage').innerHTML = "Message sent successfully!";
            document.getElementById('contactForm').reset();  // Reset form after submission
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('responseMessage').innerHTML = "Failed to send message.";
        });
});
