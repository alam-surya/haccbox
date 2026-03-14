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
        heading: 'Budaya Kami: Nilai, Keyakinan, dan Cara Kami Bekerja',
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
            title: 'Memilih Karton Box yang Tepat untuk Furnitur Ekspor',
            body: 'Ekspor furnitur ke pasar internasional membawa peluang besar, tetapi juga tantangan tersendiri. Salah satu faktor penentu kesuksesan pengiriman adalah kemasan. Barang harus tiba di tujuan dalam kondisi sempurna setelah perjalanan ribuan kilometer melalui pelabuhan, gudang, dan transportasi multimodal. Tanpa kemasan yang tepat, risiko kerusakan, penolakan, dan kerugian finansial akan sangat tinggi.\n\nMasalah utama yang sering muncul: furnitur memiliki bentuk, berat, dan kerapuhan yang sangat beragam—dari kursi kayu solid, meja dengan kaca, lemari berukuran besar, hingga komponen kecil yang rentan tergores. Karton yang terlalu tipis akan robek atau melesak; yang terlalu besar memboroskan space dan biaya; yang salah konstruksi tidak menahan barang dengan baik. Belum lagi persyaratan negara tujuan yang bisa menolak barang di pelabuhan jika kemasan tidak memenuhi standar.\n\nSolusinya: pilih karton berdasarkan jenis produk dan jarak pengiriman. Karton double wall direkomendasikan untuk barang berat dan ekspor; single wall cukup untuk item ringan atau pengiriman lokal. Pertimbangkan konstruksi—L-shape untuk display, box A1 untuk ritel, die-cut untuk visibilitas. Konsultasikan dengan supplier kemasan berpengalaman yang memahami standar ekspor dan dapat merekomendasikan kombinasi material serta desain yang sesuai budget Anda.\n\nKesimpulannya, investasi waktu dan dana untuk memilih karton box yang tepat sejak awal akan menghemat biaya perbaikan, klaim kerusakan, dan repackaging di kemudian hari. Kemasan yang dirancang dengan benar bukan biaya, melainkan proteksi bagi reputasi dan margin bisnis Anda.',
            image: 'galeri-02',
            date: '15 Januari 2025',
            readMinutes: 8
          },
          {
            title: 'Pentingnya Kemasan Ramah Lingkungan dalam Industri',
            body: 'Perubahan iklim dan kesadaran konsumen telah mengubah cara industri memandang kemasan. Dulu, kemasan sering dilihat hanya sebagai pembungkus—fungsinya selesai saat produk sampai. Kini, kemasan menjadi bagian dari tanggung jawab bisnis terhadap lingkungan dan masyarakat. Banyak merek besar telah berkomitmen menggunakan 100% kemasan daur ulang atau bersertifikasi dalam beberapa tahun ke depan.\n\nMasalahnya: transisi ke kemasan ramah lingkungan tidak selalu mudah. Biaya material berkelanjutan sering lebih tinggi; ketersediaan terbatas; dan ada risiko persepsi bahwa kemasan ramah lingkungan kurang protektif. Beberapa pelaku bisnis menunda karena menganggap ini hanya tren yang akan berlalu, atau merasa pasar mereka belum menuntut perubahan tersebut.\n\nSolusinya: mulai dengan langkah-langkah konkret. Pilih karton daur ulang atau bersertifikasi FSC untuk memastikan bahan baku dari hutan yang dikelola berkelanjutan. Desain kemasan yang meminimalkan material tanpa mengorbankan perlindungan—right-sizing—mengurangi waste dan biaya sekaligus. Bermitra dengan supplier yang transparan tentang sumber bahan dan proses produksi akan memudahkan pelaporan keberlanjutan kepada stakeholder.\n\nKesimpulannya, kemasan ramah lingkungan bukan lagi opsional. Regulasi akan semakin ketat, konsumen semakin kritis, dan merek yang proaktif akan menikmati keunggulan reputasi. Investasi pada kemasan berkelanjutan adalah investasi jangka panjang bagi bisnis yang ingin tetap relevan dan bertanggung jawab.',
            image: 'galeri-02',
            date: '8 Januari 2025',
            readMinutes: 7
          },
          {
            title: 'Kemasan Kustom: Solusi untuk Produk Unik',
            body: 'Tidak semua produk cocok dengan kotak standar. Furnitur dengan bentuk irregular, produk kombinasi, atau item dengan bagian yang menonjol membutuhkan kemasan yang dirancang khusus agar terlindungi dengan baik selama pengiriman. Menggunakan kemasan generik untuk produk unik sering berujung pada kerusakan, waste material, atau biaya pengiriman yang membengkak karena ukuran tidak efisien.\n\nMasalah yang kerap dialami: kemasan standar terlalu besar sehingga membutuhkan banyak filler dan biaya shipping naik; atau terlalu kecil sehingga barang tertekan dan rusak. Beberapa produsen memaksakan produk mereka ke dalam kotak yang tidak cocok, lalu mengandalkan bubble wrap dan styrofoam berlebihan—solusi yang tidak ideal baik dari segi proteksi, biaya, maupun lingkungan.\n\nSolusinya: kemasan kustom yang disesuaikan dengan dimensi dan bentuk produk. Desain bentuk, ukuran, ketebalan material, jendela display, partisi internal, dan insert pelindung—semua dapat disesuaikan. Produsen kemasan yang menawarkan layanan custom packaging dapat membuat solusi yang tepat ukuran sehingga mengurangi waste dan biaya, sambil memastikan proteksi optimal.\n\nKesimpulannya, investasi pada kemasan kustom sejak awal menghemat biaya jangka panjang melalui pengurangan kerusakan, klaim garansi, dan efisiensi pengiriman. Bekerja sama dengan produsen yang berpengalaman memastikan Anda mendapatkan solusi yang seimbang antara proteksi, biaya, dan keberlanjutan.',
            image: 'galeri-02',
            date: '2 Januari 2025',
            readMinutes: 7
          },
          {
            title: 'Honeycomb dan Perlindungan saat Pengiriman',
            body: 'Selama pengiriman, produk mengalami tekanan stacking di gudang, guncangan saat handling, dan getaran di truk atau kapal. Material pengisi dan penguat yang tepat menentukan apakah barang tiba dengan selamat atau rusak. Honeycomb—material dengan struktur sarang lebah—telah lama menjadi pilihan andalan industri kemasan karena kekuatannya yang tinggi dengan bobot sangat ringan.\n\nMasalah yang sering muncul: penggunaan material pengisi konvensional seperti styrofoam atau kertas digelembung menghasilkan volume besar dan berat tambahan, yang menaikkan biaya pengiriman. Di sisi lain, pengisi yang terlalu tipis tidak cukup melindungi dari tekanan dan benturan. Perlu keseimbangan antara proteksi, berat, dan biaya.\n\nSolusinya: honeycomb board dan honeycomb core. Struktur hexagonal memberikan daya tahan terhadap kompresi dan getaran yang jauh lebih baik dibanding material padat dengan berat sama. Honeycomb bisa digunakan sebagai penguat internal kotak, pengisi rongga, insert pelindung sudut, atau panel pemisah. Keunggulannya: berat minimal sehingga tidak membebani biaya shipping, dan material berbasis kertas relatif mudah didaur ulang.\n\nKesimpulannya, untuk furnitur dan barang rapuh, kombinasi karton box dengan honeycomb insert sering menjadi pilihan ideal—proteksi optimal tanpa berat berlebih. Material ini menawarkan keseimbangan antara daya tahan, keberlanjutan, dan efisiensi biaya yang sulit ditandingi oleh alternatif lain.',
            image: 'galeri-02',
            date: '28 Desember 2024',
            readMinutes: 7
          },
          {
            title: 'Standar Ekspor untuk Kemasan Karton',
            body: 'Ekspor ke pasar internasional membuka peluang besar, tetapi setiap negara tujuan memiliki persyaratan sendiri untuk kemasan. Tidak memenuhi standar tersebut bisa berakibat barang ditolak di pelabuhan, dimusnahkan, atau dikembalikan—dengan biaya dan kerugian reputasi yang besar. Memahami dan memenuhi standar ekspor sejak tahap desain kemasan adalah langkah krusial.\n\nMasalahnya: persyaratan sangat beragam. Ada standar teknis (ketebalan karton, burst strength, drop test), standar material (FSC, bebas bahan berbahaya), dan prosedur administratif (labelling, fumigasi, dokumen keaslian). Pasar Eropa dan Amerika sering meminta sertifikasi double wall dan FSC; beberapa negara Asia mewajibkan perlakuan fumigasi untuk kayu. Tanpa pemahaman yang jelas, eksportir bisa terjebak biaya repackaging di pelabuhan atau kehilangan kesepakatan bisnis.\n\nSolusinya: lakukan riset standar negara tujuan sejak awal. Sertifikasi double wall menjamin kekuatan karton melalui pengujian burst strength; FSC memastikan bahan baku dari sumber berkelanjutan. Pengujian laboratorium—drop test, climate test—memberikan bukti kepatuhan. Selain itu, pastikan labelling benar, dokumen material lengkap, dan prosedur fumigasi dipenuhi bila wajib. Bermitra dengan supplier kemasan yang berpengalaman dalam ekspor akan mempermudah seluruh proses ini.\n\nKesimpulannya, investasi pada kemasan yang memenuhi standar ekspor sejak awal jauh lebih murah daripada menanggung penolakan atau repackaging. Supplier yang memahami regulasi internasional adalah mitra strategis bagi bisnis ekspor Anda.',
            image: 'galeri-02',
            date: '20 Desember 2024',
            readMinutes: 8
          },
          {
            title: 'Packaging sebagai Bagian dari Branding',
            body: 'Saat pelanggan menerima paket, kemasan adalah hal pertama yang mereka lihat—sebelum produk itu sendiri. Pengalaman unboxing bisa meninggalkan kesan mendalam, mempengaruhi review, rekomendasi, dan loyalitas. Di era e-commerce, kemasan tidak lagi sekadar pembungkus; ia menjadi perpanjangan identitas merek Anda.\n\nMasalah yang sering terjadi: banyak bisnis mengabaikan kemasan dan memakai kotak polos atau kemasan generik. Produk berkualitas tinggi tiba dalam kotak kumal, logo tercetak samar, atau tanpa pesan apa pun—mengurangi persepsi nilai. Di sisi lain, beberapa pelaku bisnis menganggap kemasan bermerek mahal dan hanya terjangkau untuk order besar.\n\nSolusinya: custom printing pada karton—logo, warna merek, tagline, atau pesan khusus—mengubah kemasan menjadi alat branding. Dengan produsen yang fleksibel, Anda bisa mencapai tampilan profesional tanpa minimal order yang memberatkan. Pilih finishing yang sesuai: cetak 1-2 warna lebih ekonomis, full colour untuk kemasan premium. Konsistensi desain dengan identitas merek memperkuat pengenalan dan kepercayaan.\n\nKesimpulannya, kemasan bermerek adalah investasi pada persepsi kualitas. Pelanggan menghargai perhatian pada detail—kotak yang rapi dan bermerek mengomunikasikan bahwa Anda serius dengan produk dan layanan. Dalam jangka panjang, ini membangun loyalitas dan diferensiasi di pasar yang kompetitif.',
            image: 'galeri-02',
            date: '12 Desember 2024',
            readMinutes: 7
          },
          {
            title: 'Tren Kemasan Berkelanjutan di 2025',
            body: 'Tahun 2025 menjadi tonggak penting bagi industri kemasan. Regulasi global semakin ketat, konsumen semakin kritis, dan circular economy tidak lagi sekadar konsep—ia menjadi kerangka kerja yang memandu keputusan bisnis. Perusahaan yang tidak beradaptasi akan tertinggal dan menghadapi risiko reputasi serta sanksi regulasi.\n\nMasalah yang dihadapi industri: transisi ke kemasan berkelanjutan membutuhkan perubahan di seluruh rantai pasokan. Extended Producer Responsibility (EPR) mewajibkan produsen bertanggung jawab atas kemasan pasca konsumsi—termasuk program take-back dan daur ulang. Single-use plastic terus dibatasi; material yang sulit didaur ulang akan menghadapi pajak atau larangan. Bagi banyak pelaku bisnis, memahami dan memenuhi tuntutan baru ini terasa membingungkan dan mahal.\n\nSolusinya: fokus pada material yang mudah didaur ulang dan terkompos. Karton bersertifikasi FSC, kertas daur ulang pasca-konsumsi, dan desain yang meminimalkan lapisan campuran memudahkan daur ulang. Hindari kombinasi material yang sulit dipisah—misalnya plastik laminasi pada karton—karena mengurangi nilai daur ulang. Bermitra dengan supplier yang transparan tentang siklus hidup material akan memudahkan pelaporan dan kepatuhan regulasi.\n\nKesimpulannya, memulai transisi ke kemasan berkelanjutan sekarang adalah langkah proaktif yang akan menghemat biaya dan stres di masa depan. Regulasi akan semakin ketat; konsumen akan semakin memilih merek yang bertanggung jawab. Kemasan berkelanjutan bukan lagi opsi—ia adalah masa depan industri.',
            image: 'galeri-02',
            date: '5 Desember 2024',
            readMinutes: 8
          },
          {
            title: 'Fleksibilitas Pesanan: Tanpa Minimal Order',
            body: 'Memulai bisnis atau meluncurkan produk baru sering kali dimulai dengan volume kecil. Anda ingin menguji pasar, memvalidasi desain, atau memenuhi pesanan awal tanpa mengunci modal besar di inventori. Namun banyak supplier kemasan memberlakukan minimal order ratusan bahkan ribuan unit—membuat UMKM dan startup kesulitan mendapatkan kemasan kustom yang sesuai.\n\nMasalahnya: dengan minimal order tinggi, Anda terpaksa membeli lebih dari yang dibutuhkan. Modal kerja terikat di stok kemasan yang mungkin tidak terpakai jika produk gagal di pasar atau desain berubah. Alternatifnya, menggunakan kemasan generik yang kurang cocok—mengorbankan proteksi dan branding. Dilema antara efisiensi skala dan fleksibilitas menjadi penghalang bagi banyak pelaku bisnis kecil.\n\nSolusinya: cari supplier yang menawarkan kebijakan tanpa minimal order atau MO rendah. Ini memungkinkan Anda memesan sesuai kebutuhan aktual, menguji desain kemasan sebelum produksi skala penuh, dan mengelola cash flow dengan lebih baik. Pastikan supplier tetap menjaga kualitas produksi untuk order kecil—standar material dan finishing harus sama dengan order besar.\n\nKesimpulannya, fleksibilitas pesanan adalah enabler bagi pertumbuhan bisnis. Memulai dengan order kecil, memvalidasi kemasan, lalu scaling up ketika pasar terbukti—alur yang sehat dan berkelanjutan. Supplier yang memahami kebutuhan UMKM dan startup adalah mitra yang berharga bagi ekosistem bisnis.',
            image: 'galeri-02',
            date: '28 November 2024',
            readMinutes: 7
          },
          {
            title: 'Kualitas Material dan Daya Tahan Kemasan',
            body: 'Kemasan yang terlihat sama di luar bisa sangat berbeda di dalam. Grammage, jenis pulp, jumlah lapisan, dan proses produksi menentukan kekuatan karton. Menghemat pada kualitas material sering berujung pada kerusakan produk di perjalanan—dan biaya klaim, penggantian, serta reputasi yang jauh lebih besar daripada penghematan awal.\n\nMasalah yang sering terjadi: banyak pembeli fokus pada harga per kotak tanpa memahami spesifikasi material. Karton murah mungkin tipis, mudah melesak saat stacking, atau tidak tahan kelembapan—menyebabkan kerusakan yang baru terlihat saat barang sampai di tangan pelanggan. Untuk pengiriman ekspor atau barang berat, kemasan yang tidak memadai adalah resep bencana.\n\nSolusinya: pahami spesifikasi material. Karton double wall dengan sertifikasi telah diuji burst strength-nya—memberikan jaminan kinerja. Grammage (gram per meter persegi) dan lapisan memengaruhi ketahanan tekanan. Untuk kebutuhan khusus, minta sertifikat uji lab dari supplier. Bekerja dengan supplier yang transparan tentang gradasi kualitas memungkinkan Anda memilih opsi terbaik sesuai budget dan kebutuhan proteksi.\n\nKesimpulannya, investasi pada material berkualitas adalah proteksi bagi margin dan reputasi. Biaya kemasan premium umumnya terbayar melalui pengurangan kerusakan, klaim garansi, dan kepuasan pelanggan. Jangan biarkan penghematan jangka pendek mengorbankan bisnis jangka panjang.',
            image: 'galeri-02',
            date: '20 November 2024',
            readMinutes: 7
          },
          {
            title: 'Kemasan untuk E-commerce dan Pengiriman Aman',
            body: 'Produk e-commerce menjalani perjalanan yang jauh lebih panjang dan berliku dibanding penjualan offline. Dari gudang ke kurir, sorting center, truk, mungkin pesawat atau kapal, lalu kurir lagi—setiap tahap membawa risiko benturan, tekanan, dan paparan elemen. Kemasan yang tidak dirancang untuk survive dalam kondisi tersebut akan gagal melindungi produk, dan akibatnya: barang rusak, pelanggan kecewa, review buruk, serta biaya penggantian dan retur.\n\nMasalah yang sering muncul: tekanan stacking di gudang dan truk bisa menghancurkan kotak lemah; handling yang kasar menyebabkan guncangan; perubahan suhu dan kelembapan selama transit bisa merusak barang sensitif. Di sisi lain, over-packaging—terlalu banyak bubble wrap dan kotak besar—membuang biaya, membebani lingkungan, dan membuat pelanggan kesal saat membuka paket.\n\nSolusinya: kombinasi karton berkualitas dengan ketebalan sesuai berat produk, filler seperti honeycomb atau hexa wrap untuk mengisi rongga dan menyerap guncangan, serta pelapis anti lembap bila produk sensitif. Desain kemasan tepat ukuran (right-sizing) mengurangi waste dan biaya. Pertimbangkan kemudahan dibuka oleh konsumen—kemasan yang ramah pengguna meninggalkan kesan positif. Pilih material yang dapat didaur ulang untuk menunjukkan komitmen lingkungan.\n\nKesimpulannya, kemasan e-commerce harus dirancang untuk perjalanan, bukan sekadar tampilan. Investasi pada proteksi yang memadai melindungi margin dan reputasi; kemasan yang tepat ukuran dan ramah lingkungan memperkuat citra merek di mata konsumen yang semakin kritis.',
            image: 'galeri-02',
            date: '10 November 2024',
            readMinutes: 8
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
        heading: 'Our Culture: Values, Beliefs, and How We Work',
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
            title: 'Choosing the Right Carton Box for Export Furniture',
            body: 'Exporting furniture to international markets brings great opportunities, but also unique challenges. One of the key success factors is packaging. Goods must arrive at their destination in perfect condition after travelling thousands of kilometres through ports, warehouses, and multimodal transport. Without the right packaging, the risk of damage, rejection, and financial loss is very high.\n\nThe main problems that often arise: furniture comes in vastly different shapes, weights, and fragility—from solid wood chairs, tables with glass, large cabinets, to small components prone to scratches. Cartons that are too thin will tear or buckle; those that are too large waste space and cost; incorrect construction fails to hold items properly. Add to that destination country requirements that can reject goods at the port if packaging does not meet standards.\n\nThe solution: choose cartons based on product type and shipping distance. Double-wall cartons are recommended for heavy goods and export; single-wall suffices for lighter items or local delivery. Consider construction—L-shape for display, A1 box for retail, die-cut for visibility. Consult with an experienced packaging supplier who understands export standards and can recommend material and design combinations that fit your budget.\n\nIn conclusion, investing time and money in choosing the right carton box from the start will save on repair costs, damage claims, and repackaging later. Well-designed packaging is not an expense—it is protection for your reputation and business margins.',
            image: 'galeri-02',
            date: '15 January 2025',
            readMinutes: 8
          },
          {
            title: 'The Importance of Eco-Friendly Packaging in Industry',
            body: 'Climate change and consumer awareness have changed how industry views packaging. Once, packaging was often seen merely as a wrapper—its job done when the product arrived. Today, packaging is part of a business\'s responsibility to the environment and society. Many major brands have committed to using 100% recycled or certified packaging within the next few years.\n\nThe problem: transitioning to eco-friendly packaging is not always easy. Sustainable materials often cost more; availability is limited; and there is a risk that eco-friendly packaging is perceived as less protective. Some businesses delay because they see it as a passing trend, or feel their market does not yet demand change.\n\nThe solution: start with concrete steps. Choose recycled cardboard or FSC-certified materials to ensure raw materials come from sustainably managed forests. Right-sizing—designing packaging to minimise material without compromising protection—reduces waste and cost. Partnering with suppliers transparent about material sources and production processes will simplify sustainability reporting to stakeholders.\n\nIn conclusion, eco-friendly packaging is no longer optional. Regulations will tighten, consumers will become more critical, and proactive brands will enjoy a reputation advantage. Investing in sustainable packaging is a long-term investment for businesses that want to remain relevant and responsible.',
            image: 'galeri-02',
            date: '8 January 2025',
            readMinutes: 7
          },
          {
            title: 'Custom Packaging: Solutions for Unique Products',
            body: 'Not all products fit standard boxes. Furniture with irregular shapes, combination products, or items with protruding parts need packaging designed specifically to protect them during shipping. Using generic packaging for unique products often leads to damage, material waste, or inflated shipping costs due to inefficient sizing.\n\nThe problems often encountered: standard packaging is too large, requiring excessive filler and higher shipping costs; or too small, so items get compressed and damaged. Some manufacturers force their products into unsuitable boxes, then rely on excessive bubble wrap and styrofoam—a solution that is suboptimal for protection, cost, and the environment.\n\nThe solution: custom packaging tailored to product dimensions and shape. Design, size, material thickness, display windows, internal partitions, and protective inserts—all can be adjusted. Packaging manufacturers offering custom services can create right-sized solutions that reduce waste and cost while ensuring optimal protection.\n\nIn conclusion, investing in custom packaging from the start saves long-term costs through reduced damage, warranty claims, and shipping efficiency. Working with an experienced manufacturer ensures you get a solution balanced between protection, cost, and sustainability.',
            image: 'galeri-02',
            date: '2 January 2025',
            readMinutes: 7
          },
          {
            title: 'Honeycomb and Protection During Shipping',
            body: 'During shipping, products face stacking pressure in warehouses, shock during handling, and vibration in trucks or ships. The right filler and reinforcement materials determine whether goods arrive safely or damaged. Honeycomb—a material with a hexagonal structure—has long been an industry staple for packaging due to its high strength at very low weight.\n\nThe problem often encountered: conventional fillers like styrofoam or bubble wrap create large volume and added weight, increasing shipping costs. On the other hand, fillers that are too thin do not adequately protect from pressure and impact. A balance is needed between protection, weight, and cost.\n\nThe solution: honeycomb board and honeycomb core. The hexagonal structure provides far better resistance to compression and vibration than solid materials of the same weight. Honeycomb can be used as internal box reinforcement, void filler, corner protectors, or divider panels. The advantage: minimal weight, so it does not burden shipping costs, and paper-based material is relatively easy to recycle.\n\nIn conclusion, for furniture and fragile items, a combination of carton box with honeycomb insert is often the ideal choice—optimal protection without excess weight. This material offers a balance of durability, sustainability, and cost efficiency that is hard to match.',
            image: 'galeri-02',
            date: '28 December 2024',
            readMinutes: 7
          },
          {
            title: 'Export Standards for Carton Packaging',
            body: 'Exporting to international markets opens great opportunities, but each destination country has its own packaging requirements. Failing to meet these standards can result in goods being rejected at the port, destroyed, or returned—with significant cost and reputation damage. Understanding and meeting export standards at the packaging design stage is a crucial step.\n\nThe problem: requirements vary widely. There are technical standards (carton thickness, burst strength, drop test), material standards (FSC, free of hazardous substances), and administrative procedures (labelling, fumigation, material authenticity documentation). European and American markets often require double-wall and FSC certification; some Asian countries mandate fumigation treatment for wood. Without clear understanding, exporters can get stuck with port repackaging costs or lose business deals.\n\nThe solution: research destination country standards from the start. Double-wall certification guarantees carton strength through burst strength testing; FSC ensures raw materials from sustainable sources. Laboratory testing—drop test, climate test—provides compliance evidence. Also ensure correct labelling, complete material documentation, and fumigation procedures where required. Partnering with a packaging supplier experienced in export will simplify this entire process.\n\nIn conclusion, investing in packaging that meets export standards from the start is far cheaper than bearing rejection or repackaging costs. Suppliers who understand international regulations are strategic partners for your export business.',
            image: 'galeri-02',
            date: '20 December 2024',
            readMinutes: 8
          },
          {
            title: 'Packaging as Part of Branding',
            body: 'When a customer receives a package, packaging is the first thing they see—before the product itself. The unboxing experience can leave a lasting impression, influencing reviews, recommendations, and loyalty. In the e-commerce era, packaging is no longer just a wrapper; it becomes an extension of your brand identity.\n\nThe problem often seen: many businesses neglect packaging and use plain boxes or generic packaging. High-quality products arrive in shabby boxes, faint logos, or no message at all—reducing perceived value. On the other hand, some businesses assume branded packaging is expensive and only affordable for large orders.\n\nThe solution: custom printing on cartons—logo, brand colours, tagline, or special messages—turns packaging into a branding tool. With flexible manufacturers, you can achieve a professional look without burdensome minimum orders. Choose appropriate finishing: 1–2 colour printing is more economical, full colour for premium packaging. Design consistency with brand identity strengthens recognition and trust.\n\nIn conclusion, branded packaging is an investment in quality perception. Customers appreciate attention to detail—neat, branded boxes communicate that you take your product and service seriously. In the long run, this builds loyalty and differentiation in a competitive market.',
            image: 'galeri-02',
            date: '12 December 2024',
            readMinutes: 7
          },
          {
            title: 'Sustainable Packaging Trends in 2025',
            body: '2025 marks a major milestone for the packaging industry. Global regulations are tightening, consumers are becoming more critical, and circular economy is no longer just a concept—it is a framework guiding business decisions. Companies that do not adapt will fall behind and face reputation risks and regulatory sanctions.\n\nThe problem facing industry: transitioning to sustainable packaging requires changes across the entire supply chain. Extended Producer Responsibility (EPR) requires producers to take responsibility for post-consumer packaging—including take-back and recycling programmes. Single-use plastic continues to be restricted; materials difficult to recycle will face taxes or bans. For many businesses, understanding and meeting these new demands feels confusing and expensive.\n\nThe solution: focus on easily recyclable and compostable materials. FSC-certified cardboard, post-consumer recycled paper, and designs that minimise mixed layers facilitate recycling. Avoid material combinations that are hard to separate—such as plastic laminate on cardboard—as they reduce recycling value. Partnering with suppliers transparent about material life cycle will simplify reporting and regulatory compliance.\n\nIn conclusion, starting the transition to sustainable packaging now is a proactive step that will save cost and stress in the future. Regulations will tighten; consumers will increasingly choose responsible brands. Sustainable packaging is no longer optional—it is the future of the industry.',
            image: 'galeri-02',
            date: '5 December 2024',
            readMinutes: 8
          },
          {
            title: 'Order Flexibility: No Minimum Order',
            body: 'Starting a business or launching a new product often begins with small volumes. You want to test the market, validate the design, or fulfil initial orders without locking large capital in inventory. Yet many packaging suppliers impose minimum orders of hundreds or even thousands of units—making it difficult for SMEs and startups to get custom packaging that fits their needs.\n\nThe problem: with high minimum orders, you are forced to buy more than needed. Working capital is tied up in packaging stock that may go unused if the product fails in the market or the design changes. The alternative is using generic packaging that fits poorly—sacrificing protection and branding. The dilemma between scale efficiency and flexibility becomes a barrier for many small businesses.\n\nThe solution: find suppliers offering no-minimum-order policies or low MOs. This allows you to order according to actual needs, test packaging designs before full-scale production, and manage cash flow better. Ensure the supplier maintains production quality for small orders—material and finishing standards must match large orders.\n\nIn conclusion, order flexibility is an enabler for business growth. Starting with small orders, validating packaging, then scaling up when the market is proven—a healthy and sustainable flow. Suppliers who understand SME and startup needs are valuable partners for the business ecosystem.',
            image: 'galeri-02',
            date: '28 November 2024',
            readMinutes: 7
          },
          {
            title: 'Material Quality and Packaging Durability',
            body: 'Packaging that looks the same on the outside can be very different on the inside. Grammage, pulp type, number of layers, and production process determine carton strength. Saving on material quality often leads to product damage in transit—and claim costs, replacement, and reputation damage far exceed initial savings.\n\nThe problem often encountered: many buyers focus on price per box without understanding material specifications. Cheap cartons may be thin, buckle easily when stacked, or fail to resist moisture—causing damage that only becomes apparent when goods reach the customer. For export shipping or heavy goods, inadequate packaging is a recipe for disaster.\n\nThe solution: understand material specifications. Double-wall certified cartons have been burst-tested—providing performance assurance. Grammage (grams per square metre) and layers affect pressure resistance. For special needs, request lab test certificates from suppliers. Working with suppliers transparent about quality grades lets you choose the best option for your budget and protection needs.\n\nIn conclusion, investing in quality materials is protection for margins and reputation. Premium packaging costs generally pay off through reduced damage, warranty claims, and customer satisfaction. Do not let short-term savings sacrifice long-term business.',
            image: 'galeri-02',
            date: '20 November 2024',
            readMinutes: 7
          },
          {
            title: 'Packaging for E-commerce and Safe Delivery',
            body: 'E-commerce products undergo far longer and more complex journeys than offline sales. From warehouse to courier, sorting centre, truck, possibly plane or ship, then courier again—each stage carries risk of impact, pressure, and exposure to the elements. Packaging not designed to survive these conditions will fail to protect the product, resulting in: damaged goods, disappointed customers, bad reviews, plus replacement and return costs.\n\nThe problems often encountered: stacking pressure in warehouses and trucks can crush weak boxes; rough handling causes shock; temperature and humidity changes during transit can damage sensitive items. On the other hand, over-packaging—excessive bubble wrap and oversized boxes—wastes cost, burdens the environment, and frustrates customers when opening packages.\n\nThe solution: a combination of quality carton with thickness appropriate to product weight, fillers like honeycomb or hexa wrap to fill voids and absorb shock, and moisture barriers when products are sensitive. Right-sized packaging design reduces waste and cost. Consider ease of opening for consumers—user-friendly packaging leaves a positive impression. Choose recyclable materials to demonstrate environmental commitment.\n\nIn conclusion, e-commerce packaging must be designed for the journey, not just appearance. Investing in adequate protection safeguards margins and reputation; right-sized, eco-friendly packaging strengthens brand image in the eyes of increasingly critical consumers.',
            image: 'galeri-02',
            date: '10 November 2024',
            readMinutes: 8
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
