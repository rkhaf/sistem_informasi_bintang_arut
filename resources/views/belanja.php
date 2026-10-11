<?php

include "komponen/navbar.php";
// include "komponen/koneksi.php";
include "komponen/database.php";
$db = new database();
include "komponen/fungsi.php";
$daftarJenis = $db->tampil_data('SELECT * FROM tb_jenis_produk');
$kategori_aktif = $_GET['kategori'] ?? 'semua';
$search_keyword = trim($_GET['q'] ?? '');

// 2. Query dasar (JOIN tabel)
$base_query = "SELECT * FROM tb_etalase tbe INNER JOIN tb_jenis_produk tbjp ON tbe.id_jenis = tbjp.id_jenis";
$conditions = [];

// 3. Cek Filter Kategori
if ($kategori_aktif !== 'semua') {
    $id_jenis = (int) $kategori_aktif;
    $conditions[] = "tbe.id_jenis = $id_jenis";
}

// 4. Cek Pencarian Searchbar (Cari di judul produk / deskripsi)
if ($search_keyword !== '') {
    // Escape string sederhana agar query aman dari karakter aneh
    $keyword_safe = addslashes($search_keyword);
    $conditions[] = "(tbe.nama_produk LIKE '%$keyword_safe%' OR tbe.deskripsi LIKE '%$keyword_safe%')";
}

// 5. Rakit Query Akhir pakai klausa WHERE & AND
if (count($conditions) > 0) {
    $sql = $base_query . " WHERE " . implode(' AND ', $conditions);
} else {
    $sql = $base_query;
}

// 6. Eksekusi query
$query = $db->tampil_data($sql);
$totalProduk = count($query);
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Belanja Batik | BATIK BINAR</title>
  <meta name="description" content="Belanja koleksi batik khas Indramayu di Batik Binar. Kain panjang, selendang, busana pria & wanita, dan aksesoris batik pesisir Dermayon.">
  <link rel="stylesheet" href="style.css">
  <link rel="icon" type="image/png" href="assets/logo-batik-binar.png">
</head>
<body>
  <!-- Mobile Menu Backdrop -->
  <div class="mobile-backdrop" id="mobileBackdrop"></div>

  <main>
    <!-- Shop Hero Banner -->
    <section class="shop-hero">
      <div class="container">
        <h1 class="shop-hero-title">Belanja Koleksi Batik Binar</h1>
        <p class="shop-hero-desc">
          Temukan mahakarya wastra pesisir Dermayon — mulai dari kain panjang klasik, selendang elegan, busana modern pria & wanita, hingga aksesoris unik bertema batik Indramayu.
        </p>
      </div>
    </section>

    <!-- Shop Toolbar: Search & Filter -->
    <section class="shop-toolbar">
      <div class="container">
        <div class="shop-toolbar-inner">
          <!-- Search Box -->

          <!-- <div class="shop-search-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="shopSearchInput" class="shop-search-input" placeholder="Cari produk batik (mis. Iwak Etong, sutra, kemeja)...">
            <span id="shopSearchCount" class="shop-search-count"><?= $totalProduk ?> Produk</span>
          </div> -->
          <form method="GET" action="" class="shop-search-box">
            <?php if ($kategori_aktif !== 'semua'): ?>
                <input type="hidden" name="kategori" value="<?= htmlspecialchars($kategori_aktif) ?>">
            <?php endif; ?>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input name="q" value="<?= htmlspecialchars($search_keyword) ?>" type="text" id="shopSearchInput" class="shop-search-input" placeholder="Cari produk batik (mis. Iwak Etong, sutra, kemeja)...">
            <span id="shopSearchCount" class="shop-search-count"><?= $totalProduk ?> Produk</span>
            <button type="submit">Cari</button>
          </form>

          <!-- Filter Pills -->
          <?php $q_param = $search_keyword !== '' ? '&q=' . urlencode($search_keyword) : ''; ?>
          <div id="shopFilterPills" class="shop-filter-pills">
            <a href="?kategori=semua" class="shop-filter-btn <?= ($kategori_aktif === 'semua') ? 'active' : '' ?>" data-filter="semua">Semua Produk</a>
            <?php
            if(!empty($daftarJenis)){
              foreach($daftarJenis as $data){
            ?>
              <a href="?kategori=<?= $data['id_jenis'] ?><?= $q_param ?>" class="shop-filter-btn <?= ($kategori_aktif === $data['id_jenis']) ? 'active' : '' ?>" data-filter="kain"><?= $data['label_display'] ?></a>
              <?php
              }
            }
            ?>
            <!-- <button class="shop-filter-btn" data-filter="kain">Kain Panjang</button>
            <button class="shop-filter-btn" data-filter="selendang">Selendang</button>
            <button class="shop-filter-btn" data-filter="pria">Busana Pria</button>
            <button class="shop-filter-btn" data-filter="wanita">Busana Wanita</button>
            <button class="shop-filter-btn" data-filter="aksesoris">Aksesoris</button> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Product Grid -->
    <section class="shop-grid-section">
      <div class="container">
        <div id="shopGrid" class="shop-grid">
          <!-- Products rendered dynamically by script.js -->
          
          <?php
            // $query = $db->tampil_data('SELECT * FROM tb_etalase tbe
            //                           INNER JOIN tb_jenis_produk tbjp
            //                           ON tbe.id_jenis=tbjp.id_jenis');

            if(!empty($query)){
              foreach($query as $data){
                // dd($data);
                ?>

              <div class="shop-product-card" onclick="openShopDetail($data['id_barang'])">
              <!-- <div class="shop-product-card" onclick="openShopDetail(${p.id})"> -->
                <div class="shop-product-img">
                  <img src="<?= $data['foto_produk'] ?>" alt="${p.name}" loading="lazy">
                  <span class="shop-product-badge"><?= $data['label_display'] ?></span>
                </div>
                <div class="shop-product-body">
                  <div class="shop-product-category"><?= $data['label_display'] ?></div>
                  <h3 class="shop-product-name"><?= $data['nama_produk'] ?></h3>
                  <div class="shop-product-price">
                    <span class="price-currency">Rp</span><?= numKeRupiah($data['harga']) ?>
                  </div>
                  <div class="shop-product-footer">
                    <span class="shop-product-teknik"><?= $data['teknik'] ?></span>
                    <button class="shop-product-detail-btn" aria-label="Lihat Detail">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

                <?php
              }
            }
          ?>

        <!-- Empty State -->
        <div id="shopEmpty" class="shop-empty" style="display: none;">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <h3>Produk Tidak Ditemukan</h3>
          <p>Coba gunakan kata kunci atau filter kategori yang berbeda.</p>
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
  <script src="js/script-belanja.js"></script>
</body>
</html>
