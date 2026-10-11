<?php
$requestPath = $_SERVER['REQUEST_URI'] ?? '/';
$requestPath = parse_url($requestPath, PHP_URL_PATH) ?: '/';
$segments    = array_values(array_filter(explode('/', $requestPath), fn ($s) => $s !== ''));
$currentSlug = strtolower($segments[count($segments) - 1] ?? '');
$currentSlug = preg_replace('/\.php$/', '', $currentSlug);

$navPageMap = [
    ''          => 'home',
    'index'     => 'home',
    'beranda'   => 'home',
    'galeri'    => 'galeri',
    'profile'   => 'profil',
    'belanja'   => 'belanja',
    'login'     => 'login',
    'dashboard' => 'dashboard',
];
$activeNav = $navPageMap[$currentSlug] ?? 'home';

$navActive = fn (string $item) => $activeNav === $item ? 'active' : '';
?>
<link rel="js" href="js/script.js">
<link rel="stylesheet" href="css/style.css">
<link rel="icon" type="image/png" href="assets/logo-batik-binar.png">
<header class="site-header" id="siteHeader">
    <div class="container nav-container">
        <a href="index.php#beranda" class="brand-logo" aria-label="Beranda Batik Binar">
            <img src="assets/logo-batik-binar.png" alt="Batik Binar" class="brand-logo-img">
            <div class="brand-logo-text">
                <span class="brand-name">BATIK BINAR</span>
                <span class="brand-tag">Dermayon Heritage</span>
            </div>
        </a>

        <nav>
        <ul class="nav-menu" id="navMenu">
            <li><a href="index.php#beranda" class="nav-link <?= $navActive('home') ?>">Home</a></li>
            <li><a href="index.php#tentang" class="nav-link">Tentang</a></li>
            <li><a href="index.php#proses" class="nav-link">Proses</a></li>
            <li><a href="index.php#motif" class="nav-link">Koleksi</a></li>

            <li><a href="galeri" class="nav-link <?= $navActive('galeri') ?>">Galeri</a></li>
            <li><a href="profile" class="nav-link <?= $navActive('profil') ?>">Profil</a></li>
            <li><a href="belanja" class="nav-link <?= $navActive('belanja') ?>">Belanja</a></li>
            <li class="mobile-only" style="display: none;">
            <a href="login.html" class="btn-pill btn-pill-royal" style="width: 100%; justify-content: center; margin-top: 16px;">Masuk Akun</a>
            </li>
        </ul>
        </nav>

        <div class="nav-actions">
        <a href="dashboard" class="nav-icon-btn <?= $navActive('dashboard') ?>" aria-label="Dashboard" style="background-color: var(--color-accent); color: white;">
            <i class="fas-fa-user"></i>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
            </svg>
        </a>

        <a href="login" class="btn-pill btn-pill-blue <?= $navActive('login') ?>" style="padding: 8px 18px; font-size: 0.88rem;">
            <span><?= $activeNav === 'dashboard' ? 'Logout' : 'Login' ?></span>
            <div class="btn-arrow-circle" style="width: 22px; height: 22px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            </div>
        </a>
        </div>

        <button class="menu-toggle-btn" id="menuToggleBtn" aria-label="Buka menu navigasi" type="button">
        <span></span>
        <span></span>
        <span></span>
        </button>
    </div>
    <script src="js/script.js"></script>
</header>
