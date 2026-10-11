/* ==========================================================================
   BATIK BINAR - Homepage JavaScript
   Hanya dijalankan di halaman index.php (beranda)
   ========================================================================== */

// 1. Splash Screen Controller
function initSplashScreen() {
  const splash = document.getElementById('splashScreen');
  const skipBtn = document.getElementById('splashSkipBtn');

  if (!splash) return;

  const dismissSplash = () => {
    splash.classList.add('hidden');
    setTimeout(() => {
      splash.style.display = 'none';
    }, 800);
  };

  // Auto dismiss after 2.4 seconds
  const timer = setTimeout(dismissSplash, 2400);

  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.preventDefault();
      clearTimeout(timer);
      dismissSplash();
    });
  }
}

// 2. Hero Capsule Cards Interaction
function initHeroCapsules() {
  const prevBtn = document.getElementById('capsulePrevBtn');
  const nextBtn = document.getElementById('capsuleNextBtn');
  const capsules = document.querySelectorAll('.capsule-card');

  if (!prevBtn || !nextBtn || capsules.length === 0) return;

  let activeIndex = 1; // Center card (index 1) is initially tallest

  const updateCapsules = () => {
    capsules.forEach((card, idx) => {
      if (idx === activeIndex) {
        card.style.transform = 'translateY(-14px) scale(1.04)';
        card.style.borderColor = '#1687D9';
      } else {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.borderColor = '#FFFFFF';
      }
    });
  };

  prevBtn.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + capsules.length) % capsules.length;
    updateCapsules();
  });

  nextBtn.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % capsules.length;
    updateCapsules();
  });

  capsules.forEach((card, idx) => {
    card.addEventListener('click', () => {
      activeIndex = idx;
      updateCapsules();
    });
  });
}