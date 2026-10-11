// /* ==========================================================================
//    BATIK BINAR - Shop (Belanja) JavaScript
//    Hanya dijalankan di halaman belanja.html
//    ========================================================================== */

// // Product data - 50 produk Batik Binar
// const SHOP_PRODUCTS = [
//   // === KAIN PANJANG (10) ===
//   { id:1, name:"Kain Iwak Etong Royal Blue", category:"kain", categoryLabel:"Kain Panjang", price:1850000, img:"https://i.pinimg.com/1200x/1d/c7/6b/1dc76be61a727fc26275e2070a43a0a5.jpg", teknik:"Tulis Complongan", bahan:"Katun Primissima", ukuran:"250 × 110 cm", desc:"Kain panjang bermotif ikan etong khas laut Jawa Utara. Melambangkan kelimpahan rezeki bahari dan rasa syukur nelayan Dermayon. Dikerjakan dengan teknik complongan selama 40 hari." },
//   { id:2, name:"Kain Kapal Kandas Klasik", category:"kain", categoryLabel:"Kain Panjang", price:2100000, img:"https://i.pinimg.com/1200x/80/62/51/8062513ccda78d5b48f1285043239676.jpg", teknik:"Tulis Halus", bahan:"Katun Primissima", ukuran:"250 × 110 cm", desc:"Menceritakan kapal dagang kuno yang bersandar di muara Cimanuk. Simbol keteguhan hati dan pantang menyerah mengarungi samudra kehidupan." },
//   { id:3, name:"Kain Merak Ngibing Premium", category:"kain", categoryLabel:"Kain Panjang", price:2750000, img:"https://i.pinimg.com/1200x/8f/84/22/8f8422814f4175cf1907a40516b1abe7.jpg", teknik:"Tulis Sutra", bahan:"Sutra ATBM", ukuran:"250 × 110 cm", desc:"Visualisasi tarian merak dengan sayap mengembang penuh keanggunan. Dibuat di atas sutra halus ATBM dengan pewarnaan alami dari daun mangga dan kayu mahoni." },
//   { id:4, name:"Kain Sawat Kembang Pesisir", category:"kain", categoryLabel:"Kain Panjang", price:1650000, img:"https://i.pinimg.com/736x/9f/ff/79/9fff79bc00baa77371567b9d3a36de12.jpg", teknik:"Tulis Complongan", bahan:"Katun Primissima", ukuran:"250 × 110 cm", desc:"Motif bunga sawat yang mekar di tepi pantai Pantura. Menggambarkan keindahan alam pesisir Indramayu dan kesuburan tanah Dermayon." },
//   { id:5, name:"Kain Mega Mendung Dermayon", category:"kain", categoryLabel:"Kain Panjang", price:1950000, img:"https://i.pinimg.com/736x/ed/1b/c9/ed1bc9abe706ba2058fcf4b51df68761.jpg", teknik:"Tulis Cap", bahan:"Katun Primissima", ukuran:"250 × 110 cm", desc:"Adaptasi motif mega mendung versi pesisir Dermayon dengan gradasi biru laut yang khas dan sentuhan rintik complongan." },
//   { id:6, name:"Kain Udang Windu Bahari", category:"kain", categoryLabel:"Kain Panjang", price:1750000, img:"https://i.pinimg.com/1200x/7b/7d/a7/7b7da76e1d305f43cf9ddda3e83f8bc3.jpg", teknik:"Tulis Halus", bahan:"Katun Prima", ukuran:"250 × 110 cm", desc:"Motif udang windu melambangkan kemakmuran nelayan tambak di pesisir Indramayu. Dikerjakan dengan ketelitian tinggi oleh empu pembatik Paoman." },
//   { id:7, name:"Kain Singa Barong Paoman", category:"kain", categoryLabel:"Kain Panjang", price:3200000, img:"https://i.pinimg.com/1200x/40/9f/af/409fafab21f085588a2c6cb3c254c245.jpg", teknik:"Tulis Halus", bahan:"Sutra ATBM", ukuran:"250 × 110 cm", desc:"Motif singa barong yang gagah melambangkan keberanian dan kekuatan. Masterpiece dari sentra Paoman dengan pewarnaan alami eksklusif." },
//   { id:8, name:"Kain Buketan Flora Laut", category:"kain", categoryLabel:"Kain Panjang", price:1550000, img:"https://i.pinimg.com/736x/b4/de/f8/b4def8983ecfe86d12ca4a4d5f2be8dc.jpg", teknik:"Tulis Cap", bahan:"Katun Prima", ukuran:"250 × 110 cm", desc:"Rangkaian bunga dan flora laut yang disusun indah. Perpaduan warna biru pesisir dan hijau daun mangrove yang menyejukkan mata." },
//   { id:9, name:"Kain Lokcan Burung Phoenix", category:"kain", categoryLabel:"Kain Panjang", price:2850000, img:"https://i.pinimg.com/1200x/95/3d/de/953ddeb8fe354ddc006ed6cfa05e3367.jpg", teknik:"Tulis Halus", bahan:"Sutra Halus", ukuran:"250 × 110 cm", desc:"Motif burung phoenix atau lokcan yang melambangkan kebangkitan dan kemakmuran. Dipengaruhi oleh budaya Tionghoa pesisir utara Jawa." },
//   { id:10, name:"Kain Ganggeng Rumput Laut", category:"kain", categoryLabel:"Kain Panjang", price:1450000, img:"https://i.pinimg.com/736x/39/2b/39/392b39f3a3af88a805254025c5c18b6b.jpg", teknik:"Cap Complongan", bahan:"Katun Prima", ukuran:"250 × 110 cm", desc:"Motif rumput laut atau ganggeng yang bergoyang di dasar laut. Melambangkan kelenturan dan ketahanan hidup masyarakat pesisir." },

//   // === SELENDANG (10) ===
//   { id:11, name:"Selendang Iwak Etong Mini", category:"selendang", categoryLabel:"Selendang", price:850000, img:"https://i.pinimg.com/1200x/1d/c7/6b/1dc76be61a727fc26275e2070a43a0a5.jpg", teknik:"Tulis Halus", bahan:"Katun Primissima", ukuran:"200 × 50 cm", desc:"Selendang elegan dengan motif iwak etong dalam ukuran compact. Cocok untuk aksen busana formal maupun casual." },
//   { id:12, name:"Selendang Merak Biru Pesisir", category:"selendang", categoryLabel:"Selendang", price:950000, img:"https://i.pinimg.com/1200x/8f/84/22/8f8422814f4175cf1907a40516b1abe7.jpg", teknik:"Tulis Complongan", bahan:"Katun Prima", ukuran:"200 × 50 cm", desc:"Selendang bermotif merak ngibing dengan dominasi warna biru pesisir. Rintik complongan halus menambah dimensi tekstur yang unik." },
//   { id:13, name:"Selendang Sawat Kembang", category:"selendang", categoryLabel:"Selendang", price:750000, img:"https://i.pinimg.com/736x/9f/ff/79/9fff79bc00baa77371567b9d3a36de12.jpg", teknik:"Cap Halus", bahan:"Katun Prima", ukuran:"200 × 50 cm", desc:"Selendang ringan dengan motif sawat kembang yang feminin. Pewarnaan natural menghasilkan gradasi biru yang lembut." },
//   { id:14, name:"Selendang Sutra Kapal Kandas", category:"selendang", categoryLabel:"Selendang", price:1350000, img:"https://i.pinimg.com/1200x/80/62/51/8062513ccda78d5b48f1285043239676.jpg", teknik:"Tulis Halus", bahan:"Sutra ATBM", ukuran:"200 × 50 cm", desc:"Selendang sutra mewah dengan motif kapal kandas. Bahan sutra ATBM memberikan kilau alami yang anggun." },
//   { id:15, name:"Selendang Mega Mendung Scarf", category:"selendang", categoryLabel:"Selendang", price:680000, img:"https://i.pinimg.com/736x/ed/1b/c9/ed1bc9abe706ba2058fcf4b51df68761.jpg", teknik:"Cap", bahan:"Katun Voile", ukuran:"180 × 45 cm", desc:"Scarf batik ringan dengan motif mega mendung versi Dermayon. Material voile yang breathable untuk gaya sehari-hari." },
//   { id:16, name:"Selendang Buketan Pastel", category:"selendang", categoryLabel:"Selendang", price:720000, img:"https://i.pinimg.com/1200x/7b/7d/a7/7b7da76e1d305f43cf9ddda3e83f8bc3.jpg", teknik:"Cap Halus", bahan:"Katun Prima", ukuran:"200 × 50 cm", desc:"Selendang dengan motif buketan bunga dalam palet warna pastel biru. Cocok untuk hijab atau aksesori busana modern." },
//   { id:17, name:"Selendang Udang Windu", category:"selendang", categoryLabel:"Selendang", price:800000, img:"https://i.pinimg.com/1200x/40/9f/af/409fafab21f085588a2c6cb3c254c245.jpg", teknik:"Tulis Cap", bahan:"Katun Prima", ukuran:"200 × 50 cm", desc:"Selendang bermotif udang windu dengan detail halus. Teknik tulis cap menghasilkan garis yang tegas namun tetap artistik." },
//   { id:18, name:"Selendang Lokcan Elegan", category:"selendang", categoryLabel:"Selendang", price:1200000, img:"https://i.pinimg.com/1200x/95/3d/de/953ddeb8fe354ddc006ed6cfa05e3367.jpg", teknik:"Tulis Halus", bahan:"Sutra Halus", ukuran:"200 × 50 cm", desc:"Selendang sutra dengan motif lokcan burung phoenix. Keanggunan motif Tionghoa-Jawa yang menyatu harmonis." },
//   { id:19, name:"Selendang Ganggeng Hijau Laut", category:"selendang", categoryLabel:"Selendang", price:650000, img:"https://i.pinimg.com/736x/39/2b/39/392b39f3a3af88a805254025c5c18b6b.jpg", teknik:"Cap", bahan:"Katun Voile", ukuran:"180 × 45 cm", desc:"Selendang ringan dengan motif ganggeng rumput laut. Perpaduan warna hijau laut dan biru yang menenangkan." },
//   { id:20, name:"Selendang Singa Barong Mini", category:"selendang", categoryLabel:"Selendang", price:1100000, img:"https://i.pinimg.com/736x/b4/de/f8/b4def8983ecfe86d12ca4a4d5f2be8dc.jpg", teknik:"Tulis Halus", bahan:"Katun Primissima", ukuran:"200 × 50 cm", desc:"Selendang premium dengan motif singa barong dalam ukuran mini. Simbol keberanian yang cocok untuk acara formal." },

//   // === BUSANA PRIA (10) ===
//   { id:21, name:"Kemeja Slim Iwak Etong", category:"pria", categoryLabel:"Busana Pria", price:1250000, img:"https://i.pinimg.com/1200x/1d/c7/6b/1dc76be61a727fc26275e2070a43a0a5.jpg", teknik:"Tulis Cap", bahan:"Katun Primissima", ukuran:"S / M / L / XL", desc:"Kemeja slim fit dengan motif iwak etong untuk pria modern. Potongan ergonomis dengan jahitan presisi untuk kenyamanan sepanjang hari." },
//   { id:22, name:"Kemeja Formal Kapal Kandas", category:"pria", categoryLabel:"Busana Pria", price:1450000, img:"https://i.pinimg.com/1200x/80/62/51/8062513ccda78d5b48f1285043239676.jpg", teknik:"Tulis Halus", bahan:"Katun Primissima", ukuran:"S / M / L / XL / XXL", desc:"Kemeja formal dengan motif kapal kandas klasik. Desain minimalis modern yang cocok untuk acara kantor dan pesta." },
//   { id:23, name:"Kemeja Lengan Pendek Merak", category:"pria", categoryLabel:"Busana Pria", price:980000, img:"https://i.pinimg.com/1200x/8f/84/22/8f8422814f4175cf1907a40516b1abe7.jpg", teknik:"Cap", bahan:"Katun Prima", ukuran:"S / M / L / XL", desc:"Kemeja lengan pendek casual dengan motif merak ngibing. Cocok untuk acara santai dan semi-formal." },
//   { id:24, name:"Kemeja Batik Mega Mendung", category:"pria", categoryLabel:"Busana Pria", price:1150000, img:"https://i.pinimg.com/736x/ed/1b/c9/ed1bc9abe706ba2058fcf4b51df68761.jpg", teknik:"Tulis Cap", bahan:"Katun Primissima", ukuran:"S / M / L / XL", desc:"Kemeja batik elegan dengan motif mega mendung Dermayon. Gradasi biru yang memikat untuk tampilan profesional." },
//   { id:25, name:"Kemeja Premium Singa Barong", category:"pria", categoryLabel:"Busana Pria", price:1850000, img:"https://i.pinimg.com/1200x/40/9f/af/409fafab21f085588a2c6cb3c254c245.jpg", teknik:"Tulis Halus", bahan:"Sutra ATBM", ukuran:"S / M / L / XL", desc:"Kemeja sutra premium dengan motif singa barong Paoman. Masterpiece yang cocok untuk acara istimewa dan pesta mewah." },
//   { id:26, name:"Kemeja Kasual Buketan", category:"pria", categoryLabel:"Busana Pria", price:880000, img:"https://i.pinimg.com/736x/b4/de/f8/b4def8983ecfe86d12ca4a4d5f2be8dc.jpg", teknik:"Cap", bahan:"Katun Prima", ukuran:"S / M / L / XL", desc:"Kemeja kasual dengan motif buketan flora. Desain relaxed fit yang nyaman untuk kegiatan sehari-hari." },
//   { id:27, name:"Kemeja Batik Lokcan Pria", category:"pria", categoryLabel:"Busana Pria", price:1550000, img:"https://i.pinimg.com/1200x/95/3d/de/953ddeb8fe354ddc006ed6cfa05e3367.jpg", teknik:"Tulis Halus", bahan:"Katun Primissima", ukuran:"S / M / L / XL / XXL", desc:"Kemeja formal dengan motif lokcan burung phoenix. Keanggunan budaya Tionghoa-Jawa dalam balutan modern." },
//   { id:28, name:"Kemeja Sawat Kembang Pria", category:"pria", categoryLabel:"Busana Pria", price:950000, img:"https://i.pinimg.com/736x/9f/ff/79/9fff79bc00baa77371567b9d3a36de12.jpg", teknik:"Cap Halus", bahan:"Katun Prima", ukuran:"S / M / L / XL", desc:"Kemeja batik dengan motif sawat kembang yang maskulin. Sentuhan bunga pesisir dalam gaya yang bold dan modern." },
//   { id:29, name:"Kemeja Ganggeng Slim Fit", category:"pria", categoryLabel:"Busana Pria", price:920000, img:"https://i.pinimg.com/736x/39/2b/39/392b39f3a3af88a805254025c5c18b6b.jpg", teknik:"Cap", bahan:"Katun Prima", ukuran:"S / M / L / XL", desc:"Kemeja slim fit dengan motif ganggeng rumput laut. Nuansa laut yang kalem untuk gaya sehari-hari." },
//   { id:30, name:"Kemeja Udang Windu Executive", category:"pria", categoryLabel:"Busana Pria", price:1350000, img:"https://i.pinimg.com/1200x/7b/7d/a7/7b7da76e1d305f43cf9ddda3e83f8bc3.jpg", teknik:"Tulis Cap", bahan:"Katun Primissima", ukuran:"S / M / L / XL / XXL", desc:"Kemeja executive dengan motif udang windu. Potongan regular fit yang nyaman untuk eksekutif modern." },

//   // === BUSANA WANITA (10) ===
//   { id:31, name:"Dress Merak Ngibing Elegan", category:"wanita", categoryLabel:"Busana Wanita", price:2250000, img:"https://i.pinimg.com/1200x/8f/84/22/8f8422814f4175cf1907a40516b1abe7.jpg", teknik:"Tulis Halus", bahan:"Sutra ATBM", ukuran:"S / M / L / XL", desc:"Dress elegan dengan motif merak ngibing di atas sutra ATBM. Siluet A-line yang anggun untuk acara gala dan pesta." },
//   { id:32, name:"Blouse Iwak Etong Modern", category:"wanita", categoryLabel:"Busana Wanita", price:1150000, img:"https://i.pinimg.com/1200x/1d/c7/6b/1dc76be61a727fc26275e2070a43a0a5.jpg", teknik:"Tulis Cap", bahan:"Katun Primissima", ukuran:"S / M / L / XL", desc:"Blouse modern dengan motif iwak etong. Potongan peplum yang feminin dengan detail ruffles di pergelangan tangan." },
//   { id:33, name:"Tunik Mega Mendung Dermayon", category:"wanita", categoryLabel:"Busana Wanita", price:1350000, img:"https://i.pinimg.com/736x/ed/1b/c9/ed1bc9abe706ba2058fcf4b51df68761.jpg", teknik:"Tulis Cap", bahan:"Katun Primissima", ukuran:"S / M / L / XL / XXL", desc:"Tunik longgar bermotif mega mendung Dermayon. Cocok dipadupadankan dengan celana atau rok untuk gaya modest." },
//   { id:34, name:"Rok Batik Kapal Kandas", category:"wanita", categoryLabel:"Busana Wanita", price:980000, img:"https://i.pinimg.com/1200x/80/62/51/8062513ccda78d5b48f1285043239676.jpg", teknik:"Cap Halus", bahan:"Katun Prima", ukuran:"S / M / L / XL", desc:"Rok A-line dengan motif kapal kandas. Potongan midi yang versatile untuk tampilan kasual hingga semi-formal." },
//   { id:35, name:"Dress Cocktail Sawat Kembang", category:"wanita", categoryLabel:"Busana Wanita", price:1850000, img:"https://i.pinimg.com/736x/9f/ff/79/9fff79bc00baa77371567b9d3a36de12.jpg", teknik:"Tulis Halus", bahan:"Katun Primissima", ukuran:"S / M / L", desc:"Dress cocktail dengan motif sawat kembang. Desain off-shoulder yang menawan untuk pesta malam." },
//   { id:36, name:"Blouse Buketan Flora Wanita", category:"wanita", categoryLabel:"Busana Wanita", price:920000, img:"https://i.pinimg.com/736x/b4/de/f8/b4def8983ecfe86d12ca4a4d5f2be8dc.jpg", teknik:"Cap", bahan:"Katun Prima", ukuran:"S / M / L / XL", desc:"Blouse casual dengan motif buketan flora pesisir. Potongan relaxed yang nyaman untuk kegiatan sehari-hari." },
//   { id:37, name:"Outer Batik Lokcan Wanita", category:"wanita", categoryLabel:"Busana Wanita", price:1650000, img:"https://i.pinimg.com/1200x/95/3d/de/953ddeb8fe354ddc006ed6cfa05e3367.jpg", teknik:"Tulis Halus", bahan:"Katun Primissima", ukuran:"S / M / L / XL", desc:"Outer atau cardigan batik dengan motif lokcan. Layering piece yang sempurna untuk gaya berlapis modern." },
//   { id:38, name:"Kaftan Singa Barong Premium", category:"wanita", categoryLabel:"Busana Wanita", price:2450000, img:"https://i.pinimg.com/1200x/40/9f/af/409fafab21f085588a2c6cb3c254c245.jpg", teknik:"Tulis Halus", bahan:"Sutra ATBM", ukuran:"Free Size", desc:"Kaftan sutra premium dengan motif singa barong. Busana mewah untuk acara istimewa dengan draping yang mengalir indah." },
//   { id:39, name:"Cullote Ganggeng Kasual", category:"wanita", categoryLabel:"Busana Wanita", price:780000, img:"https://i.pinimg.com/736x/39/2b/39/392b39f3a3af88a805254025c5c18b6b.jpg", teknik:"Cap", bahan:"Katun Prima", ukuran:"S / M / L / XL", desc:"Cullote atau celana kulot bermotif ganggeng rumput laut. Nyaman dan stylish untuk tampilan sehari-hari." },
//   { id:40, name:"Kebaya Modern Udang Windu", category:"wanita", categoryLabel:"Busana Wanita", price:1750000, img:"https://i.pinimg.com/1200x/7b/7d/a7/7b7da76e1d305f43cf9ddda3e83f8bc3.jpg", teknik:"Tulis Cap", bahan:"Katun Primissima", ukuran:"S / M / L / XL", desc:"Kebaya modern dengan sentuhan motif udang windu. Perpaduan tradisi dan modernitas untuk acara adat dan resmi." },

//   // === AKSESORIS (10) ===
//   { id:41, name:"Tote Bag Batik Iwak Etong", category:"aksesoris", categoryLabel:"Aksesoris", price:450000, img:"https://i.pinimg.com/1200x/1d/c7/6b/1dc76be61a727fc26275e2070a43a0a5.jpg", teknik:"Cap", bahan:"Katun Canvas + Batik", ukuran:"40 × 35 × 10 cm", desc:"Tote bag premium dengan panel batik motif iwak etong. Tas serbaguna dengan lapisan dalam kanvas tebal." },
//   { id:42, name:"Clutch Batik Merak Ngibing", category:"aksesoris", categoryLabel:"Aksesoris", price:380000, img:"https://i.pinimg.com/1200x/8f/84/22/8f8422814f4175cf1907a40516b1abe7.jpg", teknik:"Tulis", bahan:"Batik + Kulit Sintetis", ukuran:"28 × 16 cm", desc:"Clutch elegan dengan panel batik motif merak ngibing. Dilengkapi strap rantai gold untuk tampilan mewah." },
//   { id:43, name:"Masker Batik Premium Set", category:"aksesoris", categoryLabel:"Aksesoris", price:180000, img:"https://i.pinimg.com/736x/9f/ff/79/9fff79bc00baa77371567b9d3a36de12.jpg", teknik:"Cap", bahan:"Katun Prima 3-Ply", ukuran:"Free Size (set 3)", desc:"Set 3 masker batik premium dengan motif berbeda. Bahan katun 3-ply yang breathable dan bisa dicuci ulang." },
//   { id:44, name:"Dompet Batik Kapal Kandas", category:"aksesoris", categoryLabel:"Aksesoris", price:320000, img:"https://i.pinimg.com/1200x/80/62/51/8062513ccda78d5b48f1285043239676.jpg", teknik:"Cap", bahan:"Batik + Kulit Sintetis", ukuran:"20 × 10 cm", desc:"Dompet panjang dengan panel batik motif kapal kandas. Banyak sekat untuk kartu dan uang kertas." },
//   { id:45, name:"Kipas Batik Tulis Mewah", category:"aksesoris", categoryLabel:"Aksesoris", price:250000, img:"https://i.pinimg.com/1200x/7b/7d/a7/7b7da76e1d305f43cf9ddda3e83f8bc3.jpg", teknik:"Tulis", bahan:"Kain Batik + Bambu", ukuran:"23 cm (buka)", desc:"Kipas lipat mewah dengan kain batik tulis motif pesisir. Rangka bambu yang ringan dan kokoh." },
//   { id:46, name:"Ikat Kepala Batik Unisex", category:"aksesoris", categoryLabel:"Aksesoris", price:150000, img:"https://i.pinimg.com/736x/ed/1b/c9/ed1bc9abe706ba2058fcf4b51df68761.jpg", teknik:"Cap", bahan:"Katun Prima", ukuran:"Free Size", desc:"Ikat kepala atau bandana batik unisex dengan motif mega mendung. Aksesori stylish untuk gaya streetwear." },
//   { id:47, name:"Syal Batik Buketan Lebar", category:"aksesoris", categoryLabel:"Aksesoris", price:550000, img:"https://i.pinimg.com/736x/b4/de/f8/b4def8983ecfe86d12ca4a4d5f2be8dc.jpg", teknik:"Cap Halus", bahan:"Katun Voile", ukuran:"180 × 70 cm", desc:"Syal lebar bermotif buketan flora pesisir. Material voile ringan yang cocok untuk traveling dan outdoor." },
//   { id:48, name:"Pouch Batik Serbaguna", category:"aksesoris", categoryLabel:"Aksesoris", price:220000, img:"https://i.pinimg.com/1200x/95/3d/de/953ddeb8fe354ddc006ed6cfa05e3367.jpg", teknik:"Cap", bahan:"Batik + Canvas", ukuran:"25 × 15 cm", desc:"Pouch serbaguna dengan panel batik motif lokcan. Cocok untuk menyimpan kosmetik, gadget, atau alat tulis." },
//   { id:49, name:"Gantungan Kunci Batik Set", category:"aksesoris", categoryLabel:"Aksesoris", price:95000, img:"https://i.pinimg.com/736x/39/2b/39/392b39f3a3af88a805254025c5c18b6b.jpg", teknik:"Cap", bahan:"Kain Batik + Metal", ukuran:"8 × 4 cm (set 3)", desc:"Set 3 gantungan kunci dengan potongan kain batik berbeda motif. Souvenir khas Indramayu yang unik." },
//   { id:50, name:"Bantal Sofa Batik Complongan", category:"aksesoris", categoryLabel:"Aksesoris", price:350000, img:"https://i.pinimg.com/1200x/40/9f/af/409fafab21f085588a2c6cb3c254c245.jpg", teknik:"Cap Complongan", bahan:"Katun + Isi Dakron", ukuran:"45 × 45 cm", desc:"Bantal sofa dekoratif dengan sarung batik motif complonan. Menambah sentuhan budaya pada interior rumah Anda." }
// ];

// function initShopPage() {
//   const shopGrid = document.getElementById('shopGrid');
//   if (!shopGrid) return; // Not on shop page

//   const searchInput = document.getElementById('shopSearchInput');
//   const searchCount = document.getElementById('shopSearchCount');
//   const filterPills = document.getElementById('shopFilterPills');
//   const shopEmpty = document.getElementById('shopEmpty');

//   let currentFilter = 'semua';
//   let currentSearch = '';

//   // Render products
//   function renderProducts() {
//     let filtered = SHOP_PRODUCTS.filter(p => {
//       const matchFilter = currentFilter === 'semua' || p.category === currentFilter;
//       const matchSearch = currentSearch === '' ||
//         p.name.toLowerCase().includes(currentSearch) ||
//         p.categoryLabel.toLowerCase().includes(currentSearch) ||
//         p.teknik.toLowerCase().includes(currentSearch) ||
//         p.bahan.toLowerCase().includes(currentSearch) ||
//         p.desc.toLowerCase().includes(currentSearch);
//       return matchFilter && matchSearch;
//     });

//     if (searchCount) searchCount.textContent = `${filtered.length} produk`;

//     if (filtered.length === 0) {
//       shopGrid.style.display = 'none';
//       if (shopEmpty) shopEmpty.style.display = 'block';
//       return;
//     }

//     shopGrid.style.display = 'grid';
//     if (shopEmpty) shopEmpty.style.display = 'none';

//     shopGrid.innerHTML = filtered.map(p => `
//       <div class="shop-product-card" onclick="openShopDetail(${p.id})">
//         <div class="shop-product-img">
//           <img src="${p.img}" alt="${p.name}" loading="lazy">
//           <span class="shop-product-badge">${p.categoryLabel}</span>
//         </div>
//         <div class="shop-product-body">
//           <div class="shop-product-category">${p.categoryLabel}</div>
//           <h3 class="shop-product-name">${p.name}</h3>
//           <div class="shop-product-price">
//             <span class="price-currency">Rp</span> ${p.price.toLocaleString('id-ID')}
//           </div>
//           <div class="shop-product-footer">
//             <span class="shop-product-teknik">${p.teknik}</span>
//             <button class="shop-product-detail-btn" aria-label="Lihat Detail">
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
//                 <line x1="5" y1="12" x2="19" y2="12"></line>
//                 <polyline points="12 5 19 12 12 19"></polyline>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     `).join('');
//   }

//   // Search
//   if (searchInput) {
//     searchInput.addEventListener('input', () => {
//       currentSearch = searchInput.value.trim().toLowerCase();
//       renderProducts();
//     });
//   }

//   // Filter
//   if (filterPills) {
//     filterPills.addEventListener('click', (e) => {
//       const btn = e.target.closest('.shop-filter-btn');
//       if (!btn) return;
//       filterPills.querySelectorAll('.shop-filter-btn').forEach(b => b.classList.remove('active'));
//       btn.classList.add('active');
//       currentFilter = btn.getAttribute('data-filter');
//       renderProducts();
//     });
//   }

//   // Initial render
//   renderProducts();

//   // Modal
//   const modal = document.getElementById('shopModal');
//   const closeBtn = document.getElementById('shopModalClose');

//   if (modal && closeBtn) {
//     closeBtn.addEventListener('click', () => {
//       modal.classList.remove('active');
//       document.body.style.overflow = '';
//     });
//     modal.addEventListener('click', (e) => {
//       if (e.target === modal) {
//         modal.classList.remove('active');
//         document.body.style.overflow = '';
//       }
//     });
//     document.addEventListener('keydown', (e) => {
//       if (e.key === 'Escape' && modal.classList.contains('active')) {
//         modal.classList.remove('active');
//         document.body.style.overflow = '';
//       }
//     });
//   }
// }

// // Global function to open shop detail modal
// window.openShopDetail = function(productId) {
//   const product = SHOP_PRODUCTS.find(p => p.id === productId);
//   if (!product) return;

//   const modal = document.getElementById('shopModal');
//   if (!modal) return;

//   const img = document.getElementById('shopModalImg');
//   const category = document.getElementById('shopModalCategory');
//   const title = document.getElementById('shopModalTitle');
//   const price = document.getElementById('shopModalPrice');
//   const desc = document.getElementById('shopModalDesc');
//   const bahan = document.getElementById('shopModalBahan');
//   const teknik = document.getElementById('shopModalTeknik');
//   const ukuran = document.getElementById('shopModalUkuran');
//   const waBtn = document.getElementById('shopModalWA');

//   if (img) img.src = product.img;
//   if (category) category.textContent = product.categoryLabel;
//   if (title) title.textContent = product.name;
//   if (price) price.textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
//   if (desc) desc.textContent = product.desc;
//   if (bahan) bahan.textContent = product.bahan;
//   if (teknik) teknik.textContent = product.teknik;
//   if (ukuran) ukuran.textContent = product.ukuran;

//   if (waBtn) {
//     const waText = encodeURIComponent(`Halo Batik Binar! Saya tertarik dengan produk:\n\n📦 ${product.name}\n💰 Rp ${product.price.toLocaleString('id-ID')}\n📏 Ukuran: ${product.ukuran}\n\nMohon informasi ketersediaan dan cara pemesanannya. Terima kasih!`);
//     waBtn.href = `https://wa.me/6282123456789?text=${waText}`;
//   }

//   modal.classList.add('active');
//   document.body.style.overflow = 'hidden';
// };