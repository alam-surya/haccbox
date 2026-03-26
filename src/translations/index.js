const STORAGE_KEY = 'haccbox_lang'

export { STORAGE_KEY }

export const translations = {
  id: {
    nav: {
      menu: 'MENU',
      switchToEn: 'EN',
      switchToId: 'ID',
      ariaSwitchEn: 'Ganti ke Bahasa Inggris',
      ariaSwitchId: 'Switch to Indonesian'
    },
    menu: {
      groups: [
        [
          { label: 'Beranda', path: '/', icon: 'home' },
          {
            label: 'Organisasi',
            icon: 'grid',
            children: [
              { label: 'Perusahaan', path: '/organization/company' },
              { label: 'Profil Pemilik', path: '/organization/owner-profile' },
              { label: 'Budaya Organisasi', path: '/organization/organization-culture' }
            ]
          },
          {
            label: 'Produk',
            icon: 'box',
            children: [
              { label: 'Produk Luar', path: '/product/outer-product' },
              { label: 'Aksesori Produk', path: '/product/product-accessories' },
              { label: 'Kualitas Produk', path: '/product/product-quality' }
            ]
          },
          {
            label: 'Layanan',
            icon: 'tool',
            children: [
              { label: 'Kemasan Kustom', path: '/service/custom-packaging' },
              { label: 'Cetak Kustom', path: '/service/custom-printing' },
              { label: 'Opsi Finishing', path: '/service/finishing-option' },
              { label: 'Layanan Pengiriman', path: '/service/delivery-service' }
            ]
          },
          { label: 'Garansi', path: '/guarantee', icon: 'shield' },
          { label: 'Cara Memesan', path: '/how-to-order', icon: 'list' },
          { label: 'Galeri', path: '/gallery', icon: 'image' },
          { label: 'Artikel', path: '/articles', icon: 'article' }
        ],
        [
          { label: 'Kontak', path: '/contact-person', icon: 'user' }
        ]
      ]
    },
    hero: {
      heading: 'Haccbox: Solusi Kemasan Kustom untuk Ekspor & Standar Laboratorium',
      description: 'Menghubungkan produsen dan pelanggan dengan solusi kemasan kustom berkualitas tinggi. Kami mengkhususkan diri pada kemasan karton box untuk industri furnitur, memenuhi standar ekspor dan laboratorium dengan bahan yang aman, tahan lama, dan ramah lingkungan.',
      learnMore: 'Pelajari lebih lanjut',
      videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.'
    },
    contact: {
      heading: 'PERTANYAAN BISNIS',
      logoAlt: 'Logo Haccbox'
    },
    certification: {
      title: 'Sertifikasi yang mendukung kualitas, kekuatan, dan sumber bahan yang bertanggung jawab.',
      label: 'SERTIFIKASI',
      doubleWall: { title: 'Double Wall', description: 'Sertifikasi ini memastikan karton kami memenuhi standar konstruksi dan pengiriman, dengan uji kekuatan burst hingga 200 lbs per inci persegi, ukuran maksimal 57,7 inci, dan berat kotor 11,6 lbs. Karton ini aman untuk mengirim produk yang membutuhkan perlindungan ekstra.' },
      fsc: { title: 'FSC', description: 'Sertifikasi FSC memastikan bahan baku yang kami gunakan, seperti kayu atau kertas, berasal dari hutan yang dikelola secara berkelanjutan dan tidak merugikan lingkungan, komunitas lokal, atau perekonomian lokal. Produk bersertifikasi FSC mendukung konservasi hutan dan keberlanjutan jangka panjang sumber daya alam.' }
    },
    category: {
      guarantee: 'Garansi',
      howToOrder: 'Cara Memesan',
      gallery: 'Galeri'
    },
    runningText: {
      professional: 'Profesional',
      disciplined: 'Disiplin',
      growing: 'Berkembang'
    },
    pages: {
      company: {
        heading: 'Perusahaan Kami: Pertumbuhan, Tonggak Sejarah, dan Komitmen terhadap Kualitas',
        description: 'Dari pendirian hingga hari ini, kami telah membangun perusahaan yang fokus pada kemasan kustom yang andal dan solusi siap ekspor. Temukan perjalanan kami, tonggak penting, dan nilai-nilai yang mendorong kami memberikan kualitas dan kepercayaan kepada setiap mitra.',
        seeMore: 'Lihat selengkapnya',
        aboutMainHeading: "Kami adalah mitra Anda dalam solusi kemasan kustom berkualitas. Kami berkomitmen menghubungkan produsen dan pelanggan dengan kemasan karton box yang memenuhi standar ekspor dan laboratorium.",
        aboutSupporting: "Dengan dedikasi penuh, kami telah menyelesaikan ratusan proyek kemasan, masing-masing menjadi bukti komitmen kami terhadap inovasi, kualitas, dan keberlanjutan. Dari industri furnitur hingga kebutuhan spesifik, kami siap menjadi mitra andal Anda.",
        aboutCta: 'Hubungi Kami',
        journey: 'Perjalanan Kami',
        intro: 'Haccbox adalah identitas merek dari CV. Cahaya Abadi Habsoro, nama terpercaya dalam kemasan dan distribusi berkualitas, melayani produsen dan pelanggan dengan solusi kustom.',
        text1: 'Cahaya Abadi memasarkan dan mendistribusikan kemasan karton box berkualitas tinggi untuk industri furnitur. Kami bagian dari grup Mitra Persada Carton Box, di industri sejak 2012.',
        text2: 'Pada 2021, Cahaya Abadi didirikan untuk menjembatani produsen dan pelanggan dengan kemasan kustom yang memenuhi standar ekspor dan laboratorium, plus solusi pelengkap seperti styrofoam untuk perlindungan pengiriman yang optimal.',
        text3: 'Kami terus berinovasi dengan kemasan yang aman, tahan lama, dan ramah lingkungan. Pada 2025, kami meluncurkan Haccbox sebagai merek baru untuk menghadirkan desain kemasan yang dapat disesuaikan dan layanan yang lebih tepat serta profesional.',
        historyTitle: 'Perjalanan Kami',
        milestone2012: '2012 – Mitra Persada Carton Box',
        milestone2012Text: 'Bagian dari grup Mitra Persada Carton Box yang berkecimpung di industri sejak 2012. Memasarkan dan mendistribusikan kemasan karton box berkualitas tinggi untuk industri furnitur.',
        milestone2021: '2021 – Cahaya Abadi',
        milestone2021Text: 'Cahaya Abadi didirikan untuk menjembatani produsen dan pelanggan dengan kemasan kustom yang memenuhi standar ekspor dan laboratorium. Kami juga memproduksi pelengkap kemasan seperti styrofoam untuk perlindungan optimal saat pengiriman.',
        milestone2025: '2025 – Haccbox',
        milestone2025Text: 'Meluncurkan Haccbox sebagai identitas merek baru untuk kemasan yang dapat disesuaikan. Kemasan aman, tahan lama, ramah lingkungan dengan layanan yang lebih tepat dan profesional.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.'
      },
      ownerProfile: {
        heading: 'Kenali Pimpinan di Balik Haccbox',
        description: 'Orang-orang yang memandu visi dan operasional harian kami. Kenali wajah di balik Haccbox: pengalaman, nilai, dan komitmen mereka dalam menghadirkan solusi kemasan berkualitas dan kemitraan yang langgeng.',
        seeMore: 'Lihat selengkapnya',
        aboutMainHeading: "Kenali pemimpin di balik Haccbox. Kami membangun budaya organisasi yang kuat dengan tiga pilar: Profesionalisme, Disiplin, dan Berkembang.",
        aboutSupporting: "Kami menjalankan setiap aspek bisnis dengan standar tertinggi, transparansi, dan kolaborasi yang kuat. Melalui ketiga pilar ini, kami berkomitmen menjadi \"mitra adaptif\" yang menghadirkan kemasan berkualitas tinggi dan berkelanjutan.",
        aboutCta: 'Hubungi Kami',
        title: 'Profil Pemilik',
        intro: 'Kami membangun budaya organisasi yang kuat dengan tiga pilar: Profesionalisme, Disiplin, dan Berkembang—memastikan bisnis yang berkelanjutan dan bernilai bagi pelanggan kami, khususnya di industri furnitur.',
        text1: 'Kami menjalankan setiap aspek bisnis dengan standar tertinggi, transparansi, dan kolaborasi yang kuat, agar produk kami memenuhi harapan industri. Melalui budaya disiplin, kami menjaga timeline, ketepatan produksi, dan kepatuhan terhadap standar ekspor dan pengujian laboratorium.',
        text2: 'Seiring evolusi industri, kami terus berinovasi dalam teknologi, material, dan strategi untuk menghadirkan solusi kemasan yang lebih baik. Melalui ketiga pilar ini, Cahaya Abadi berkomitmen menjadi mitra yang adaptif dan progresif, menghadirkan kemasan berkualitas tinggi dan berkelanjutan.',
        attribution: 'Moh Akhim Bayu Habsoro, S.E. MBA',
        attributionRole: 'Direktur Utama',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.'
      },
      organizationCulture: {
        heading: 'Nilai, Keyakinan, dan Cara Kami Bekerja',
        description: 'Prinsip yang memandu tim kami setiap hari. Kami percaya pada kualitas, transparansi, dan kemitraan jangka panjang. Inilah cara kami mewujudkan nilai-nilai itu: dalam kolaborasi, melayani pelanggan, dan tumbuh bersama.',
        seeMore: 'Lihat selengkapnya',
        title: 'Budaya Organisasi',
        intro: 'Nilai-nilai kami dan cara kami memperhatikan orang-orang mencerminkan kesehatan perusahaan. Kami berdiri di atas tiga pilar: Profesional, Disiplin, dan Berkembang.',
        professional: 'Profesional',
        professionalDesc: 'Kami menjalankan setiap aspek bisnis dengan standar tertinggi, transparansi, dan kolaborasi yang kuat, agar produk kami memenuhi harapan industri.',
        disciplined: 'Disiplin',
        disciplinedDesc: 'Melalui budaya disiplin, kami menjaga timeline, ketepatan produksi, dan kepatuhan penuh terhadap standar ekspor dan pengujian laboratorium.',
        growing: 'Berkembang',
        growingDesc: 'Seiring evolusi industri, kami terus berinovasi dalam teknologi, material, dan strategi untuk menghadirkan solusi kemasan yang lebih baik.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.'
      },
      outerProduct: {
        heading: 'Bentuk yang Melindungi: Kemasan Luar untuk Ekspor',
        description: 'Jelajahi rangkaian produk dan solusi kemasan kami yang disesuaikan untuk industri furnitur dan standar ekspor.',
        seeMore: 'Lihat selengkapnya',
        title: 'Produk Luar',
        intro: 'Kotak dan tipe kosong untuk display, pengiriman, dan kemasan kustom. Pilih dari berbagai bentuk dan gaya kami.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.',
        products: [
          { name: 'L Shape', description: 'Kotak kaku berbentuk L untuk display atau partisi. Ideal untuk presentasi ritel dan tata letak modular.' },
          { name: 'Box A1', description: 'Kotak gaya A1 klasik untuk ritel dan pengiriman. Konstruksi tahan lama untuk transportasi aman.' },
          { name: 'Box Miring', description: 'Kotak atap miring untuk presentasi yang khas. Menambah daya tarik visual untuk display rak dan konter.' },
          { name: 'Die Cut', description: 'Jendela atau bentuk die-cut kustom untuk visibilitas. Tampilkan produk Anda sambil tetap terlindungi.' },
          { name: 'Empty Box', description: 'Kotak kosong flat-pack untuk perakitan. Hemat biaya dan mudah disimpan hingga digunakan.' },
          { name: 'Bottom', description: 'Hanya alas untuk nampan atau insert. Unit dasar serbaguna untuk kemasan berlapis.' },
          { name: 'Top Bottom', description: 'Atas dan bawah terpisah untuk akses mudah. Cocok untuk kemasan yang dapat digunakan kembali atau sering dibuka.' }
        ]
      },
      productAccessories: {
        heading: 'Setiap Detail Berarti: Aksesori yang Melengkapi Kotak',
        description: 'Produk pelengkap di luar kotak: wrap, papan, inti, dan penyangga yang melengkapi solusi kemasan Anda.',
        seeMore: 'Lihat selengkapnya',
        title: 'Aksesori Produk',
        intro: 'Produk pelengkap di luar kotak: wrap, papan, inti, dan penyangga untuk kemasan lengkap.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.',
        products: [
          { name: 'Hexa Wrap', description: 'Wrap heksagonal untuk bantalan dan perlindungan di sekitar produk. Ideal sebagai pelengkap luar kotak untuk barang rapuh atau tidak beraturan.' },
          { name: 'Honeycomb Board', description: 'Papan sarang lebah ringan untuk penguatan internal dan pengisi rongga. Melengkapi struktur kotak dengan kekuatan tanpa bobot ekstra.' },
          { name: 'Honeycomb Core', description: 'Material inti sarang lebah untuk panel dan insert. Digunakan bersama kotak untuk menambah kekakuan dan perlindungan dalam pengiriman dan display.' },
          { name: 'Paper Core', description: 'Inti kertas untuk tabung, gulungan, dan penyangga struktural. Aksesori serbaguna di luar kotak untuk aplikasi wrapping dan inti.' },
          { name: 'Styrofoam', description: 'Styrofoam pelindung untuk menyerap benturan dan menjaga produk tetap stabil di dalam kemasan. Cocok untuk barang sensitif dan mudah pecah saat pengiriman.' }
        ]
      },
      productQuality: {
        heading: 'Dibuat untuk Tahan Lama: Kualitas yang Terukur',
        description: 'Komitmen kami terhadap kualitas pada setiap material dan spesifikasi. Dari grade karton hingga foam, pelindung tepi, dan papan sarang lebah—kami memastikan standar yang konsisten untuk kemasan Anda.',
        seeMore: 'Lihat selengkapnya',
        aboutMainHeading: "Komitmen kami pada kualitas di setiap material dan spesifikasi. Dari grade karton hingga foam, pelindung tepi, dan papan sarang lebah—kami memastikan standar yang konsisten untuk kemasan Anda.",
        aboutSupporting: "Kami mempertahankan standar kualitas ketat pada material dan dimensi. Berikut spesifikasi utama yang kami terapkan untuk menghadirkan kemasan andal dan siap ekspor.",
        aboutCta: 'Hubungi Kami',
        title: 'Kualitas Produk',
        intro: 'Kami mempertahankan standar kualitas ketat pada material dan dimensi. Di bawah ini adalah spesifikasi utama yang kami terapkan untuk menghadirkan kemasan andal dan siap ekspor.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.',
        cartonQuality: 'Kualitas Karton',
        cartonQualityText: 'Grade dan gramatur karton dipilih untuk memenuhi kebutuhan kekuatan dan cetak. Kami menggunakan papan berkualitas yang cocok untuk furnitur dan pengiriman ekspor.',
        foamQuality: 'Kualitas Foam',
        foamQualityText: 'Kepadatan dan jenis foam ditentukan untuk bantalan dan perlindungan. Kami menyediakan foam yang memenuhi standar daya tahan dan keamanan untuk produk Anda.',
        edgeProtector: 'Ketebalan Pelindung Tepi',
        edgeProtectorText: 'Ketebalan pelindung tepi dipilih untuk melindungi sudut dan tepi selama penanganan dan transport. Ketebalan konsisten memastikan perlindungan andal.',
        honeycombThickness: 'Ketebalan Papan Sarang Lebah',
        honeycombThicknessText: 'Ketebalan papan sarang lebah ditentukan untuk kekakuan dan pengisi rongga. Kami menggunakan sarang lebah yang memenuhi ketebalan yang dibutuhkan untuk penyangga struktural dan perlindungan.'
      },
      customPackaging: {
        heading: 'Produk Anda, Kemasan Anda.',
        description: 'Kami menyesuaikan kemasan dengan spesifikasi Anda: bentuk, ukuran, struktur, dan finishing. Dari L-shape dan gaya kotak hingga die-cut dan kotak kosong—kami menghadirkan solusi yang sesuai produk dan merek Anda.',
        seeMore: 'Lihat selengkapnya',
        aboutMainHeading: "Produk Anda, Kemasan Anda. Kami menyesuaikan kemasan dengan spesifikasi Anda: bentuk, ukuran, struktur, dan finishing.",
        aboutSupporting: "Kami menyesuaikan kemasan dengan kebutuhan Anda. Dimensi kustom, material, dan cetak dapat dikombinasikan. Kami bekerja sesuai standar ekspor dan laboratorium agar kemasan Anda andal untuk pengiriman dan display.",
        aboutCta: 'Hubungi Kami',
        title: 'Produk Anda, Kemasan Anda.',
        intro: 'Kami menyesuaikan kemasan dengan kebutuhan Anda. Kemampuan kami mencakup berbagai tipe kotak dan kosong, dari L-shape dan Box A1 hingga atap miring, die-cut, kotak kosong, bottom, dan top-bottom—agar Anda mendapat struktur, ukuran, dan finishing yang tepat untuk produk dan industri Anda.',
        text: 'Dimensi kustom, material, dan cetak dapat dikombinasikan dengan format ini. Kami bekerja sesuai standar ekspor dan laboratorium agar kemasan Anda andal untuk pengiriman dan display.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.'
      },
      customPrinting: {
        heading: 'Warna Berkualitas, di Kotak Anda.',
        description: 'Kami menerima cetak kotak sesuai desain Anda, dengan fokus pada kualitas warna. Dari logo dan grafis hingga cetak full-color—kami menghadirkan hasil yang tajam dan konsisten pada kemasan Anda.',
        seeMore: 'Lihat selengkapnya',
        aboutMainHeading: "Warna Berkualitas, di Kotak Anda. Kami menerima cetak kotak sesuai desain Anda, dengan fokus pada kualitas warna.",
        aboutSupporting: "Kami mengerjakan cetak kotak dengan penekanan pada kualitas warna. Kemampuan kami mencakup cetak pada karton dan kotak bergelombang: logo, grafis, teks, dan barcode. Kami bekerja sesuai artwork dan spesifikasi Anda agar hasil akhir memenuhi harapan ritel dan ekspor.",
        aboutCta: 'Hubungi Kami',
        title: 'Warna Berkualitas, di Kotak Anda.',
        intro: 'Kami mengerjakan cetak kotak dengan penekanan pada kualitas warna. Baik spot color, proses full-color, atau Pantone yang sesuai merek—kami mengupayakan cetakan yang akurat, hidup, dan konsisten agar kemasan Anda terlihat profesional dan sesuai merek.',
        text: 'Kemampuan kami mencakup cetak pada karton dan kotak bergelombang: logo, grafis, teks, dan barcode. Kami bekerja sesuai artwork dan spesifikasi Anda agar hasil akhir memenuhi harapan ritel dan ekspor.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.'
      },
      finishingOption: {
        heading: 'Lem, Staples, atau Jahit: Selesaikan Sesuai Cara Anda.',
        description: 'Kami menawarkan dua opsi finishing untuk kotak Anda: lem atau staples dan jahitan. Pilih yang sesuai produk dan kebutuhan penanganan Anda.',
        seeMore: 'Lihat selengkapnya',
        aboutMainHeading: "Lem, Staples, atau Jahit. Kami menawarkan dua opsi finishing untuk kotak Anda agar Anda dapat menyesuaikan kekuatan, tampilan, dan penanganan dengan produk dan logistik Anda.",
        aboutSupporting: "Pilih lem untuk tampilan bersih dan seamless, atau staples dan jahitan untuk penutupan yang kuat dan tahan lama. Cocok untuk berbagai kebutuhan kemasan ritel, display, dan pengiriman.",
        aboutCta: 'Hubungi Kami',
        title: 'Lem, Staples, atau Jahit.',
        intro: 'Kami menawarkan dua opsi finishing utama untuk kotak Anda agar Anda dapat menyesuaikan kekuatan, tampilan, dan penanganan dengan produk dan logistik Anda.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.',
        glue: 'Lem',
        glueText: 'Finishing lem merekatkan panel kotak untuk tampilan bersih dan seamless. Cocok untuk kemasan ritel dan display yang mengutamakan finishing halus.',
        staples: 'Staples atau Jahit',
        staplesText: 'Staples atau jahitan memberikan penutupan yang kuat dan tahan lama. Ideal untuk beban berat, pengiriman, dan penggunaan ulang yang membutuhkan daya rekat ekstra.'
      },
      deliveryService: {
        heading: 'Dari Kota ke Negara. Dari Pulau ke Dunia.',
        description: 'Kami mengirim dalam kota, luar kota, antarpulau, dan internasional. Armada kami mendukung kemasan Anda dari gudang ke tujuan.',
        seeMore: 'Lihat selengkapnya',
        aboutMainHeading: "Dari Kota ke Negara. Dari Pulau ke Dunia. Kami mengirim dalam kota, luar kota, antarpulau, dan internasional.",
        aboutSupporting: "Kami menawarkan cakupan pengiriman dalam berbagai skala: dalam kota, luar kota, antarpulau, dan internasional. Armada kami mencakup truk dan kendaraan yang sesuai untuk muatan karton dan kemasan. Kami bekerja dengan mitra tepercaya agar barang Anda sampai ke konsumen akhir dengan aman dan tepat waktu.",
        aboutCta: 'Hubungi Kami',
        title: 'Dari Kota ke Negara. Dari Pulau ke Dunia.',
        intro: 'Kami menawarkan cakupan pengiriman dalam berbagai skala: dalam kota untuk rute lokal, luar kota untuk wilayah terdekat, antarpulau untuk domestik pulau ke pulau, dan internasional untuk ekspor dan pengiriman luar negeri. Setiap tingkatan disesuaikan dengan volume, timeline, dan tujuan Anda.',
        text: 'Armada kami mencakup truk dan kendaraan yang sesuai untuk muatan karton dan kemasan—dari van kecil untuk dalam kota dan luar kota hingga truk lebih besar untuk antarpulau dan kargo internasional ke pelabuhan. Kami bekerja dengan mitra tepercaya bila diperlukan agar barang Anda sampai ke konsumen akhir dengan aman dan tepat waktu.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.'
      },
      service: {
        heroTitle: 'Dari Konsep ke Pengiriman: Kami Siap Mendukung Anda',
        heroSubtitle: 'layanan kemasan komprehensif yang disesuaikan dengan kebutuhan Anda',
        title: 'Layanan Kami',
        text: 'Konten tentang layanan yang ditawarkan akan ditambahkan di sini.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.'
      },
      product: {
        heroTitle: 'Dari Kotak ke Solusi: Jelajahi Apa yang Kami Buat',
        heroSubtitle: 'jelajahi rangkaian produk kami secara komprehensif',
        title: 'Produk Kami',
        text: 'Konten tentang produk dan kategori produk akan ditambahkan di sini.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.'
      },
      guarantee: {
        heading: 'Kualitas yang Bisa Anda Percaya: Komitmen Kami, Dijamin',
        description: 'Kami mendukung setiap kotak yang kami buat. Dari material hingga pengiriman—jaminan kami mencakup kualitas, konsistensi, dan ketenangan pikiran Anda.',
        seeMore: 'Lihat selengkapnya',
        title: 'Garansi Kami',
        intro: 'Kami mendukung setiap pesanan dengan komitmen yang jelas. Di bawah ini adalah tiga pilar jaminan kami: pemesanan fleksibel, pengembalian yang adil, dan kualitas konsisten.',
        noMinimalOrder: 'Tanpa Minimal Pesanan',
        noMinimalOrderText: 'Pesan sesuai jumlah yang Anda butuhkan: tanpa minimum. Baik untuk uji coba dalam jumlah kecil atau produksi besar untuk ekspor—kami mengakomodasi volume Anda tanpa memaksa over-order.',
        productRejectReturned: 'Produk Ditolak Dikembalikan',
        productRejectReturnedText: 'Jika produk tidak memenuhi spesifikasi yang disepakati atau cacat, kami menerima pengembalian. Kami menangani pengembalian tolak secara adil dan bekerja sama dengan Anda untuk memperbaiki atau mengganti pesanan.',
        productQuality: 'Kualitas Produk',
        productQualityText: 'Kami berkomitmen pada material dan pengerjaan yang memenuhi standar ekspor dan laboratorium. Spesifikasi karton, foam, pelindung tepi, dan sarang lebah dikontrol agar Anda menerima kemasan yang konsisten dan andal.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.'
      },
      howToOrder: {
        heading: 'Langkah Sederhana Memesan',
        description: 'Sampaikan kebutuhan Anda, dapatkan penawaran, konfirmasi pesanan—sisanya kami yang urus. Kami menjaga proses tetap jelas dan sederhana agar Anda fokus pada bisnis.',
        seeMore: 'Lihat selengkapnya',
        title: 'Cara Memesan',
        intro: 'Ikuti langkah ini untuk memesan kemasan kustom. Kami menjaga proses tetap sederhana dan tetap berkomunikasi di setiap tahap.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.',
        step1Title: 'Hubungi kami via email atau telepon',
        step1Text: 'Gunakan alamat email dan nomor telepon yang tertera di situs ini. Kami akan merespons dengan cepat dan memandu langkah selanjutnya.',
        step2Title: 'Sampaikan model atau material yang Anda butuhkan',
        step2Text: 'Beritahu jenis kemasan yang Anda butuhkan: model kotak, dimensi, atau material (mis. karton, foam, sarang lebah). Semakin detail yang Anda berikan, semakin baik kami dapat memenuhi kebutuhan Anda.',
        step3Title: 'Tentukan jumlah dan timeline',
        step3Text: 'Beritahu berapa unit yang Anda butuhkan dan kapan. Kami akan mengonfirmasi kelayakan dan mengusulkan jadwal produksi dan pengiriman.',
        step4Title: 'Minta sampel untuk meminimalkan kesalahan',
        step4Text: 'Sebelum memulai pesanan penuh, kami dapat mengirim sampel yang Anda butuhkan. Ini membantu menyelaraskan desain, material, dan finishing serta mengurangi risiko salah paham.',
        step5Title: 'Tetap berkomunikasi: email, telepon, atau tatap muka',
        step5Text: 'Kami berkomunikasi via email atau nomor perusahaan agar Anda mudah menghubungi kami. Kami juga siap mengatur pertemuan tatap muka bila itu lebih baik untuk Anda.'
      },
      gallery: {
        heading: 'Setiap Kotak Bercerita: Lihat Karya Kami',
        description: 'Tampilan visual solusi kemasan kami. Dari kotak dan finishing hingga proyek nyata dan pengiriman.',
        seeMore: 'Lihat selengkapnya',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.',
        imageAlt: 'Gambar galeri'
      },
      articles: {
        heading: 'Artikel Kemasan: Insight dan Panduan',
        description: 'Kumpulan artikel tentang kemasan kustom, standar industri, dan praktik terbaik. Baca panduan dan insight kami untuk solusi kemasan yang tepat bagi bisnis Anda.',
        seeMore: 'Lihat selengkapnya',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.',
        featuredTitle: 'Artikel Unggulan',
        viewAllLabel: 'Lihat semua artikel di Medium',
        readTimeLabel: 'menit baca',
        featured: [
          {
            title: 'Dari Gudang ke Tangan Pelanggan: Mengapa Corrugated Box Adalah Investasi Strategis, Bukan Sekadar Biaya',
            date: 'Maret 2026',
            readMinutes: 4,
            bodyBlocks: [
              { type: 'image', image: 'artikel-1', alt: 'Visual artikel corrugated box 1' },
              { type: 'paragraph', text: 'Bayangkan pelanggan Anda telah menunggu berhari-hari untuk produk yang mereka pesan. Saat paket tiba, hal pertama yang mereka sentuh dan nilai bukan produknya, melainkan kemasannya. Sebelum pelanggan melihat kualitas isi di dalamnya, mereka lebih dulu menaruh harapan pada outer packaging. Di sinilah corrugated box membuktikan perannya, bukan kardus biasa, melainkan garda terdepan dalam menjaga reputasi bisnis Anda.' },
              { type: 'heading', text: 'Mengapa Corrugated Box Menjadi Pilihan Terbaik?' },
              { type: 'paragraph', text: 'Dalam dunia bisnis yang kompetitif, pemilihan kemasan luar adalah keputusan strategis. Berikut adalah alasannya:' },
              {
                type: 'list',
                items: [
                  'Perlindungan Maksimal (Zero Damage Policy): Strukturnya tahan terhadap tekanan tumpukan (stacking) dan mampu meredam benturan keras.',
                  'Efisiensi Logistik & Operasional: Corrugated box sangat ringan dan bisa disimpan dalam kondisi flat (datar), sehingga menghemat ongkos kirim dan ruang gudang.',
                  'Kustomisasi Tanpa Batas: Ukuran bisa disesuaikan presisi agar tidak ada ruang kosong mubazir, sekaligus mendukung branding lewat desain dan logo.',
                  'Keberlanjutan (Eco-Friendly): Mudah didaur ulang dan terurai, memberi nilai tambah pada citra brand yang bertanggung jawab.'
                ]
              },
              { type: 'heading', text: 'Lebih Dari Sekedar Kardus: Sains di Balik Kekuatan' },
              { type: 'paragraph', text: 'Corrugated box dirancang secara teknis dengan lapisan bergelombang (fluting) di tengahnya yang berfungsi sebagai peredam tekanan dan benturan. Struktur ini memberikan rasio kekuatan terhadap berat yang luar biasa.' },
              { type: 'paragraph', text: 'Dalam ekosistem e-commerce dan distribusi modern, momen kebenaran terjadi saat paket sampai di depan pintu pelanggan. Sebelum mereka melihat produk Anda, mereka menilai profesionalisme bisnis Anda dari satu hal: kondisi kemasan luar.' },
              { type: 'heading', text: '1. Anatomi Kekuatan: Sains di Balik Struktur Fluting' },
              { type: 'paragraph', text: 'Mengapa corrugated box jauh lebih unggul dibandingkan karton biasa? Kekuatan utamanya terletak pada rekayasa struktur di dalamnya.' },
              {
                type: 'list',
                items: [
                  'Sistem Peredam Benturan (The Fluting Effect): Lapisan bergelombang menyerap energi mekanik dan mendistribusikan tekanan.',
                  'Ketahanan Tekan Vertikal (Stacking Strength): Struktur gelombang bertindak seperti pilar penyangga untuk penumpukan tinggi.',
                  'Rasio Kekuatan-terhadap-Berat: Proteksi maksimal dengan bobot minimal untuk efisiensi logistik.'
                ]
              },
              { type: 'heading', text: '2. Mengapa Bisnis Anda Membutuhkannya? (Analisis Keuntungan)' },
              { type: 'paragraph', text: 'Menggunakan corrugated box yang tepat bukan sekedar pengeluaran, melainkan langkah preventif untuk menjaga profitabilitas:' },
              { type: 'image', image: 'artikel-2', alt: 'Visual artikel corrugated box 2' },
              { type: 'paragraph', text: 'Selain aspek teknis dan operasional, penggunaan corrugated box yang tepat merupakan manifestasi komitmen perusahaan terhadap keberlanjutan lingkungan dan efisiensi biaya jangka panjang. Dengan material yang dapat didaur ulang, bisnis tidak hanya memenuhi tuntutan pasar modern yang semakin peduli ekologi, tetapi juga membantu meminimalkan jejak karbon rantai pasok. Material organik ini memberi fleksibilitas struktural yang kuat, memastikan setiap unit barang terlindungi kokoh tanpa menambah beban berat signifikan pada biaya kirim.' },
              { type: 'paragraph', text: 'Lebih jauh lagi, integrasi kemasan presisi berfungsi sebagai instrumen pengendalian risiko di tengah fluktuasi biaya logistik global. Dengan meminimalkan ruang kosong di dalam kotak, perusahaan dapat mengurangi kebutuhan material pengisi tambahan seperti bubble wrap atau styrofoam. Transformasi dari sekadar wadah pembungkus menjadi aset strategis pada akhirnya menciptakan alur distribusi yang lebih ramping, memperkuat kepercayaan pelanggan, dan menjaga margin keuntungan tetap sehat.' },
              { type: 'heading', text: '3. Keberlanjutan: Nilai Tambah di Mata Konsumen' },
              { type: 'paragraph', text: 'Di era sekarang, konsumen sangat selektif terhadap limbah plastik. Corrugated box adalah material organik yang dapat didaur ulang dan mudah terurai. Dengan memilih kemasan ini, bisnis Anda sekaligus membangun citra sebagai brand yang bertanggung jawab terhadap lingkungan.' },
              { type: 'paragraph', text: 'Komitmen keberlanjutan ini tidak berhenti pada citra positif, tetapi juga menciptakan efisiensi sirkular yang nyata bagi ekosistem bisnis. Dengan beralih ke corrugated box, perusahaan dapat menurunkan ketergantungan pada material berbasis minyak bumi seperti styrofoam atau plastik sekali pakai yang harganya fluktuatif. Setiap kemasan yang sampai ke tangan konsumen tidak berakhir sebagai beban lingkungan jangka panjang, melainkan dapat diproses kembali menjadi bahan baku produktif.' }
            ]
          }
        ]
      },
      contactPerson: {
        heading: 'Hubungi tim kami: dukungan cepat, jelas, dan andal.',
        description: 'Dapatkan panduan ahli untuk kebutuhan kemasan, spesifikasi pengiriman, dan solusi kustom. Tim kami merespons dengan cepat untuk membantu Anda menemukan kemasan karton box yang tepat sesuai standar ekspor dan laboratorium.',
        viewLocations: 'Lihat Lokasi Kami',
        marketingOffice: 'Kantor Pemasaran',
        productionWarehouse: 'Gudang Produksi',
        openInMaps: 'Buka di Google Maps',
        visitProfile: 'Kunjungi Profil',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.'
      },
      noMinimalOrder: {
        heading: 'Tanpa Minimal Pesanan',
        description: 'Garansi dan kebijakan kami dirancang untuk memberi Anda keyakinan pada setiap pesanan dan pengiriman.',
        seeMore: 'Lihat selengkapnya',
        title: 'Tanpa Minimal Pesanan',
        text: 'Konten untuk Tanpa Minimal Pesanan akan ditambahkan di sini.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.'
      },
      productRejectReturned: {
        heading: 'Produk Ditolak Dikembalikan',
        description: 'Garansi dan kebijakan kami dirancang untuk memberi Anda keyakinan pada setiap pesanan dan pengiriman.',
        seeMore: 'Lihat selengkapnya',
        title: 'Produk Ditolak Dikembalikan',
        text: 'Konten untuk Produk Ditolak Dikembalikan akan ditambahkan di sini.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.'
      },
      guaranteeProductQuality: {
        heading: 'Kualitas Produk',
        description: 'Garansi dan kebijakan kami dirancang untuk memberi Anda keyakinan pada setiap pesanan dan pengiriman.',
        seeMore: 'Lihat selengkapnya',
        title: 'Kualitas Produk',
        text: 'Konten untuk Kualitas Produk akan ditambahkan di sini.',
        videoUnsupported: 'Browser Anda tidak mendukung pemutaran video.'
      }
    }
  },
  en: {
    nav: {
      menu: 'MENU',
      switchToEn: 'EN',
      switchToId: 'ID',
      ariaSwitchEn: 'Switch to English',
      ariaSwitchId: 'Ganti ke Bahasa Indonesia'
    },
    menu: {
      groups: [
        [
          { label: 'Home', path: '/', icon: 'home' },
          {
            label: 'Organization',
            icon: 'grid',
            children: [
              { label: 'Company', path: '/organization/company' },
              { label: 'Owner Profile', path: '/organization/owner-profile' },
              { label: 'Organization Culture', path: '/organization/organization-culture' }
            ]
          },
          {
            label: 'Product',
            icon: 'box',
            children: [
              { label: 'Outer Product', path: '/product/outer-product' },
              { label: 'Product Accessories', path: '/product/product-accessories' },
              { label: 'Product Quality', path: '/product/product-quality' }
            ]
          },
          {
            label: 'Service',
            icon: 'tool',
            children: [
              { label: 'Custom Packaging', path: '/service/custom-packaging' },
              { label: 'Custom Printing', path: '/service/custom-printing' },
              { label: 'Finishing Option', path: '/service/finishing-option' },
              { label: 'Delivery Service', path: '/service/delivery-service' }
            ]
          },
          { label: 'Guarantee', path: '/guarantee', icon: 'shield' },
          { label: 'How To Order', path: '/how-to-order', icon: 'list' },
          { label: 'Gallery', path: '/gallery', icon: 'image' },
          { label: 'Articles', path: '/articles', icon: 'article' }
        ],
        [
          { label: 'Contact Person', path: '/contact-person', icon: 'user' }
        ]
      ]
    },
    hero: {
      heading: 'Haccbox: Custom Packaging Solutions for Export & Laboratory Standards',
      description: 'Connecting producers and customers with high-quality custom packaging solutions. We specialize in carton box packaging for the furniture industry, meeting export and laboratory standards with safe, durable, and environmentally friendly materials.',
      learnMore: 'Learn more',
      videoUnsupported: 'Your browser does not support the video tag.'
    },
    contact: {
      heading: 'NEW BUSINESS INQUIRIES',
      logoAlt: 'Haccbox Logo'
    },
    certification: {
      title: 'Certifications that back our quality, strength, and responsible sourcing.',
      label: 'CERTIFICATION',
      doubleWall: { title: 'Double Wall', description: 'This certification ensures that our cartons meet construction standards and shipping requirements, with burst strength testing up to 200 lbs per square inch, maximum size of 57.7 inches, and gross weight of 11.6 lbs. These cartons are safe for shipping products that require extra protection.' },
      fsc: { title: 'FSC', description: 'FSC certification ensures that the raw materials we use, such as wood or paper, come from forests managed sustainably and do not harm the environment, local communities, or local economies. FSC-certified products support forest conservation and the long-term sustainability of natural resources.' }
    },
    category: {
      guarantee: 'Guarantee',
      howToOrder: 'How To Order',
      gallery: 'Gallery'
    },
    runningText: {
      professional: 'Professional',
      disciplined: 'Disciplined',
      growing: 'Growing'
    },
    pages: {
      company: {
        heading: 'Our Company: Growth, Milestones, and Commitment to Quality',
        description: 'From our founding to today, we have built a company focused on reliable custom packaging and export-ready solutions. Discover our journey, key milestones, and the values that drive us to deliver quality and trust to every partner.',
        seeMore: 'See more',
        aboutMainHeading: "We're your dedicated partner in quality custom packaging solutions. We're committed to connecting producers and customers with carton box packaging that meets export and laboratory standards.",
        aboutSupporting: "With unwavering dedication, we've completed hundreds of packaging projects, each one a testament to our commitment to innovation, quality, and sustainability. From furniture industry to specific needs, we're ready to be your reliable partner.",
        aboutCta: 'Contact Us',
        journey: 'Our Journey',
        intro: 'Haccbox is the brand identity of CV. Cahaya Abadi Habsoro, a trusted name in quality packaging and distribution, serving producers and customers with custom solutions.',
        text1: 'Cahaya Abadi markets and distributes high-quality carton box packaging for the furniture industry. We are part of the Mitra Persada Carton Box group, in the industry since 2012.',
        text2: 'In 2021, Cahaya Abadi was established to bridge producers and customers with custom packaging that meets export and lab standards, plus complementary solutions like styrofoam for optimal shipping protection.',
        text3: 'We keep innovating with safe, durable, and eco-friendly packaging. In 2025, we launched Haccbox as our new brand to deliver customizable packaging design and more precise, professional service.',
        historyTitle: 'Our Journey',
        milestone2012: '2012 – Mitra Persada Carton Box',
        milestone2012Text: 'Part of the Mitra Persada Carton Box group, in the industry since 2012. We market and distribute high-quality carton box packaging for the furniture industry.',
        milestone2021: '2021 – Cahaya Abadi',
        milestone2021Text: 'Cahaya Abadi was founded to bridge producers and customers with custom packaging meeting export and lab standards. We also produce styrofoam and other packaging complements for optimal shipping protection.',
        milestone2025: '2025 – Haccbox',
        milestone2025Text: 'Launched Haccbox as our new brand identity for customizable packaging design. Safe, durable, eco-friendly solutions with more precise, professional service.',
        videoUnsupported: 'Your browser does not support the video tag.'
      },
      ownerProfile: {
        heading: 'Meet the Leadership Behind Haccbox',
        description: 'The people who guide our vision and daily operations. Get to know the faces behind Haccbox: their experience, values, and commitment to delivering quality packaging solutions and lasting partnerships.',
        seeMore: 'See more',
        aboutMainHeading: "Meet the leadership behind Haccbox. We build a strong organisational culture on three pillars: Professionalism, Discipline, and Growing.",
        aboutSupporting: "\"We run every aspect of our business to the highest standards, with transparency and strong collaboration. Through these three pillars, we're committed to being an adaptive partner delivering high-quality, sustainable packaging.\"",
        aboutCta: 'Contact Us',
        title: 'Owner Profile',
        intro: 'We build a strong organisational culture on three pillars: Professionalism, Discipline, and Growing, ensuring sustainable, valuable business for our customers, especially in the furniture industry.',
        text1: 'We run every aspect of our business to the highest standards, with transparency and strong collaboration, so our products meet industry expectations. Through a culture of discipline, we keep to timelines, production precision, and compliance with export and laboratory testing standards.',
        text2: 'As the industry evolves, we keep innovating in technology, materials, and strategy to deliver better packaging solutions. Through these three pillars, Cahaya Abadi is committed to being an adaptive, progressive partner, delivering high-quality, sustainable packaging.',
        attribution: 'Moh Akhim Bayu Habsoro, S.E. MBA',
        attributionRole: 'President Director',
        videoUnsupported: 'Your browser does not support the video tag.'
      },
      organizationCulture: {
        heading: 'Values, Beliefs, and How We Work',
        description: 'The principles that guide our team every day. We believe in quality, transparency, and long-term partnerships. Here is how we turn those values into action: in the way we collaborate, serve customers, and grow together.',
        seeMore: 'See more',
        title: 'Organization Culture',
        intro: 'Our values and how we care for our people reflect the health of our company. We stand on three pillars: Professional, Disciplined, and Growing.',
        professional: 'Professional',
        professionalDesc: 'We run every aspect of our business to the highest standards, with transparency and strong collaboration, so our products meet industry expectations.',
        disciplined: 'Disciplined',
        disciplinedDesc: 'Through a culture of discipline, we keep to timelines, production precision, and full compliance with export and laboratory testing standards.',
        growing: 'Growing',
        growingDesc: 'As the industry evolves, we keep innovating in technology, materials, and strategy to deliver better packaging solutions.',
        videoUnsupported: 'Your browser does not support the video tag.'
      },
      outerProduct: {
        heading: 'Shapes That Protect: Outer Packaging Built for Export',
        description: 'Explore our product range and packaging solutions tailored for the furniture industry and export standards.',
        seeMore: 'See more',
        title: 'Outer Product',
        intro: 'Box and empty types for display, shipping, and custom packaging. Choose from our range of shapes and styles.',
        videoUnsupported: 'Your browser does not support the video tag.',
        products: [
          { name: 'L Shape', description: 'L-shaped rigid box for display or partition. Ideal for retail presentation and modular layouts.' },
          { name: 'Box A1', description: 'Classic A1 style box for retail and shipping. Durable construction for safe transport.' },
          { name: 'Box Miring', description: 'Slanted-top box for distinctive presentation. Adds visual interest to shelf and counter displays.' },
          { name: 'Die Cut', description: 'Custom die-cut window or shape for visibility. Showcase your product while keeping it protected.' },
          { name: 'Empty Box', description: 'Flat-packed empty box for assembly. Cost-effective and easy to store until use.' },
          { name: 'Bottom', description: 'Bottom-only base for trays or inserts. Versatile base unit for layered packaging.' },
          { name: 'Top Bottom', description: 'Separate top and bottom for easy access. Perfect for reusable or frequently opened packaging.' }
        ]
      },
      productAccessories: {
        heading: 'Every Detail Counts: Accessories That Complete the Box',
        description: 'Complementary products outside the box: wraps, boards, cores, and supports that complete your packaging solution.',
        seeMore: 'See more',
        title: 'Product Accessories',
        intro: 'Complementary products outside the box: wraps, boards, cores, and supports for complete packaging.',
        videoUnsupported: 'Your browser does not support the video tag.',
        products: [
          { name: 'Hexa Wrap', description: 'Hexagonal wrap for cushioning and protection around products. Ideal as an outer complement to boxes for fragile or irregular items.' },
          { name: 'Honeycomb Board', description: 'Lightweight honeycomb board for internal reinforcement and void fill. Complements box structure with strength without extra weight.' },
          { name: 'Honeycomb Core', description: 'Honeycomb core material for panels and inserts. Used alongside boxes to add rigidity and protection in shipping and display.' },
          { name: 'Paper Core', description: 'Paper core for tubes, rolls, and structural support. A versatile accessory outside the box for wrapping and core applications.' },
          { name: 'Styrofoam', description: 'Protective styrofoam that absorbs impact and keeps products stable inside the package. Suitable for sensitive and breakable items during shipping.' }
        ]
      },
      productQuality: {
        heading: 'Built to Last: Quality You Can Measure',
        description: 'Our commitment to quality in every material and specification. From carton grade to foam, edge protectors, and honeycomb board, we ensure consistent standards for your packaging.',
        seeMore: 'See more',
        aboutMainHeading: "Our commitment to quality in every material and specification. From carton grade to foam, edge protectors, and honeycomb board—we ensure consistent standards for your packaging.",
        aboutSupporting: "We maintain strict quality standards across materials and dimensions. Below are the key specifications we apply to deliver reliable, export-ready packaging.",
        aboutCta: 'Contact Us',
        title: 'Product Quality',
        intro: 'We maintain strict quality standards across materials and dimensions. Below are the key specifications we apply to deliver reliable, export-ready packaging.',
        videoUnsupported: 'Your browser does not support the video tag.',
        cartonQuality: 'Carton Quality',
        cartonQualityText: 'Carton grade and grammage are selected to meet strength and print requirements. We use quality board suitable for furniture and export shipping.',
        foamQuality: 'Foam Quality',
        foamQualityText: 'Foam density and type are specified for cushioning and protection. We supply foam that meets durability and safety standards for your products.',
        edgeProtector: 'Edge Protector Thickness',
        edgeProtectorText: 'Edge protector thickness is chosen to protect corners and edges during handling and transport. Consistent thickness ensures reliable protection.',
        honeycombThickness: 'Honeycomb Board Thickness',
        honeycombThicknessText: 'Honeycomb board thickness is specified for rigidity and void fill. We use honeycomb that meets the required thickness for structural support and protection.'
      },
      customPackaging: {
        heading: 'Your Product, Your Packaging.',
        description: 'We customize packaging to your specifications: shape, size, structure, and finish. From L-shape and box styles to die-cut and empty box, we deliver solutions that fit your product and brand.',
        seeMore: 'See more',
        aboutMainHeading: "Your Product, Your Packaging. We customize packaging to your specifications: shape, size, structure, and finish.",
        aboutSupporting: "We tailor packaging to your needs. Custom dimensions, materials, and printing can be combined. We work to export and lab standards so your packaging is reliable for shipping and display.",
        aboutCta: 'Contact Us',
        title: 'Your Product, Your Packaging.',
        intro: 'We tailor packaging to your needs. Our capability covers a range of box and empty types, from L-shape and Box A1 to slanted-top, die-cut, empty box, bottom, and top-bottom, so you get the right structure, size, and finish for your product and industry.',
        text: 'Custom dimensions, materials, and printing can be combined with these formats. We work to export and lab standards so your packaging is reliable for shipping and display.',
        videoUnsupported: 'Your browser does not support the video tag.'
      },
      customPrinting: {
        heading: 'Quality Color, On Your Box.',
        description: 'We accept box printing to your design, with a focus on color quality. From logo and graphics to full-color print, we deliver sharp, consistent results on your packaging.',
        seeMore: 'See more',
        aboutMainHeading: "Quality Color, On Your Box. We accept box printing to your design, with a focus on color quality.",
        aboutSupporting: "We take on box printing with an emphasis on color quality. Our capability covers printing on carton and corrugated box: logos, graphics, text, and barcodes. We work to your artwork and specifications so the final result meets retail and export expectations.",
        aboutCta: 'Contact Us',
        title: 'Quality Color, On Your Box.',
        intro: 'We take on box printing with an emphasis on color quality. Whether it\'s spot color, full-color process, or brand-matched Pantone, we aim for accurate, vivid, and consistent print so your packaging looks professional and on-brand.',
        text: 'Our capability covers printing on carton and corrugated box: logos, graphics, text, and barcodes. We work to your artwork and specifications so the final result meets retail and export expectations.',
        videoUnsupported: 'Your browser does not support the video tag.'
      },
      finishingOption: {
        heading: 'Glue, Staples, or Stitching: Finish It Your Way.',
        description: 'We offer two finishing options for your box: glue or staples and stitching. Choose the one that fits your product and handling needs.',
        seeMore: 'See more',
        aboutMainHeading: "Glue, Staples, or Stitching. We offer two finishing options for your box so you can match strength, appearance, and handling to your product and logistics.",
        aboutSupporting: "Choose glue for a clean, seamless look, or staples and stitching for a strong, durable closure. Suited for retail, display, and shipping packaging needs.",
        aboutCta: 'Contact Us',
        title: 'Glue, Staples, or Stitching.',
        intro: 'We offer two main finishing options for your box so you can match strength, appearance, and handling to your product and logistics.',
        videoUnsupported: 'Your browser does not support the video tag.',
        glue: 'Glue',
        glueText: 'Glue finishing bonds the box panels for a clean, seamless look. Suited for retail and display packaging where a smooth finish is preferred.',
        staples: 'Staples or Stitching',
        staplesText: 'Staples or stitching gives a strong, durable closure. Ideal for heavier loads, shipping, and reuse where extra hold is needed.'
      },
      deliveryService: {
        heading: 'From City to Country. From Island to World.',
        description: 'We deliver within the city, out of town, inter-island, and internationally. Our fleet supports your packaging from warehouse to destination.',
        seeMore: 'See more',
        aboutMainHeading: "From City to Country. From Island to World. We deliver within the city, out of town, inter-island, and internationally.",
        aboutSupporting: "We offer delivery coverage at different scales: in-city, out-of-town, inter-island, and international. Our fleet includes trucks and vehicles suited to carton and packaging loads. We work with trusted partners so your goods reach the end customer safely and on time.",
        aboutCta: 'Contact Us',
        title: 'From City to Country. From Island to World.',
        intro: 'We offer delivery coverage at different scales: in-city for local runs, out-of-town for nearby regions, inter-island for domestic island-to-island, and international for export and overseas shipments. Each tier is set up to match your volume, timeline, and destination.',
        text: 'Our fleet includes trucks and vehicles suited to carton and packaging loads, from small vans for in-city and out-of-town to larger trucks for inter-island and port-bound international cargo. We work with trusted partners where needed so your goods reach the end customer safely and on time.',
        videoUnsupported: 'Your browser does not support the video tag.'
      },
      service: {
        heroTitle: "From Concept to Delivery: We've Got You Covered",
        heroSubtitle: 'comprehensive packaging services tailored to your needs',
        title: 'Our Services',
        text: 'Content about services offered will be added here.',
        videoUnsupported: 'Your browser does not support the video tag.'
      },
      product: {
        heroTitle: 'From Box to Solution: Explore What We Make',
        heroSubtitle: 'explore our comprehensive product range',
        title: 'Our Products',
        text: 'Content about products and product categories will be added here.',
        videoUnsupported: 'Your browser does not support the video tag.'
      },
      guarantee: {
        heading: 'Quality You Can Trust: Our Commitment, Guaranteed',
        description: 'We stand behind every box we make. From materials to delivery, our guarantee covers quality, consistency, and your peace of mind.',
        seeMore: 'See more',
        title: 'Our Guarantee',
        intro: 'We back every order with clear commitments. Below are the three pillars of our guarantee: flexible ordering, fair returns, and consistent quality.',
        noMinimalOrder: 'No Minimal Order',
        noMinimalOrderText: 'Order the quantity you need: no minimum. Whether you need a small batch for a trial or a large run for export, we accommodate your volume without forcing you to over-order.',
        productRejectReturned: 'Product Reject Returned',
        productRejectReturnedText: 'If products do not meet agreed specifications or are defective, we take them back. We handle reject returns fairly and work with you to correct the issue or replace the order.',
        productQuality: 'Product Quality',
        productQualityText: 'We commit to materials and workmanship that meet export and laboratory standards. Carton, foam, edge protector, and honeycomb specifications are controlled so you receive consistent, reliable packaging.',
        videoUnsupported: 'Your browser does not support the video tag.'
      },
      howToOrder: {
        heading: 'Simple Steps to Order',
        description: 'Tell us your needs, get a quote, confirm your order, and we handle the rest. We keep the process clear and straightforward so you can focus on your business.',
        seeMore: 'See more',
        title: 'How To Order',
        intro: 'Follow these steps to place your custom packaging order. We keep the process simple and stay in touch at every stage.',
        videoUnsupported: 'Your browser does not support the video tag.',
        step1Title: 'Contact us by email or phone',
        step1Text: 'Reach out using the email address and phone number listed on this site. We will respond promptly and guide you through the next steps.',
        step2Title: 'Tell us the model or material you need',
        step2Text: 'Share the type of packaging you need: box model, dimensions, or material (e.g. carton, foam, honeycomb). The more detail you provide, the better we can match your requirements.',
        step3Title: 'Specify quantity and timeline',
        step3Text: 'Let us know how many units you need and when you need them. We will confirm feasibility and propose a production and delivery schedule.',
        step4Title: 'Request a sample to minimise errors',
        step4Text: 'Before starting a full order, we can send you a sample of what you need. This helps align on design, material, and finish and reduces the risk of misunderstandings.',
        step5Title: 'Stay in touch: email, phone, or in person',
        step5Text: 'We communicate via email or our company number so you can reach us easily. We are also happy to arrange face-to-face meetings when that works better for you.'
      },
      gallery: {
        heading: 'Where Every Box Tells a Story: See Our Work in Action',
        description: 'Visual showcase of our packaging solutions. From boxes and finishes to real projects and deliveries.',
        seeMore: 'See more',
        videoUnsupported: 'Your browser does not support the video tag.',
        imageAlt: 'Gallery image'
      },
      articles: {
        heading: 'Packaging Articles: Insights and Guides',
        description: 'A collection of articles on custom packaging, industry standards, and best practices. Read our guides and insights for the right packaging solutions for your business.',
        seeMore: 'See more',
        videoUnsupported: 'Your browser does not support the video tag.',
        featuredTitle: 'Featured Articles',
        viewAllLabel: 'View all articles on Medium',
        readTimeLabel: 'min read',
        featured: [
          {
            title: 'From Warehouse to Doorstep: Why Corrugated Boxes Are a Strategic Investment, Not Just a Cost',
            date: 'March 2026',
            readMinutes: 4,
            bodyBlocks: [
              { type: 'image', image: 'artikel-1', alt: 'Corrugated box article visual 1' },
              { type: 'paragraph', text: 'Imagine your customer has been waiting for days for their order. When the package arrives, the first thing they touch and judge is not the product, but the packaging. Before they see what is inside, they place their expectation on the outer packaging. This is where corrugated boxes prove their role: not ordinary cartons, but the front line that protects your business reputation.' },
              { type: 'heading', text: 'Why Corrugated Boxes Are the Best Choice' },
              { type: 'paragraph', text: 'In a competitive business landscape, selecting outer packaging is a strategic decision. Here is why:' },
              {
                type: 'list',
                items: [
                  'Maximum Protection (Zero Damage Policy): The structure resists stacking pressure and absorbs impact.',
                  'Logistics & Operational Efficiency: Lightweight and flat-pack storage help cut freight and warehouse costs.',
                  'Unlimited Customization: Precise sizing avoids wasted void space and strengthens branding through print design.',
                  'Sustainability (Eco-Friendly): Easy to recycle and decompose, adding value to a responsible brand image.'
                ]
              },
              { type: 'heading', text: 'More Than a Box: The Science Behind the Strength' },
              { type: 'paragraph', text: 'Corrugated boxes are engineered with a fluted middle layer that acts as a shock and pressure absorber. This structure provides an exceptional strength-to-weight ratio.' },
              { type: 'paragraph', text: 'In modern e-commerce and distribution, the moment of truth happens at the doorstep. Before customers evaluate your product, they evaluate your professionalism through the condition of your outer packaging.' },
              { type: 'heading', text: '1. Strength Anatomy: The Fluting Structure' },
              { type: 'paragraph', text: 'Why are corrugated boxes stronger than regular cartons? The key lies in their internal structural engineering.' },
              {
                type: 'list',
                items: [
                  'Shock Absorption (The Fluting Effect): The fluted layer absorbs mechanical energy and distributes pressure.',
                  'Vertical Stacking Strength: The flute structure acts like support columns for safer high stacking.',
                  'Strength-to-Weight Ratio: Maximum protection with minimal weight for logistics efficiency.'
                ]
              },
              { type: 'heading', text: '2. Why Your Business Needs It (Benefit Analysis)' },
              { type: 'paragraph', text: 'Using the right corrugated box is not merely a cost, but a preventive step to protect profitability:' },
              { type: 'image', image: 'artikel-2', alt: 'Corrugated box article visual 2' },
              { type: 'paragraph', text: 'Beyond technical and operational benefits, proper corrugated box usage reflects a company commitment to environmental sustainability and long-term cost efficiency. With recyclable materials, businesses do not only respond to modern market expectations, but also help reduce supply chain carbon footprint. This organic material offers strong structural flexibility, ensuring each shipped unit stays protected without significantly increasing shipping weight.' },
              { type: 'paragraph', text: 'Furthermore, precise packaging integration acts as smart risk control amid volatile global logistics costs. By minimizing empty space in the box, companies reduce dependency on additional fillers such as bubble wrap or styrofoam. This shift from simple packaging container to strategic asset creates a leaner distribution flow, strengthens customer trust, and keeps margins healthier in a competitive market.' },
              { type: 'heading', text: '3. Sustainability: Added Value in Consumer Eyes' },
              { type: 'paragraph', text: 'Today, consumers are highly selective about plastic waste. Corrugated boxes are organic materials that can be recycled and naturally decomposed. Choosing this packaging supports your image as an environmentally responsible brand.' },
              { type: 'paragraph', text: 'This sustainability commitment does not stop at positive image. It also creates real circular efficiency for the business ecosystem. By switching to corrugated boxes, companies can reduce reliance on petroleum-based materials such as styrofoam or single-use plastics with highly fluctuating prices. Each package delivered to customers is not a permanent waste burden, but can return to productive material cycles.' }
            ]
          }
        ]
      },
      contactPerson: {
        heading: 'Talk to our team: fast, clear, and reliable support.',
        description: 'Get expert guidance on your packaging needs, shipping specifications, and custom solutions. Our team responds quickly to help you find the right carton box packaging that meets your export and laboratory standards.',
        viewLocations: 'View Our Locations',
        marketingOffice: 'Marketing Office',
        productionWarehouse: 'Production Warehouse',
        openInMaps: 'Open in Google Maps',
        visitProfile: 'Visit Profile',
        videoUnsupported: 'Your browser does not support the video tag.'
      },
      noMinimalOrder: {
        heading: 'No Minimal Order',
        description: 'Our guarantees and policies designed to give you confidence in every order and delivery.',
        seeMore: 'See more',
        title: 'No Minimal Order',
        text: 'Content for No Minimal Order will be added here.',
        videoUnsupported: 'Your browser does not support the video tag.'
      },
      productRejectReturned: {
        heading: 'Product Reject Returned',
        description: 'Our guarantees and policies designed to give you confidence in every order and delivery.',
        seeMore: 'See more',
        title: 'Product Reject Returned',
        text: 'Content for Product Reject Returned will be added here.',
        videoUnsupported: 'Your browser does not support the video tag.'
      },
      guaranteeProductQuality: {
        heading: 'Product Quality',
        description: 'Our guarantees and policies designed to give you confidence in every order and delivery.',
        seeMore: 'See more',
        title: 'Product Quality',
        text: 'Content for Product Quality will be added here.',
        videoUnsupported: 'Your browser does not support the video tag.'
      }
    }
  }
}
