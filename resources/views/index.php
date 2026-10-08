<?php
include "komponen/navbar.php";
include "komponen/database.php";
$db = new database();
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BATIK BINAR - Warisan Batik Indramayu Untuk Generasi Masa Kini</title>
  <meta name="description" content="Website resmi Batik Binar. Pelestarian dan eksplorasi modern batik khas Indramayu dengan teknik complongan dan motif pesisir Dermayon.">
  <!-- <link rel="stylesheet" href="style.css"> -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" type="image/png" href="assets/logo-batik-binar.png">
</head>
<body>

  <!--Homepage -->
  <div class="splash-screen" id="splashScreen">
    <div class="splash-ripple-bg"></div>
    <div class="splash-content">
      <div class="splash-logo-wrapper">
        <img src="assets/logo-batik-binar.png" alt="Logo Resmi Batik Binar" class="splash-logo-img">
      </div>
      <p class="splash-tagline">“Melestarikan Warisan, Menghidupkan Budaya”</p>
      <div class="splash-progress-bar">
        <div class="splash-progress-fill"></div>
      </div>
      <button class="splash-skip-btn" id="splashSkipBtn" type="button">Lewati & Masuk &rarr;</button>
    </div>
  </div>



  <!-- Mobile Menu Backdrop -->
  <div class="mobile-backdrop" id="mobileBackdrop"></div>

  <main>

    <section class="hero-wrapper" id="beranda">
      <div class="container hero-container">
        <!-- Left Hero Content -->
        <div class="hero-content-col reveal">
          <span class="hero-tagline-capsule">WARISAN • PESISIR • MAHASENI</span>
          
          <h1 class="hero-heading">
            Warisan Batik <br>
            <span class="text-accent">Indramayu</span>, Untuk <br>
            Generasi Masa Kini
          </h1>

          <p class="hero-desc">
            Menghadirkan keindahan wastra otentik pesisir Dermayon melalui harmoni motif maritim yang berani, keunikan jarum <em>Complongan</em>, dan rancangan modern untuk gaya hidup kontemporer Anda.
          </p>

          <a href="galeri.html" class="btn-pill btn-pill-blue">
            <span>Jelajahi Koleksi</span>
            <div class="btn-arrow-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </a>
        </div>

        <div class="hero-capsules-group reveal">
          <div class="capsules-row">
            <!-- Capsule 1 -->
            <div class="capsule-card" onclick="location.href='#motif'">
              <img src="https://i.pinimg.com/1200x/7b/7d/a7/7b7da76e1d305f43cf9ddda3e83f8bc3.jpg" alt="Batik Sutra Indramayu" class="capsule-img">
              <div class="capsule-overlay">
                <span class="capsule-label">Kain Sutra</span>
              </div>
            </div>

            <!-- Capsule 2 -->
            <div class="capsule-card" onclick="location.href='#proses'">
              <img src="https://i.pinimg.com/736x/ed/1b/c9/ed1bc9abe706ba2058fcf4b51df68761.jpg" alt="Canting Tulis Paoman" class="capsule-img">
              <div class="capsule-overlay">
                <span class="capsule-label">Tulis Paoman</span>
              </div>
            </div>

            <!-- Capsule 3 -->
            <div class="capsule-card" onclick="location.href='#motif'">
              <img src="https://i.pinimg.com/736x/1d/a9/a9/1da9a95dcad5e88499d42625ec9e7701.jpg" alt="Busana Modern Binar" class="capsule-img">
              <div class="capsule-overlay">
                <span class="capsule-label">Moda Modern</span>
              </div>
            </div>
          </div>

          <!-- Circular Carousel Navigation Buttons -->
          <div class="capsules-nav-controls">
            <button class="capsule-nav-btn" id="capsulePrevBtn" aria-label="Sebelumnya">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button class="capsule-nav-btn" id="capsuleNextBtn" aria-label="Selanjutnya">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Curved Concave Bottom Wave (Matches Reference Layout!) -->
      <div class="hero-bottom-curve">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>

    <!-- tentangg -->
    <section class="about-section" id="tentang">
      <div class="container">
        <div class="about-grid">
          <div class="about-collage-wrapper reveal">
            <div class="about-brush-splash"></div>
            <div class="about-brush-splash-bottom"></div>

            <!-- Collage Photos Grid -->
            <div class="about-collage-grid">
              <div class="collage-item collage-item-top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfmOGClQiubBQW8V3PQIcRQjfK9tvMdOixdzr4qqIz5oEy_xRvgWSUMg&s=10" alt="Ibu Pembatik Paoman Canting">
              </div>
              <div class="collage-item collage-item-bottom-1">
                <img src="https://i.pinimg.com/1200x/40/9f/af/409fafab21f085588a2c6cb3c254c245.jpg" alt="Detail Canting dan Kain">
              </div>
              <div class="collage-item collage-item-bottom-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytAskEXFa5AgtYqdWMRj09YU2Vu7F6g6AMw9TiZno94uWkbqit3L0o4g&s=10" alt="Kain Batik Tulis Siap Pakai">
              </div>
            </div>
          </div>

          <!-- Right Narrative Content -->
          <div class="about-content reveal">
            <span class="section-eyebrow-pill">TENTANG KAMI</span>
            <h2 class="section-main-heading">
              Mengapa Memilih Batik Binar Dermayon
            </h2>
            
            <p class="about-narrative">
              Di <strong>Batik Binar</strong>, kami meyakini bahwa batik lebih dari sekadar kain bercorak—ia adalah jembatan sejarah, martabat pesisir, dan doa ketulusan para pembatik Paoman, Indramayu.
            </p>

            <p class="about-narrative">
              Dengan memadukan teknik langka <em>Complongan</em> (penusukan ribuan jarum mikro khas Indramayu), pewarnaan ramah lingkungan, dan rancangan siluet modern yang ergonomis, kami memastikan setiap lembar kain nyaman dikenakan serta bernilai seni tinggi.
            </p>

            <a href="#proses" class="btn-pill btn-pill-royal">
              <span>Pelajari Selengkapnya</span>
              <div class="btn-arrow-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- proses pembuatan -->
    <section class="services-section" id="proses">
      <div class="container">
        <div class="services-header reveal">
          <span class="section-eyebrow-pill">PROSES & KEUNGGULAN</span>
          <h2 class="section-main-heading">Dedikasi Mahakarya Dari Hulu Ke Hilir</h2>
          <p style="color: var(--color-text-muted); font-size: 1.05rem;">
            Setiap karya Batik Binar melalui 3 tahapan utama yang dikerjakan dengan ketelitian tinggi oleh empu pembatik Paoman.
          </p>
        </div>

        <!-- 3 Cards Grid -->
        <div class="services-grid-3">
          <!-- Card 1 -->
          <div class="service-card reveal">
            <div class="service-img-box">
              <img src="https://i.pinimg.com/1200x/95/3d/de/953ddeb8fe354ddc006ed6cfa05e3367.jpg" alt="Molani & Pola Khas">
            </div>
            <div class="service-body">
              <h3 class="service-title">1. Molani & Pola Khas</h3>
              <p class="service-desc">Menggambar sketsa motif fauna bahari dan flora pesisir Dermayon di atas kain mori primissima berkualitas tinggi.</p>
              <div class="service-footer">
                <span class="service-meta-text">Tahap Awal</span>
                <button class="btn-circle-arrow" onclick="showToast('Tahap 1: Pembuatan pola dasar dengan goresan pensil halus.', 'info')" aria-label="Detail Tahap 1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="service-card reveal">
            <div class="service-img-box">
              <img src="https://i.pinimg.com/1200x/81/3a/90/813a9043d3306042c70ec20e578201b4.jpg" alt="Nyanting Lilin Tulis">
            </div>
            <div class="service-body">
              <h3 class="service-title">2. Nyanting Tulis Tangan</h3>
              <p class="service-desc">Menorehkan lilin malam panas menggunakan canting tembaga untuk mengunci presisi garis motif secara murni.</p>
              <div class="service-footer">
                <span class="service-meta-text">Canting Halus</span>
                <button class="btn-circle-arrow" onclick="showToast('Tahap 2: Menorehkan malam dengan ketelitian maestro.', 'info')" aria-label="Detail Tahap 2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="service-card reveal">
            <div class="service-img-box">
              <img src="https://i.pinimg.com/736x/39/2b/39/392b39f3a3af88a805254025c5c18b6b.jpg" alt="Teknik Khas Complongan">
            </div>
            <div class="service-body">
              <h3 class="service-title">3. Khas Complongan Jarum</h3>
              <p class="service-desc">Teknik khas Indramayu menusuk ribuan jarum mikro di atas kain malam untuk menciptakan efek rintik cecek magis.</p>
              <div class="service-footer">
                <span class="service-meta-text">Ikon Indramayu</span>
                <button class="btn-circle-arrow" onclick="showToast('Tahap 3: Complongan adalah warisan jarum unik khas Dermayon!', 'info')" aria-label="Detail Tahap 3">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- motif batik -->
    <section class="motif-banner-section" id="motif">
      <div class="container">
        <div class="motif-banner-grid">
          <!-- Left Column Content -->
          <div class="motif-banner-content reveal">
            <span class="section-eyebrow-pill">MOTIF IKONIK PAOMAN</span>
            <h2 class="motif-banner-heading">
              Koleksi Motif Autentik Pesisir Dermayon
            </h2>
            <p class="motif-banner-desc">
              Temukan keindahan motif bahari khas Indramayu yang sarat akan makna filosofi laut, doa kelimpahan rezeki, dan ketangguhan hidup masyarakat pesisir.
            </p>
            <a href="#galeri" class="btn-pill btn-pill-blue">
              <span>Lihat Semua Motif</span>
              <div class="btn-arrow-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          </div>

          <!-- Right Column: 3 Vertical Rounded Cards (Reference Layout!) -->
          <div class="motif-cards-row reveal">

            <?php 
              $query = $db->tampil_data('SELECT * FROM tb_galeri tbg
                                        INNER JOIN tb_motif tbm
                                        ON tbg.id_motif=tbm.id_motif
                                        LIMIT 3');
              if(!empty($query)){
                foreach($query as $data){
                  ?>

                <div class="motif-destination-card" onclick="openMotifDetail('<?= $data['nama_motif'] ?>', 'Motif Bahari Indramayu', '<?= $data['foto_motif'] ?>')">
                  <img src="<?= $data['foto_motif'] ?>" alt="<?= $data['nama_motif'] ?>" class="motif-card-bg-img">
                  <div class="motif-card-content">
                    <span class="motif-location-tag">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                      Paoman, Indramayu
                    </span>
                    <h3 class="motif-card-title"><?= $data['nama_motif'] ?></h3>
                    <div class="motif-card-bottom-row">
                      <!-- <span class="motif-duration-badge">Tulis Complongan • 40 Hari</span> -->
                      <div class="btn-circle-arrow" style="width: 32px; height: 32px;">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </div>
                    </div>
                  </div>
                </div>

                  <?php
                }
              }
            ?>

          </div>
        </div>
      </div>
    </section>

    <!--galeri -->
    <section class="gallery-section" id="galeri">
      <div class="container">
        <div class="services-header reveal">
          <span class="section-eyebrow-pill">GALERI WASATRA</span>
          <h2 class="section-main-heading">Harmoni Tradisi & Gaya Hidup Modern</h2>
          <p style="color: var(--color-text-muted); font-size: 1.05rem;">
            Klik pada setiap foto untuk melihat detail tekstur rintik jarum complongan dan aplikasi busana kontemporer.
          </p>
        </div>

        <div class="gallery-grid-modern reveal">
          <div class="gallery-modern-card" onclick="openMotifDetail('Elegansi Busana Sutra', 'Moda Kontemporer', 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80', 'Gaun modern berbahan sutra ATBM dengan corak motif Iwak Etong bernuansa Royal Blue.')">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIo8UHiV_PIaWjYAl6Lihw40hlimA7F0pcOtm_3IPfmBjDg-riEBL91xU&s=10" alt="Elegansi Busana Sutra">
            <div class="gallery-modern-overlay">
              <span class="gallery-modern-tag">Editorial Busana</span>
              <h4 class="gallery-modern-title">Elegansi Busana Sutra</h4>
            </div>
          </div>

          <div class="gallery-modern-card" onclick="openMotifDetail('Ketekunan Canting Maestro', 'Artisan Craft', 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80', 'Jemari lentik maestro pembatik melukis lilin malam dengan konsentrasi penuh di sentra Paoman.')">
            <img src="https://i.pinimg.com/736x/b4/de/f8/b4def8983ecfe86d12ca4a4d5f2be8dc.jpg" alt="Ketekunan Canting Maestro">
            <div class="gallery-modern-overlay">
              <span class="gallery-modern-tag">Artisan Craft</span>
              <h4 class="gallery-modern-title">Ketekunan Canting Maestro</h4>
            </div>
          </div>

          <div class="gallery-modern-card" onclick="openMotifDetail('Siluet Busana Pria', 'Contemporary Men', 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80', 'Kemeja batik tulis pria bergaya minimalis formal dengan potongan modern dan bahan katun primissima.')">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpwdIEZxxRZvMekEFdpmRJiSROCJAVeQsNtlG6PP_3Ufq41OzJif5b4-Y&s=10" alt="Siluet Busana Pria">
            <div class="gallery-modern-overlay">
              <span class="gallery-modern-tag">Contemporary Women</span>
              <h4 class="gallery-modern-title">Siluet Busana Wanita</h4>
            </div>
          </div>

          <div class="gallery-modern-card" onclick="openMotifDetail('Rintik Jarum Complongan', 'Detail Tekstur', 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80', 'Kerapian lubang jarum mikro complongan yang menembus serat kain dan memunculkan rintik magis.')">
            <img src="https://i.pinimg.com/736x/9f/ff/79/9fff79bc00baa77371567b9d3a36de12.jpg" alt="Rintik Jarum Complongan">
            <div class="gallery-modern-overlay">
              <span class="gallery-modern-tag">Detail Tekstur</span>
              <h4 class="gallery-modern-title">Rintik Jarum Complongan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- banner -->
    <section class="cta-section" id="cta">
      <div class="container">
        <div class="cta-banner-pill reveal">
          <div class="cta-banner-content">
            <span class="hero-tagline-capsule" style="color: #BAE6FD;">GERAKAN PELESTARIAN BUDAYA</span>
            <h2 class="cta-banner-heading">Kenali Warisan. <br>Hidupkan Budaya.</h2>
            <p class="cta-banner-desc">
              Jadilah bagian dari langkah mulia merawat keagungan batik Indramayu. Dapatkan koleksi wastra otentik dan kenakan kebanggaan nusantara ke mana pun Anda melangkah.
            </p>
            <div class="cta-btn-group">
              <a href="register.html" class="btn-pill btn-pill-white">
                <span>Daftar Sekarang</span>
                <div class="btn-arrow-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </a>
              <a href="login.html" class="btn-pill btn-pill-blue">
                <span>Masuk ke Akun</span>
                <div class="btn-arrow-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

<?php
include "komponen/footer.php";
?>

  <!-- lightbox modal -->
  <div class="modal-backdrop" id="previewModal" role="dialog" aria-modal="true">
    <div class="modal-container">
      <button class="modal-close-btn" id="modalCloseBtn" aria-label="Tutup preview modal" type="button">&times;</button>
      <div class="modal-image-wrapper">
        <img src="" alt="Pratinjau Batik Binar" id="modalImage">
      </div>
      <div class="modal-body">
        <div class="modal-tag" id="modalTag">Batik Paoman</div>
        <h3 class="modal-title" id="modalTitle">Judul Motif</h3>
        <p class="modal-description" id="modalDesc">Deskripsi detail filosofis karya batik.</p>
      </div>
    </div>
  </div>

  <!-- Search Overlay Modal -->
  <div class="search-overlay" id="searchOverlay">
    <div class="search-overlay-container">
      <div class="search-overlay-header">
        <h3>Cari Produk Batik Binar</h3>
        <button class="search-overlay-close" id="searchOverlayClose" type="button">&times;</button>
      </div>
      <div class="search-overlay-input-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" id="indexSearchInput" class="search-overlay-input" placeholder="Cari motif, busana, kain, aksesoris..." autocomplete="off">
      </div>
      <div class="search-overlay-results" id="indexSearchResults">
        <p class="search-overlay-hint">Ketik nama produk untuk mulai mencari...</p>
      </div>
    </div>
  </div>

  <script src="js/script.js"></script>
</body>
</html>