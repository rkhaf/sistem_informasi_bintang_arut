// /* ==========================================================================
//    BATIK BINAR - Gallery JavaScript
//    Hanya dijalankan di halaman galeri.html
//    ========================================================================== */

// // Gallery data - 50+ item koleksi visual
// const GALLERY_DATA = [
//   { title:"Motif Iwak Etong", category:"motif", tag:"Motif Batik", img:"https://i.pinimg.com/1200x/1d/c7/6b/1dc76be61a727fc26275e2070a43a0a5.jpg", desc:"Motif ikan etong khas laut Jawa Utara, melambangkan kelimpahan rezeki bahari dan rasa syukur nelayan Dermayon." },
//   { title:"Motif Kapal Kandas", category:"motif", tag:"Motif Batik", img:"https://i.pinimg.com/1200x/80/62/51/8062513ccda78d5b48f1285043239676.jpg", desc:"Kapal dagang kuno bersandar di muara Cimanuk, simbol keteguhan hati mengarungi samudra." },
//   { title:"Motif Merak Ngibing", category:"motif", tag:"Motif Batik", img:"https://i.pinimg.com/1200x/8f/84/22/8f8422814f4175cf1907a40516b1abe7.jpg", desc:"Tarian merak dengan sayap mengembang, memancarkan keanggunan dan sukacita." },
//   { title:"Rintik Complongan", category:"detail", tag:"Detail Tekstur", img:"https://i.pinimg.com/736x/9f/ff/79/9fff79bc00baa77371567b9d3a36de12.jpg", desc:"Kerapian lubang jarum mikro complongan yang menembus serat kain dan memunculkan rintik magis." },
//   { title:"Motif Canting Tulis", category:"motif", tag:"Motif Batik", img:"https://i.pinimg.com/736x/ed/1b/c9/ed1bc9abe706ba2058fcf4b51df68761.jpg", desc:"Detail canting tulis khas Paoman yang menghasilkan garis-garis halus penuh presisi." },
//   { title:"Kain Sutra Pesisir", category:"motif", tag:"Motif Batik", img:"https://i.pinimg.com/736x/7b/7d/a7/7b7da76e1d305f43cf9ddda3e83f8bc3.jpg", desc:"Keindahan kain sutra dengan motif pesisir yang berkilau alami di bawah cahaya." },
//   { title:"Moda Modern Batik", category:"busana", tag:"Busana Modern", img:"https://i.pinimg.com/736x/1d/a9/a9/1da9a95dcad5e88499d42625ec9e7701.jpg", desc:"Busana modern yang memadukan motif batik tradisional dengan siluet kontemporer." },
//   { title:"Detail Canting & Kain", category:"proses", tag:"Proses Pembuatan", img:"https://i.pinimg.com/1200x/40/9f/af/409fafab21f085588a2c6cb3c254c245.jpg", desc:"Detail canting tembaga dan kain mori dalam proses pembatikan tulis tangan." },
//   { title:"Maestro Canting Paoman", category:"proses", tag:"Proses Pembuatan", img:"https://i.pinimg.com/736x/b4/de/f8/b4def8983ecfe86d12ca4a4d5f2be8dc.jpg", desc:"Jemari lentik maestro pembatik melukis lilin malam dengan konsentrasi penuh." },
//   { title:"Teknik Complongan Jarum", category:"proses", tag:"Proses Pembuatan", img:"https://i.pinimg.com/736x/39/2b/39/392b39f3a3af88a805254025c5c18b6b.jpg", desc:"Teknik khas Indramayu menusuk ribuan jarum mikro untuk efek rintik cecek magis." },
//   { title:"Molani Pola Sketsa", category:"proses", tag:"Proses Pembuatan", img:"https://i.pinimg.com/1200x/95/3d/de/953ddeb8fe354ddc006ed6cfa05e3367.jpg", desc:"Langkah awal menggambar pola motif batik di atas kain mori dengan pensil halus." },
//   { title:"Nyanting Lilin Malam", category:"proses", tag:"Proses Pembuatan", img:"https://i.pinimg.com/81/3a/90/813a9043d3306042c70ec20e578201b4.jpg", desc:"Proses menorehkan lilin malam panas menggunakan canting tembaga khas Paoman." },
//   { title:"Pewarnaan Alami Pesisir", category:"proses", tag:"Proses Pembuatan", img:"https://i.pinimg.com/64/cc/4c/64cc4ca864ca94f032dc5d48bdf1741e.jpg", desc:"Pencelupan kain ke dalam ekstrak alami kayu mahoni dan daun mangga untuk warna bahari." },
//   { title:"Nglorod Lilin Malam", category:"proses", tag:"Proses Pembuatan", img:"https://i.pinimg.com/736x/eb/41/6f/eb416f442874f1808bc9a057065cde35.jpg", desc:"Merebus kain untuk meluruhkan lilin malam hingga motif complongan muncul utuh." },
//   { title:"Ibu Pembatik Paoman", category:"sentra", tag:"Sentra Paoman", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfmOGClQiubBQW8V3PQIcRQjfK9tvMdOixdzr4qqIz5oEy_xRvgWSUMg&s=10", desc:"Para ibu pembatik di sentra Paoman yang melestarikan warisan budaya secara turun temurun." },
//   { title:"Kain Batik Siap Pakai", category:"motif", tag:"Motif Batik", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytAskEXFa5AgtYqdWMRj09YU2Vu7F6g6AMw9TiZno94uWkbqit3L0o4g&s=10", desc:"Kain batik tulis yang telah melewati seluruh proses dan siap dijahit menjadi busana." },
//   { title:"Elegansi Busana Sutra", category:"busana", tag:"Busana Modern", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIo8UHiV_PIaWjYAl6Lihw40hlimA7F0pcOtm_3IPfmBjDg-riEBL91xU&s=10", desc:"Gaun modern berbahan sutra ATBM dengan corak motif Iwak Etong bernuansa Royal Blue." },
//   { title:"Siluet Busana Wanita", category:"busana", tag:"Busana Modern", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpwdIEZxxRZvMekEFdpmRJiSROCJAVeQsNtlG6PP_3Ufq41OzJif5b4-Y&s=10", desc:"Kemeja batik tulis wanita bergaya minimalis formal dengan potongan modern." },
//   { title:"Gradasi Warna Indigo", category:"detail", tag:"Detail Tekstur", img:"https://i.pinimg.com/1200x/1d/c7/6b/1dc76be61a727fc26275e2070a43a0a5.jpg", desc:"Detail gradasi warna indigo alami yang dihasilkan dari proses pencelupan bertahap." },
//   { title:"Tekstur Lilin Crackling", category:"detail", tag:"Detail Tekstur", img:"https://i.pinimg.com/1200x/80/62/51/8062513ccda78d5b48f1285043239676.jpg", desc:"Efek crackling atau retakan lilin malam yang memberikan karakter unik pada kain batik." },
//   { title:"Close-up Canting Tembaga", category:"detail", tag:"Detail Tekstur", img:"https://i.pinimg.com/1200x/40/9f/af/409fafab21f085588a2c6cb3c254c245.jpg", desc:"Detail ujung canting tembaga yang digunakan untuk menorehkan lilin malam pada kain." },
//   { title:"Serat Katun Primissima", category:"detail", tag:"Detail Tekstur", img:"https://i.pinimg.com/736x/b4/de/f8/b4def8983ecfe86d12ca4a4d5f2be8dc.jpg", desc:"Close-up serat katun primissima yang halus, bahan dasar terbaik untuk batik tulis." },
//   { title:"Ornamen Pinggiran Kain", category:"detail", tag:"Detail Tekstur", img:"https://i.pinimg.com/736x/39/2b/39/392b39f3a3af88a805254025c5c18b6b.jpg", desc:"Detail ornamen pinggiran kain batik yang dikerjakan dengan presisi tinggi." },
//   { title:"Motif Flora Mangrove", category:"motif", tag:"Motif Batik", img:"https://i.pinimg.com/1200x/95/3d/de/953ddeb8fe354ddc006ed6cfa05e3367.jpg", desc:"Motif flora mangrove yang terinspirasi dari hutan bakau di pesisir Indramayu." },
//   { title:"Kemeja Batik Formal", category:"busana", tag:"Busana Modern", img:"https://i.pinimg.com/736x/ed/1b/c9/ed1bc9abe706ba2058fcf4b51df68761.jpg", desc:"Kemeja batik formal pria dengan motif mega mendung untuk tampilan profesional." },
//   { title:"Dress Batik Cocktail", category:"busana", tag:"Busana Modern", img:"https://i.pinimg.com/736x/8f/84/22/8f8422814f4175cf1907a40516b1abe7.jpg", desc:"Dress cocktail berbahan batik sutra untuk acara malam yang elegan." },
//   { title:"Blazer Batik Modern", category:"busana", tag:"Busana Modern", img:"https://i.pinimg.com/736x/7b/7d/a7/7b7da76e1d305f43cf9ddda3e83f8bc3.jpg", desc:"Blazer modern dengan panel batik motif pesisir, cocok untuk gaya smart casual." },
//   { title:"Workshop Pembatik Paoman", category:"sentra", tag:"Sentra Paoman", img:"https://i.pinimg.com/81/3a/90/813a9043d3306042c70ec20e578201b4.jpg", desc:"Suasana workshop pembatik di sentra Paoman, Indramayu, tempat lahirnya karya seni batik." },
//   { title:"Showroom Batik Binar", category:"sentra", tag:"Sentra Paoman", img:"https://i.pinimg.com/64/cc/4c/64cc4ca864ca94f032dc5d48bdf1741e.jpg", desc:"Showroom Batik Binar yang menampilkan koleksi terbaik dari para empu pembatik Paoman." },
//   { title:"Pameran Batik Indramayu", category:"sentra", tag:"Sentra Paoman", img:"https://i.pinimg.com/736x/eb/41/6f/eb416f442874f1808bc9a057065cde35.jpg", desc:"Pameran batik Indramayu yang memperkenalkan kekayaan motif pesisir ke dunia." },
//   { title:"Motif Udang Windu", category:"motif", tag:"Motif Batik", img:"https://i.pinimg.com/736x/7b/7d/a7/7b7da76e1d305f43cf9ddda3e83f8bc3.jpg", desc:"Motif udang windu melambangkan kemakmuran nelayan tambak di pesisir Indramayu." },
//   { title:"Proses Penjemuran Kain", category:"proses", tag:"Proses Pembuatan", img:"https://i.pinimg.com/1200x/95/3d/de/953ddeb8fe354ddc006ed6cfa05e3367.jpg", desc:"Proses penjemuran kain batik di bawah sinar matahari untuk mengunci warna alami." },
//   { title:"Gaun Batik Runway", category:"busana", tag:"Busana Modern", img:"https://i.pinimg.com/736x/1d/a9/a9/1da9a95dcad5e88499d42625ec9e7701.jpg", desc:"Gaun batik yang tampil di runway fashion show, membuktikan batik mampu go international." },
//   { title:"Kebaya Batik Modern", category:"busana", tag:"Busana Modern", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIo8UHiV_PIaWjYAl6Lihw40hlimA7F0pcOtm_3IPfmBjDg-riEBL91xU&s=10", desc:"Kebaya modern yang dipadukan dengan kain batik tulis untuk acara resmi dan pernikahan." },
//   { title:"Detail Cecek Sawut", category:"detail", tag:"Detail Tekstur", img:"https://i.pinimg.com/736x/9f/ff/79/9fff79bc00baa77371567b9d3a36de12.jpg", desc:"Detail cecek sawut yang halus, salah satu isen-isen khas batik Indramayu." },
//   { title:"Motif Singa Barong", category:"motif", tag:"Motif Batik", img:"https://i.pinimg.com/1200x/40/9f/af/409fafab21f085588a2c6cb3c254c245.jpg", desc:"Motif singa barong yang gagah, simbol keberanian dan kekuatan dalam budaya Dermayon." },
//   { title:"Outer Batik Kasual", category:"busana", tag:"Busana Modern", img:"https://i.pinimg.com/736x/b4/de/f8/b4def8983ecfe86d12ca4a4d5f2be8dc.jpg", desc:"Outer batik kasual yang bisa dipadukan dengan jeans untuk gaya sehari-hari." },
//   { title:"Komunitas Pembatik Muda", category:"sentra", tag:"Sentra Paoman", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfmOGClQiubBQW8V3PQIcRQjfK9tvMdOixdzr4qqIz5oEy_xRvgWSUMg&s=10", desc:"Komunitas pembatik muda Indramayu yang meneruskan tradisi dengan inovasi modern." },
//   { title:"Pelatihan Canting Pemula", category:"sentra", tag:"Sentra Paoman", img:"https://i.pinimg.com/81/3a/90/813a9043d3306042c70ec20e578201b4.jpg", desc:"Pelatihan penggunaan canting bagi pemula di sentra batik Paoman." },
//   { title:"Pewarnaan Alam Tradisional", category:"proses", tag:"Proses Pembuatan", img:"https://i.pinimg.com/64/cc/4c/64cc4ca864ca94f032dc5d48bdf1741e.jpg", desc:"Proses pewarnaan alam tradisional menggunakan bahan-bahan dari alam sekitar pesisir." },
//   { title:"Motif Ganggeng Laut", category:"motif", tag:"Motif Batik", img:"https://i.pinimg.com/736x/39/2b/39/392b39f3a3af88a805254025c5c18b6b.jpg", desc:"Motif ganggeng atau rumput laut yang bergoyang di dasar laut, simbol kelenturan hidup." },
//   { title:"Tekstur Sutra ATBM", category:"detail", tag:"Detail Tekstur", img:"https://i.pinimg.com/736x/8f/84/22/8f8422814f4175cf1907a40516b1abe7.jpg", desc:"Tekstur sutra ATBM yang berkilau alami, bahan premium untuk batik tulis eksklusif." },
//   { title:"Rok Batik A-Line", category:"busana", tag:"Busana Modern", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpwdIEZxxRZvMekEFdpmRJiSROCJAVeQsNtlG6PP_3Ufq41OzJif5b4-Y&s=10", desc:"Rok batik A-line yang versatile untuk tampilan kasual hingga semi-formal." },
//   { title:"Galeri Seni Batik", category:"sentra", tag:"Sentra Paoman", img:"https://i.pinimg.com/64/cc/4c/64cc4ca864ca94f032dc5d48bdf1741e.jpg", desc:"Galeri seni batik yang menyimpan koleksi karya maestro pembatik Indramayu lintas generasi." },
//   { title:"Motif Buketan Pesisir", category:"motif", tag:"Motif Batik", img:"https://i.pinimg.com/736x/b4/de/f8/b4def8983ecfe86d12ca4a4d5f2be8dc.jpg", desc:"Rangkaian bunga buketan pesisir yang melambangkan keindahan dan kesuburan alam Dermayon." },
//   { title:"Heritage Center Paoman", category:"sentra", tag:"Sentra Paoman", img:"https://i.pinimg.com/736x/eb/41/6f/eb416f442874f1808bc9a057065cde35.jpg", desc:"Pusat warisan budaya batik Paoman yang menjadi destinasi wisata edukatif Indramayu." },
//   { title:"Detail Motif Lokcan", category:"detail", tag:"Detail Tekstur", img:"https://i.pinimg.com/1200x/95/3d/de/953ddeb8fe354ddc006ed6cfa05e3367.jpg", desc:"Detail halus motif lokcan burung phoenix, perpaduan budaya Tionghoa dan Jawa." },
//   { title:"Set Busana Couple Batik", category:"busana", tag:"Busana Modern", img:"https://i.pinimg.com/736x/7b/7d/a7/7b7da76e1d305f43cf9ddda3e83f8bc3.jpg", desc:"Set busana couple batik untuk pasangan yang ingin tampil serasi dan penuh gaya." },
//   { title:"Mural Batik Indramayu", category:"sentra", tag:"Sentra Paoman", img:"https://i.pinimg.com/1200x/1d/c7/6b/1dc76be61a727fc26275e2070a43a0a5.jpg", desc:"Mural besar bermotif batik yang menghiasi dinding di kawasan sentra Paoman, Indramayu." },
//   { title:"Syal Batik Hijab Modern", category:"busana", tag:"Busana Modern", img:"https://i.pinimg.com/736x/ed/1b/c9/ed1bc9abe706ba2058fcf4b51df68761.jpg", desc:"Syal batik yang cocok digunakan sebagai hijab modern dengan motif mega mendung pesisir." }
// ];

// function initGalleryPage() {
//   const galeriGrid = document.getElementById('galeriGrid');
//   if (!galeriGrid) return; // Not on gallery page

//   const filterBar = document.querySelector('.gallery-filter-bar');
//   const searchInput = document.getElementById('galeriSearchInput');
//   const searchCount = document.getElementById('galeriSearchCount');
//   const emptyState = document.getElementById('galeriEmpty');
//   let currentFilter = 'semua';
//   let currentSearch = '';

//   const staticCards = galeriGrid.querySelectorAll('.gallery-page-card');

//   // If cards are directly in HTML, use them!
//   if (staticCards.length > 0) {
//     function filterStaticGallery() {
//       let visibleCount = 0;
//       staticCards.forEach(card => {
//         const cat = card.getAttribute('data-category') || '';
//         const title = (card.getAttribute('data-title') || card.querySelector('.gallery-page-title')?.textContent || '').toLowerCase();
//         const tag = (card.getAttribute('data-tag') || card.querySelector('.gallery-page-tag')?.textContent || '').toLowerCase();
//         const desc = (card.getAttribute('data-desc') || '').toLowerCase();

//         const matchCategory = (currentFilter === 'semua') || (cat === currentFilter);
//         const matchSearch = !currentSearch || title.includes(currentSearch) || tag.includes(currentSearch) || desc.includes(currentSearch);

//         if (matchCategory && matchSearch) {
//           card.style.display = '';
//           visibleCount++;
//         } else {
//           card.style.display = 'none';
//         }
//       });

//       if (searchCount) {
//         searchCount.textContent = `${visibleCount} koleksi`;
//       }

//       if (emptyState) {
//         emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
//       }
//     }

//     // Attach click for modal preview to each static card
//     staticCards.forEach(card => {
//       card.style.cursor = 'pointer';
//       card.addEventListener('click', () => {
//         const imgSrc = card.querySelector('img')?.getAttribute('src') || '';
//         const title = card.getAttribute('data-title') || card.querySelector('.gallery-page-title')?.textContent || '';
//         const tag = card.getAttribute('data-tag') || card.querySelector('.gallery-page-tag')?.textContent || '';
//         const desc = card.getAttribute('data-desc') || 'Koleksi mahakarya Batik Binar pesisir Dermayon, Indramayu.';

//         const modal = document.getElementById('galeriModal');
//         if (!modal) return;

//         const modalImgWrap = modal.querySelector('.gallery-detail-img-wrap');
//         const modalImg = document.getElementById('galeriModalImg');
//         const modalTag = document.getElementById('galeriModalTag');
//         const modalTitle = document.getElementById('galeriModalTitle');
//         const modalDesc = document.getElementById('galeriModalDesc');

//         if (modalImg) {
//           modalImg.src = imgSrc;
//         }
//         if (modalImgWrap) {
//           modalImgWrap.style.display = imgSrc ? 'block' : 'none';
//         }
//         if (modalTag) modalTag.textContent = tag;
//         if (modalTitle) modalTitle.textContent = title;
//         if (modalDesc) modalDesc.textContent = desc;

//         modal.classList.add('active');
//         document.body.style.overflow = 'hidden';
//       });
//     });

//     // Filter button clicks
//     if (filterBar) {
//       filterBar.addEventListener('click', (e) => {
//         const btn = e.target.closest('.gallery-filter-btn');
//         if (!btn) return;
//         filterBar.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
//         btn.classList.add('active');
//         currentFilter = btn.getAttribute('data-filter') || 'semua';
//         filterStaticGallery();
//       });
//     }

//     // Search input
//     if (searchInput) {
//       searchInput.addEventListener('input', () => {
//         currentSearch = searchInput.value.trim().toLowerCase();
//         filterStaticGallery();
//       });
//     }

//     // Initial filter run
//     filterStaticGallery();
//   } else {
//     // Fallback dynamic rendering from GALLERY_DATA array
//     function renderGallery() {
//       const filtered = currentFilter === 'semua'
//         ? GALLERY_DATA
//         : GALLERY_DATA.filter(g => g.category === currentFilter);

//       galeriGrid.innerHTML = filtered.map((g, idx) => {
//         const realIdx = GALLERY_DATA.indexOf(g);
//         return `
//         <div class="gallery-page-card" data-category="${g.category}" onclick="openGaleriDetail(${realIdx})">
//           <img src="${g.img}" alt="${g.title}" loading="lazy">
//           <div class="gallery-page-overlay">
//             <span class="gallery-page-tag">${g.tag}</span>
//             <h4 class="gallery-page-title">${g.title}</h4>
//           </div>
//         </div>
//       `}).join('');
//     }

//     if (filterBar) {
//       filterBar.addEventListener('click', (e) => {
//         const btn = e.target.closest('.gallery-filter-btn');
//         if (!btn) return;
//         filterBar.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
//         btn.classList.add('active');
//         currentFilter = btn.getAttribute('data-filter');
//         renderGallery();
//       });
//     }

//     renderGallery();
//   }

//   // Modal
//   const modal = document.getElementById('galeriModal');
//   const closeBtn = document.getElementById('galeriModalClose');

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

// // Global function to open gallery detail
// window.openGaleriDetail = function(index) {
//   const item = GALLERY_DATA[index];
//   if (!item) return;

//   const modal = document.getElementById('galeriModal');
//   if (!modal) return;

//   const img = document.getElementById('galeriModalImg');
//   const tag = document.getElementById('galeriModalTag');
//   const title = document.getElementById('galeriModalTitle');
//   const desc = document.getElementById('galeriModalDesc');

//   if (img) img.src = item.img;
//   if (tag) tag.textContent = item.tag;
//   if (title) title.textContent = item.title;
//   if (desc) desc.textContent = item.desc;

//   modal.classList.add('active');
//   document.body.style.overflow = 'hidden';
// };