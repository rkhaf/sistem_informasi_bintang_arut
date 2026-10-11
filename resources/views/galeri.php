<?php
include "komponen/navbar.php";
// include "komponen/koneksi.php";
include "komponen/database.php";
$db = new database();
include "komponen/fungsi.php";
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galeri Visual | BATIK BINAR</title>
  <meta name="description" content="Galeri visual Batik Binar. Jelajahi koleksi motif batik, proses pembuatan, detail tekstur, busana modern, dan sentra Paoman Indramayu.">
  <!-- <link rel="stylesheet" href="css/style.css">
  <link rel="icon" type="image/png" href="assets/logo-batik-binar.png"> -->
</head>
<body>

  <!-- Mobile Menu Backdrop -->
  <div class="mobile-backdrop" id="mobileBackdrop"></div>

  <main>
    <!-- Gallery Hero Banner -->
    <section class="gallery-hero">
      <div class="container">
        <h1 class="gallery-hero-title">Galeri Visual Batik Binar</h1>
        <p class="gallery-hero-desc">
          Jelajahi koleksi visual — dari goresan canting maestro, teknik complongan legendaris, hingga aplikasi busana modern khas warisan pesisir Indramayu.
        </p>
        <!-- Search Bar -->
        <div class="gallery-search-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" id="galeriSearchInput" class="gallery-search-input" placeholder="Cari motif, proses, busana, tekstur..." autocomplete="off">
          <span class="gallery-search-count" id="galeriSearchCount">30 koleksi</span>
        </div>
      </div>
    </section>

    <!-- Marquee / Walking Animation -->
    <div class="gallery-marquee-strip">
      <div class="gallery-marquee-track">
        <?php
          $ambilMotif = $db->tampil_data('SELECT * FROM tb_motif');
            if(!empty($ambilMotif)){
              foreach($ambilMotif as $data){
              ?>
                <span class="marquee-item"><?= $data['nama_motif'] ?></span>
              <?php

              }
            }
        ?>
        <!-- <span class="marquee-item">Iwak Etong</span>
        <span class="marquee-item">Kapal Kandas</span>
        <span class="marquee-item">Merak Ngibing</span>
        <span class="marquee-item">Sawat Kembang</span>
        <span class="marquee-item">Mega Mendung</span>
        <span class="marquee-item">Udang Windu</span>
        <span class="marquee-item">Singa Barong</span>
        <span class="marquee-item">Buketan Flora</span>
        <span class="marquee-item">Lokcan Phoenix</span>
        <span class="marquee-item">Ganggeng Laut</span> -->
        <!-- Duplicate for seamless loop -->
        <!-- <span class="marquee-item">Iwak Etong</span>
        <span class="marquee-item">Kapal Kandas</span>
        <span class="marquee-item">Merak Ngibing</span>
        <span class="marquee-item">Sawat Kembang</span>
        <span class="marquee-item">Mega Mendung</span>
        <span class="marquee-item">Udang Windu</span>
        <span class="marquee-item">Singa Barong</span>
        <span class="marquee-item">Buketan Flora</span>
        <span class="marquee-item">Lokcan Phoenix</span>
        <span class="marquee-item">Ganggeng Laut</span> -->
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="gallery-filter-bar">
      <button class="gallery-filter-btn active" data-filter="semua">Semua</button>
      <button class="gallery-filter-btn" data-filter="motif">Motif Batik</button>
      <button class="gallery-filter-btn" data-filter="proses">Proses Pembuatan</button>
      <button class="gallery-filter-btn" data-filter="detail">Detail Tekstur</button>
      <button class="gallery-filter-btn" data-filter="busana">Busana Modern</button>
      <button class="gallery-filter-btn" data-filter="sentra">Sentra Paoman</button>
    </div>

    <!-- Gallery Grid -->
    <section class="gallery-page-section">
      <div class="container">
        <!-- ==========================================================================
             PANDUAN MENGGANTI FOTO GALERI:
             - Cukup ganti URL pada atribut: src="..." pada tag <img> di setiap kartu.
             - Anda juga bisa mengubah judul pada <h4>, tag pada <span>, serta data-desc="...".
             - Setiap foto di bawah sudah menggunakan gambar berbeda sesuai kategorinya.
             ========================================================================== -->
        <div id="galeriGrid" class="gallery-page-grid">

          <!-- ==================== KATEGORI: MOTIF BATIK (motif) ==================== -->
          
          <?php
          $query = $db->tampil_data('SELECT * FROM tb_galeri tbg
                                    INNER JOIN tb_motif tbm INNER JOIN tb_tag_galeri tbt
                                    ON tbg.id_motif=tbm.id_motif
                                    AND tbt.id_tag=tbg.id_tag');
          if(!empty($query)){
            foreach($query as $data){
            ?>
            
              <div class="gallery-page-card" data-category="motif" data-title="Motif Iwak Etong" data-tag="Motif Batik" data-desc="Motif ikan etong khas pesisir laut Jawa Utara, melambangkan kelimpahan rezeki bahari dan rasa syukur nelayan Dermayon.">
                <img src="<?= $data['foto_motif'] ?>" alt="<?= $data['nama_motif'] ?>" loading="lazy">
                <div class="gallery-page-overlay">
                  <span class="gallery-page-tag"><?= $data['tag_label'] ?></span>
                  <h4 class="gallery-page-title"><?= $data['nama_motif'] ?></h4>
                </div>
              </div>

            <?php
            }
          }
          ?>

        </div>
        <!-- Empty State -->
        <div class="gallery-empty" id="galeriEmpty" style="display: none;">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3>Tidak Ditemukan</h3>
          <p>Coba kata kunci lain atau reset filter pencarian Anda.</p>
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

  <script src="js/script-core.js"></script>
  <script src="js/script-galeri.js"></script>
</body>
</html>
