import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/+esm';

// Initialize EmailJS
emailjs.init("N1FZNTn5RPMfmdSeq");

// Store in window for use in other scripts
window.emailjs = emailjs;

console.log('EmailJS v4 initialized successfully');

// Handle contact form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');

    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const agency = document.getElementById('agency').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate inputs
    if (!fullName || !email || !agency || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Show loading state
    const submitButton = contactForm.querySelector('.btn-submit');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Prepare email parameters
    const emailParams = {
      from_name: fullName,
      from_email: email,
      agency: agency,
      message: message
    };

    console.log('Sending email...');

    // Send email using EmailJS
    emailjs.send(
      'service_8w4na1c',
      'template_dtpk4wj',
      emailParams
    ).then(
      function(response) {
        console.log('SUCCESS', response.status, response.text);
        alert('Message sent successfully! We will get back to you soon.');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      },
      function(error) {
        console.log('FAILED', error);
        alert('Failed to send message. Please try again or contact us directly.');
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    );
  });
}
