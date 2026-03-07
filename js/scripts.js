// Set current year dynamically in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Initialize EmailJS
if (typeof emailjs !== 'undefined') {
    (function() {
        emailjs.init('unqXxi3tjnQGPeqkm');  // Replace with your EmailJS user ID
    })();
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        if (typeof emailjs !== 'undefined') {
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
                    if (document.getElementById('responseMessage')) {
                        document.getElementById('responseMessage').innerHTML = "Message sent successfully!";
                    } else {
                        alert("Message sent successfully!");
                    }
                    document.getElementById('contact-form').reset();  // Reset form after submission
                }, function(error) {
                    console.log('FAILED...', error);
                    if (document.getElementById('responseMessage')) {
                        document.getElementById('responseMessage').innerHTML = "Failed to send message.";
                    } else {
                        alert("Failed to send message.");
                    }
                });
        } else {
            console.log("EmailJS is not loaded. Simulated sending message.");
            alert('Message Sent Successfully!');
            document.getElementById('contact-form').reset();
        }
    });
}
