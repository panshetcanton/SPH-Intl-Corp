// Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));

  // Form submit
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = 'Message Sent!';
    btn.style.background = '#1B2F6B';
    setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; }, 3000);
  }

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.boxShadow = window.scrollY > 10 ? '0 4px 30px rgba(0,0,0,0.4)' : '0 2px 20px rgba(0,0,0,0.3)';
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  // Back to top button
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });