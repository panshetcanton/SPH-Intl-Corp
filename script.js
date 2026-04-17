function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('is-open', isOpen);
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
      document.getElementById('hamburger').classList.remove('is-open');
    });
  });

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

  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const cardSliderState = {};
  function cardSlide(id, dir) {
    const slider = document.getElementById(id);
    const slides = slider.querySelector('.card-slides');
    const total = slides.querySelectorAll('img').length;
    if (!cardSliderState[id]) cardSliderState[id] = 0;
    cardSliderState[id] = (cardSliderState[id] + dir + total) % total;
    const slideWidth = slider.offsetWidth;
    slides.style.transform = `translateX(-${cardSliderState[id] * slideWidth}px)`;
  }

  const allSliders = [
    'paperSlider','writingSlider','filingSlider','deskSlider','padlockSlider','packagingSlider',
    'airconSlider','fansSlider','fridgeSlider','vipSlider','variousSlider','giveawaysSlider',
    'cleaningSlider','mopsSlider','trashSlider','janPaperSlider','safetySlider','maintenanceSlider',
    'packedSlider','csrSlider','reliefSlider','welfareSlider','christmasSlider','grocerySlider',
    'hygieneKitSlider','soapSlider','washSlider','disinfectantSlider','mosquitoSlider','tissueSlider',
    'laptopSlider','desktopSlider','printerSlider','tabletSlider','cctvSlider','storageSlider','voiceSlider','fingerprintSlider','smarttvSlider'
  ];
  setInterval(() => allSliders.forEach(id => { if (document.getElementById(id)) cardSlide(id, 1); }), 3000);