import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/+esm';

emailjs.init("N1FZNTn5RPMfmdSeq");

function showStatus(form, msg) {
  let el = document.getElementById('form-status');
  if (!el) {
    el = document.createElement('p');
    el.id = 'form-status';
    el.style.cssText = 'margin-top:10px;font-size:0.9rem;font-weight:600;color:#ef5350;';
    form.appendChild(el);
  }
  el.textContent = msg;
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const agency = document.getElementById('agency').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!fullName || !email || !agency || !message) {
      showStatus(contactForm, 'Please fill in all fields.');
      return;
    }

    const submitButton = contactForm.querySelector('.btn-submit');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    emailjs.send('service_8w4na1c', 'template_dtpk4wj', {
      from_name: fullName,
      from_email: email,
      agency: agency,
      message: message
    }).then(
      function() {
        contactForm.reset();
        submitButton.textContent = 'Sent!';
        submitButton.style.background = '#1B2F6B';
        submitButton.disabled = false;
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.style.background = '';
        }, 3000);
      },
      function() {
        showStatus(contactForm, 'Failed to send message. Please try again or contact us directly.');
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    );
  });
}
