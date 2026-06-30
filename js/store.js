// LocalStorage Keys
const KEYS = { PRODUCTS: 'bk_products', CART: 'bk_cart', ORDERS: 'bk_orders', USERS: 'bk_users', ARTICLES: 'bk_articles', ARCHIVED_ARTICLES: 'bk_archived_articles' };

// Default Data
const defaultProducts = [
    { id: 1, name: 'Keripik Singkong Pedas', desc: 'Keripik singkong renyah dengan bumbu pedas khas Bali. Cocok untuk camilan saat santai.', price: 15000, stock: 150, sold: 450, category: 'Makanan', rating: 4.8, image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&q=80&w=400&h=300', seller: 'Arif Nugroho' },
    { id: 2, name: 'Kopi Arabika Premium', desc: 'Kopi arabika pilihan dari dataran tinggi Gayo, Aceh. Aroma khas dan cita rasa yang lembut.', price: 75000, stock: 80, sold: 320, category: 'Minuman', rating: 4.9, image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=400&h=300', seller: 'Arif Nugroho' },
    { id: 3, name: 'Batik Tulis Lasem', desc: 'Batik tulis asli Lasem dengan motif tradisional. Bahan katun premium yang nyaman dipakai.', price: 450000, stock: 25, sold: 120, category: 'Fashion', rating: 5.0, image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80&w=400&h=300', seller: 'Batik Indah' },
    { id: 4, name: 'Tas Anyaman Rotan', desc: 'Tas anyaman rotan handmade dari pengrajin Bali. Desain modern dengan sentuhan tradisional.', price: 125000, stock: 40, sold: 210, category: 'Fashion', rating: 4.7, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=400&h=300', seller: 'Kerajinan Bali' },
    { id: 5, name: 'Sambal Matah Bali', desc: 'Sambal matah khas Bali dengan bahan segar. Pedas segar yang menggugah selera.', price: 25000, stock: 200, sold: 580, category: 'Makanan', rating: 4.6, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400&h=300', seller: 'Sambal Mbok' },
    { id: 6, name: 'Gula Aren Organik', desc: 'Gula aren murni tanpa bahan kimia. Manis alami untuk kesehatan keluarga Anda.', price: 35000, stock: 120, sold: 340, category: 'Makanan', rating: 4.8, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=400&h=300', seller: 'Petani Lokal' }
];

const defaultUsers = [
    { id: 1, name: 'Rina Anggraini', email: 'admin@belanjakita.com', role: 'Admin', status: 'Aktif', joinDate: '2025-01-01', trx: 0, avatar: '' },
    { id: 2, name: 'Arif Nugroho', email: 'seller@belanjakita.com', role: 'Penjual', status: 'Aktif', joinDate: '2025-02-15', trx: 45, avatar: '' },
    { id: 3, name: 'Dita Rahma Putri', email: 'buyer@belanjakita.com', role: 'Pembeli', status: 'Aktif', joinDate: '2025-03-10', trx: 12, avatar: '' },
    { id: 4, name: 'Budi Setiawan', email: 'budi@example.com', role: 'Pembeli', status: 'Aktif', joinDate: '2025-04-20', trx: 8, avatar: '' },
    { id: 5, name: 'Ahmad Rizki', email: 'ahmad@example.com', role: 'Penjual', status: 'Nonaktif', joinDate: '2025-06-05', trx: 0, avatar: '' }
];

const defaultArticles = [
    {
        id: 1,
        title: 'Strategi Meningkatkan Penjualan UMKM di Era Digital',
        summary: 'Pelajari cara efektif memasarkan produk UMKM Anda melalui platform digital.',
        content: `<p>Di era digital seperti sekarang, kehadiran online bukan lagi pilihan — melainkan kebutuhan mendasar bagi setiap pelaku Usaha Mikro, Kecil, dan Menengah (UMKM). Persaingan pasar yang semakin ketat mendorong para pengusaha lokal untuk beradaptasi dengan cepat agar tetap relevan dan kompetitif.</p>
<div class="highlight-box"><p>💡 Menurut data Kementerian Koperasi dan UKM, UMKM yang aktif berjualan secara digital memiliki potensi pertumbuhan pendapatan hingga <strong>40% lebih tinggi</strong> dibanding yang masih bergantung pada saluran offline saja.</p></div>
<h2>1. Optimalkan Media Sosial</h2>
<p>Media sosial adalah alat pemasaran gratis yang sangat powerful. Platform seperti Instagram, TikTok, dan Facebook memiliki ratusan juta pengguna aktif di Indonesia.</p>
<ul><li><strong>Posting secara konsisten</strong> — minimal 4–5 kali per minggu.</li><li><strong>Gunakan Reels dan Short Video</strong> — format video pendek mendapatkan jangkauan organik paling besar.</li><li><strong>Interaksi aktif</strong> — balas komentar, DM, dan story pelanggan.</li></ul>
<h2>2. Gunakan Platform E-Commerce Lokal</h2>
<p>Platform seperti BelanjaKita, Tokopedia, dan Shopee memberikan kesempatan bagi UMKM untuk menjangkau pasar yang jauh lebih luas.</p>
<h2>3. Manfaatkan SEO Lokal</h2>
<p>Daftarkan bisnis Anda di Google Business Profile secara gratis. Tambahkan foto, jam operasional, dan minta pelanggan meninggalkan ulasan positif.</p>
<h2>4. Program Loyalitas Pelanggan</h2>
<p>Mendapatkan pelanggan baru memang penting, tetapi mempertahankan pelanggan lama jauh lebih hemat biaya.</p>
<h2>5. Analisis Data Secara Berkala</h2>
<p>Keputusan bisnis terbaik didasarkan pada data, bukan tebakan. Gunakan alat gratis seperti Google Analytics.</p>`,
        category: 'Bisnis',
        author: 'Tim BelanjaKita',
        views: 1234,
        date: '2025-10-25',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=250'
    },
    {
        id: 2,
        title: 'Tips Berbelanja Online yang Aman dan Nyaman',
        summary: 'Panduan lengkap berbelanja online dengan aman dan menghindari penipuan.',
        content: `<p>Berbelanja online memang praktis dan menyenangkan, namun kita tetap harus waspada terhadap berbagai risiko yang mengintai. Berikut panduan lengkap untuk berbelanja online dengan aman.</p>
<h2>1. Pilih Platform Terpercaya</h2>
<p>Selalu belanja di platform e-commerce yang sudah terbukti aman seperti BelanjaKita. Cek review dan rating toko sebelum bertransaksi.</p>
<h2>2. Periksa Keaslian Produk</h2>
<p>Baca deskripsi produk dengan teliti, perhatikan foto asli vs foto katalog, dan jangan ragu bertanya kepada penjual.</p>
<h2>3. Gunakan Metode Pembayaran Aman</h2>
<p>Manfaatkan fitur rekening bersama (escrow) yang disediakan platform. Hindari transfer langsung ke rekening pribadi penjual.</p>
<h2>4. Simpan Bukti Transaksi</h2>
<p>Screenshot bukti pembayaran dan percakapan dengan penjual sebagai dokumentasi jika terjadi masalah.</p>`,
        category: 'Tips',
        author: 'Dita Rahma',
        views: 892,
        date: '2025-10-28',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400&h=250'
    },
    {
        id: 3,
        title: 'Mengenal Produk Lokal Indonesia yang Mendunia',
        summary: 'Berbagai produk lokal Indonesia yang telah dikenal dan diminati pasar internasional.',
        content: `<p>Indonesia memiliki kekayaan budaya dan sumber daya alam yang luar biasa. Banyak produk lokal yang kini telah menembus pasar internasional dan mendapat pengakuan dunia.</p>
<h2>1. Kopi Indonesia</h2>
<p>Kopi Gayo, Toraja, dan Kintamani telah menjadi favorit pecinta kopi di seluruh dunia. Indonesia adalah produsen kopi terbesar keempat di dunia.</p>
<h2>2. Batik</h2>
<p>Batik Indonesia telah diakui UNESCO sebagai warisan budaya tak benda. Motif-motif batik kini banyak diadaptasi oleh desainer internasional.</p>
<h2>3. Kerajinan Tangan</h2>
<p>Produk kerajinan dari Bali, Yogyakarta, dan berbagai daerah lainnya sangat diminati turis dan buyer internasional.</p>
<h2>4. Rempah-Rempah</h2>
<p>Indonesia dikenal sebagai negeri rempah. Produk rempah organik dari Indonesia semakin dicari di pasar global.</p>`,
        category: 'Produk Lokal',
        author: 'Arif Nugroho',
        views: 2156,
        date: '2025-11-02',
        image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400&h=250'
    }
];

// Data version — bump this to force re-initialization when schema changes
const STORE_VERSION = 'bk_store_v3';
if (!localStorage.getItem(STORE_VERSION)) {
    // Clear old data and re-initialize with new schema
    Object.values(KEYS).forEach(key => localStorage.removeItem(key));
    localStorage.setItem(STORE_VERSION, 'true');
}

// Initialize Data
if (!localStorage.getItem(KEYS.PRODUCTS)) localStorage.setItem(KEYS.PRODUCTS, JSON.stringify(defaultProducts));
if (!localStorage.getItem(KEYS.CART)) localStorage.setItem(KEYS.CART, JSON.stringify([]));
if (!localStorage.getItem(KEYS.ORDERS)) localStorage.setItem(KEYS.ORDERS, JSON.stringify([]));
if (!localStorage.getItem(KEYS.USERS)) localStorage.setItem(KEYS.USERS, JSON.stringify(defaultUsers));
if (!localStorage.getItem(KEYS.ARTICLES)) localStorage.setItem(KEYS.ARTICLES, JSON.stringify(defaultArticles));
if (!localStorage.getItem(KEYS.ARCHIVED_ARTICLES)) localStorage.setItem(KEYS.ARCHIVED_ARTICLES, JSON.stringify([]));

// --- PRODUCT CRUD ---
function getProducts() { return JSON.parse(localStorage.getItem(KEYS.PRODUCTS)); }
function saveProducts(products) { localStorage.setItem(KEYS.PRODUCTS, JSON.stringify(products)); }
function addProduct(product) {
    const products = getProducts();
    product.id = Date.now();
    product.sold = product.sold || 0;
    product.rating = product.rating || 0;
    products.push(product);
    saveProducts(products);
}
function updateProduct(id, data) {
    let products = getProducts();
    const idx = products.findIndex(p => p.id === id);
    if (idx !== -1) {
        products[idx] = { ...products[idx], ...data };
        saveProducts(products);
    }
}
function deleteProduct(id) {
    let products = getProducts();
    products = products.filter(p => p.id !== id);
    saveProducts(products);
}
function getProductById(id) {
    return getProducts().find(p => p.id === id);
}

// --- USER CRUD ---
function getUsers() { return JSON.parse(localStorage.getItem(KEYS.USERS)); }
function saveUsers(users) { localStorage.setItem(KEYS.USERS, JSON.stringify(users)); }
function addUser(user) {
    const users = getUsers();
    user.id = Date.now();
    user.joinDate = user.joinDate || new Date().toISOString().split('T')[0];
    user.trx = user.trx || 0;
    user.status = user.status || 'Aktif';
    users.push(user);
    saveUsers(users);
}
function updateUser(id, data) {
    let users = getUsers();
    const idx = users.findIndex(u => u.id === id);
    if (idx !== -1) {
        users[idx] = { ...users[idx], ...data };
        saveUsers(users);
    }
}
function toggleUserStatus(id) {
    let users = getUsers();
    let user = users.find(u => u.id === id);
    if(user) {
        user.status = user.status === 'Aktif' ? 'Nonaktif' : 'Aktif';
        saveUsers(users);
    }
}
function deleteUser(id) {
    let users = getUsers();
    users = users.filter(u => u.id !== id);
    saveUsers(users);
}
function getUserById(id) {
    return getUsers().find(u => u.id === id);
}

// --- ARTICLE CRUD ---
function getArticles() { return JSON.parse(localStorage.getItem(KEYS.ARTICLES)); }
function saveArticles(articles) { localStorage.setItem(KEYS.ARTICLES, JSON.stringify(articles)); }
function addArticle(article) {
    const articles = getArticles();
    article.id = Date.now();
    article.views = 0;
    article.date = article.date || new Date().toISOString().split('T')[0];
    articles.push(article);
    saveArticles(articles);
}
function updateArticle(id, data) {
    let articles = getArticles();
    const idx = articles.findIndex(a => a.id === id);
    if (idx !== -1) {
        articles[idx] = { ...articles[idx], ...data };
        saveArticles(articles);
    }
}
function deleteArticle(id) {
    let articles = getArticles();
    articles = articles.filter(a => a.id !== id);
    saveArticles(articles);
}
function getArticleById(id) {
    return getArticles().find(a => a.id === id);
}

// --- ARTICLE ARCHIVE ---
function getArchivedArticles() { return JSON.parse(localStorage.getItem(KEYS.ARCHIVED_ARTICLES)); }
function saveArchivedArticles(articles) { localStorage.setItem(KEYS.ARCHIVED_ARTICLES, JSON.stringify(articles)); }
function archiveArticle(id) {
    let articles = getArticles();
    const article = articles.find(a => a.id === id);
    if (article) {
        article.archivedDate = new Date().toISOString().split('T')[0];
        const archived = getArchivedArticles();
        archived.push(article);
        saveArchivedArticles(archived);
        articles = articles.filter(a => a.id !== id);
        saveArticles(articles);
    }
}
function unarchiveArticle(id) {
    let archived = getArchivedArticles();
    const article = archived.find(a => a.id === id);
    if (article) {
        delete article.archivedDate;
        const articles = getArticles();
        articles.push(article);
        saveArticles(articles);
        archived = archived.filter(a => a.id !== id);
        saveArchivedArticles(archived);
    }
}
function deleteArchivedArticle(id) {
    let archived = getArchivedArticles();
    archived = archived.filter(a => a.id !== id);
    saveArchivedArticles(archived);
}

// --- ORDER CRUD ---
function getOrders() { return JSON.parse(localStorage.getItem(KEYS.ORDERS)); }
function saveOrders(orders) { localStorage.setItem(KEYS.ORDERS, JSON.stringify(orders)); }
function updateOrderStatus(id, status) {
    let orders = getOrders();
    const idx = orders.findIndex(o => o.id === id);
    if (idx !== -1) {
        orders[idx].status = status;
        saveOrders(orders);
        if (typeof showToast === 'function') {
            showToast('Status pesanan berhasil diubah', 'success', 'Berhasil');
        }
        return true;
    }
    return false;
}

// --- CART LOGIC ---
function getCart() { return JSON.parse(localStorage.getItem(KEYS.CART)); }
function saveCart(cart) { localStorage.setItem(KEYS.CART, JSON.stringify(cart)); updateCartBadge(); }
function addToCart(product, qty = 1) {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) { existing.qty += qty; } else { cart.push({ ...product, qty }); }
    saveCart(cart);
    if (typeof showToast === 'function') {
        showToast('Produk berhasil ditambahkan ke keranjang!', 'success', 'Keranjang');
    }
}
function clearCart() { saveCart([]); }

function updateCartBadge() {
    const cart = getCart();
    const badges = document.querySelectorAll('.cart-badge-count');
    badges.forEach(b => {
        b.innerText = cart.reduce((sum, item) => sum + item.qty, 0);
        b.style.display = cart.length > 0 ? 'flex' : 'none';
    });
}

// Format Currency
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
}

// --- FILE UPLOAD HELPER ---
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// --- IMAGE UPLOAD PREVIEW HELPER ---
function setupImageUpload(inputId, previewId, currentImage) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    if (!input || !preview) return;

    if (currentImage) {
        preview.innerHTML = `<img src="${currentImage}" alt="Preview" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">`;
    }

    input.addEventListener('change', async function() {
        if (this.files && this.files[0]) {
            const file = this.files[0];
            if (file.size > 2 * 1024 * 1024) {
                if (typeof showToast === 'function') showToast('Ukuran file maksimal 2MB', 'warning', 'Perhatian');
                this.value = '';
                return;
            }
            const base64 = await fileToBase64(file);
            preview.innerHTML = `<img src="${base64}" alt="Preview" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">`;
            preview.dataset.imageData = base64;
        }
    });
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
