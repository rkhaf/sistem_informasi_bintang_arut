/* ==========================================================================
   BATIK BINAR - Auth JavaScript (Login & Register)
   Hanya dijalankan di halaman login.html & register.html
   ========================================================================== */

// 1. Password Show/Hide Toggle
function initPasswordToggles() {
  const toggleButtons = document.querySelectorAll('.password-toggle-btn');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetInputId = btn.getAttribute('data-target');
      const input = document.getElementById(targetInputId);
      if (!input) return;

      const isPassword = input.getAttribute('type') === 'password';
      input.setAttribute('type', isPassword ? 'text' : 'password');

      btn.innerHTML = isPassword ? getEyeOffIcon() : getEyeIcon();
      btn.setAttribute('aria-label', isPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi');
    });
  });
}

function getEyeIcon() {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>`;
}

function getEyeOffIcon() {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>`;
}

// 2. Password Strength Meter (Register)
function initPasswordStrength() {
  const pwdInput = document.getElementById('regPassword');
  const meterContainer = document.getElementById('pwdStrengthMeter');
  const strengthText = document.getElementById('pwdStrengthText');
  const bars = document.querySelectorAll('.strength-bar, .glass-strength-bar');

  if (!pwdInput || !meterContainer) return;

  pwdInput.addEventListener('input', () => {
    const val = pwdInput.value;
    if (val.length === 0) {
      meterContainer.classList.remove('active');
      return;
    }
    meterContainer.classList.add('active');

    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    bars.forEach(b => {
      b.className = b.classList.contains('glass-strength-bar') ? 'glass-strength-bar' : 'strength-bar';
    });

    if (score <= 1) {
      bars[0].classList.add('filled-weak');
      if (strengthText) strengthText.textContent = 'Kekuatan kata sandi: Lemah (min. 8 karakter & angka)';
    } else if (score === 2 || score === 3) {
      bars[0].classList.add('filled-medium');
      bars[1].classList.add('filled-medium');
      if (score === 3) bars[2].classList.add('filled-medium');
      if (strengthText) strengthText.textContent = 'Kekuatan kata sandi: Sedang';
    } else if (score >= 4) {
      bars.forEach(b => b.classList.add('filled-strong'));
      if (strengthText) strengthText.textContent = 'Kekuatan kata sandi: Sangat Kuat';
    }
  });
}

// 3. Form Validation (Login & Register)
function initFormValidation() {
  // Login Form Validation
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const email = document.getElementById('loginEmail');
      const password = document.getElementById('loginPassword');

      if (!validateEmail(email.value.trim())) {
        showFieldError(email, 'Masukkan alamat email yang valid.');
        isValid = false;
      } else {
        clearFieldError(email);
      }

      if (password.value.trim().length === 0) {
        showFieldError(password, 'Kata sandi tidak boleh kosong.');
        isValid = false;
      } else {
        clearFieldError(password);
      }

      if (isValid) {
        showToast('Berhasil masuk! Selamat datang di Batik Binar.', 'success');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1200);
      }
    });
  }

  // Register Form Validation
  const regForm = document.getElementById('registerForm');
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById('regName');
      const email = document.getElementById('regEmail');
      const phone = document.getElementById('regPhone');
      const password = document.getElementById('regPassword');
      const confirmPassword = document.getElementById('regConfirmPassword');
      const terms = document.getElementById('regTerms');

      if (name.value.trim().length < 3) {
        showFieldError(name, 'Nama lengkap minimal 3 karakter.');
        isValid = false;
      } else {
        clearFieldError(name);
      }

      if (!validateEmail(email.value.trim())) {
        showFieldError(email, 'Masukkan alamat email yang valid.');
        isValid = false;
      } else {
        clearFieldError(email);
      }

      const cleanPhone = phone.value.replace(/[^0-9]/g, '');
      if (cleanPhone.length < 9) {
        showFieldError(phone, 'Nomor telepon minimal 9 digit angka.');
        isValid = false;
      } else {
        clearFieldError(phone);
      }

      if (password.value.length < 6) {
        showFieldError(password, 'Kata sandi minimal 6 karakter.');
        isValid = false;
      } else {
        clearFieldError(password);
      }

      if (confirmPassword.value !== password.value || confirmPassword.value.length === 0) {
        showFieldError(confirmPassword, 'Konfirmasi kata sandi tidak cocok.');
        isValid = false;
      } else {
        clearFieldError(confirmPassword);
      }

      if (terms && !terms.checked) {
        showToast('Harap setujui Syarat & Ketentuan terlebih dahulu.', 'error');
        isValid = false;
      }

      if (isValid) {
        showToast('Pendaftaran berhasil! Mengarahkan ke halaman login...', 'success');
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1500);
      }
    });
  }

  // Clear error on input
  const inputs = document.querySelectorAll('.form-control, .glass-control');
  inputs.forEach(input => {
    input.addEventListener('input', () => clearFieldError(input));
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFieldError(input, message) {
  input.classList.add('is-invalid');
  const group = input.closest('.form-group, .glass-form-group');
  if (group) {
    group.classList.add('has-error');
    const errEl = group.querySelector('.form-error, .glass-error-msg');
    if (errEl) errEl.textContent = message;
  }
}

function clearFieldError(input) {
  input.classList.remove('is-invalid');
  const group = input.closest('.form-group, .glass-form-group');
  if (group) group.classList.remove('has-error');
}