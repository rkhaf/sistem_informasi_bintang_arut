/* ==========================================================================
   BATIK BINAR - Core JavaScript (Global - Ada di SEMUA page)
   Royal Blue Theme & Modern Reference Layout
   ========================================================================== */

// 1. Mobile Navigation & Backdrop
function initMobileNav() {
  const menuBtn = document.getElementById('menuToggleBtn');
  const navMenu = document.getElementById('navMenu');
  const backdrop = document.getElementById('mobileBackdrop');

  if (!menuBtn || !navMenu) return;

  const toggleMenu = () => {
    const isOpen = navMenu.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // const openMenu = () => {
  //   menuBtn.classList.add('active');
  //   navMenu.classList.add('open');
  //   if (backdrop) backdrop.classList.add('active');
  //   document.body.style.overflow = 'hidden';
  // };

  const closeMenu = () => {
    menuBtn.classList.remove('active');
    navMenu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  menuBtn.addEventListener('click', toggleMenu);

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });
}

// 2. Header Scroll Effect & Active Spy
//    (Sudah dimodifikasi hanya berjalan untuk section yang ada di navbar)
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Active section spy - hanya untuk section yang anchor-nya ada di navbar
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (sections.length > 0 && navLinks.length > 0) {
    const navHashes = new Set();
    navLinks.forEach(link => {
      const linkHash = new URL(link.href, window.location.href).hash;
      if (linkHash) navHashes.add(linkHash);
    });

    const spySections = Array.from(sections).filter(sec => navHashes.has(`#${sec.id}`));

    if (spySections.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              const linkHash = new URL(link.href, window.location.href).hash;
              link.classList.toggle('active', linkHash === `#${id}`);
            });
          }
        });
      }, { rootMargin: '-30% 0px -60% 0px' });

      spySections.forEach(sec => observer.observe(sec));
    }
  }
}

// 3. Toast Notification (Digunakan di form validation & lainnya)
function showToast(message, type = 'info', duration = 3500) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconHtml = '';
  if (type === 'success') {
    iconHtml = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === 'error') {
    iconHtml = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
  } else {
    iconHtml = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1687D9" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `${iconHtml}<span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

// 4. Lightbox Modal inisialisasi
function initLightboxModal() {
  const modal = document.getElementById('previewModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

// 5. Scroll Reveal
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}