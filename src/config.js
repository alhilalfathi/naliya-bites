// Configuration and data structures for Naliya Bites Brownies
import partyPack from "../src/images/partypackprofile.png"
import classicFudgy from "../src/images/classicc.png"
import petiteSquare from "../src/images/petit.png"
import variant1 from "../src/images/Partypackbasic2varian.jpeg"
import variant2 from "../src/images/Partypackspesial2.jpeg"
import variant3 from "../src/images/Partypackbasic4varian.jpeg"
import variant4 from "../src/images/Partypackspesiallotus.jpeg"
import Clasic1 from "../src/images/customee.jpeg"
import clasic2 from "../src/images/ClassicFudgyBrownie2varian.jpeg"
import clasic3 from "../src/images/ClassicFudgyBrownie1varian.jpeg"
import clasic4 from "../src/images/Classic-Fudgy-Brownie-4.jpeg"
import petite1 from "../src/images/fudgy1.jpeg"
import petite2 from "../src/images/fudgy2.jpeg"
import petite3 from "../src/images/fudgy3.jpeg"
import petite4 from "../src/images/fudgy4.jpeg"




export const CONFIG = {
  whatsappNumber: "6281358176175", // Replace with your WhatsApp number (e.g. 6281234567890)
  shopName: "Naliya Bites",
  instagramUser: "naliya.bites",

  // High-quality imagery for premium look. Easily replaceable.
  images: {
    hero: partyPack, // Chocolate fudgy brownies
    partyPack, // Assorted toppings brownies in a grid
    classicFudgy, // Stacked fudgy brownies
    petiteSquare, // Compact brownie square package
  },

  // Benefits / Why Choose Us
  benefits: [
    {
      id: "benefit-1",
      title: "Fresh Every Order",
      description: "Brownies baru dipanggang sesaat setelah Anda memesan untuk menjaga kelembutan dan kesegaran maksimal.",
      icon: "Sparkles", // We will map these string names to Lucide icons
    },
    {
      id: "benefit-3",
      title: "Banyak Pilihan Topping",
      description: "Mulai dari keju gurih hingga biskuit Lotus mewah, padukan rasa favorit Anda dalam satu loyang.",
      icon: "Grid",
    },
    {
      id: "benefit-4",
      title: "Cocok untuk Hampers & Party",
      description: "Dikemas dengan kotak eksklusif dan pita cantik, sangat ideal untuk bingkisan orang tercinta.",
      icon: "Gift",
    }
  ],

  // Product Catalog
  products: [
    {
      id: "party-pack",
      name: "Party Pack",
      contents: "25 pcs / 36 pcs",
      price: 120000,
      imageKey: "partyPack",
      description: "Kombinasi brownies berukuran pas untuk berkumpul bersama keluarga, sahabat, atau merayakan momen spesial.",
      toppingsBasicLimit: "1–4 topping",
      addOnNote: "+Rp7.000 / topping spesial",
      addOnPrice: 7000,
      waMessage: "Halo, saya ingin memesan Party Pack Brownies.",
      variants: [
        {
          name: "Basic Topping",
          description: "Topping Almond dan Red Velvet.",
          image: variant1,
        },
        {
          name: "Spesial 2 Topping",
          description: "Kombinasi topping spesial pilihan.",
          image: variant2,
        },
        {
          name: "Basic Topping 4",
          description: "Taburan 4 topping basic pilihan.",
          image: variant3,
        },
        {
          name: "Spesial Lotus",
          description: "Kombinasi topping premium pilihan.",
          image: variant4,
        }
      ]
    },
    {
      id: "classic-fudgy",
      name: "Classic Fudgy Brownie",
      contents: "15 pcs / 18 pcs",
      price: 75000,
      imageKey: "classicFudgy",
      description: "Tekstur fudgy klasik yang renyah di luar, lembut dan chewy di dalam. Sensasi cokelat murni yang lumer di mulut.",
      toppingsBasicLimit: "1–3 topping",
      addOnNote: "+Rp4.000 / topping spesial",
      addOnPrice: 4000,
      waMessage: "Halo, saya ingin memesan Classic Fudgy Brownie.",
      variants: [
        {
          name: "Spesial Custome",
          description: "Topping premium pilihan, tersedia custome sesuai keinginan.",
          image: Clasic1,
        },
        {
          name: "Basic Topping 2",
          description: "Almond dan Butiran Kacang.",
          image: clasic2,
        },
        {
          name: "Basic Topping 1",
          description: "Almond.",
          image: clasic3,
        },
        {
          name: "Basic-Basic Toping",
          description: "Topping-Topping Pilihan.",
          image: clasic4,
        }
      ]
    },
    {
      id: "petite-square",
      name: "Petite Square",
      contents: "9 pcs",
      price: 40000,
      imageKey: "petiteSquare",
      description: "Kemasan personal mungil yang pas untuk teman ngopi sore Anda, atau sebagai hadiah manis yang sederhana.",
      toppingsBasicLimit: "1–2 topping",
      addOnNote: "+Rp4.000 / topping spesial",
      addOnPrice: 4000,
      waMessage: "Halo, saya ingin memesan Petite Square Brownies.",
      variants: [
        {
          name: "Petite 1",
          description: "Topping-Topping Pilihan.",
          image: petite1
        },
        {
          name: "Petite 2",
          description: "Topping-Topping Pilihan.",
          image: petite2
        },
        {
          name: "Petite 3",
          description: "Topping-Topping Pilihan.",
          image: petite3
        },
        {
          name: "Petite 4",
          description: "Topping-Topping Pilihan.",
          image: petite4
        }
      ]
    }
  ],

  // Topping list configurations
  toppings: {
    basic: [
      "Almond",
      "Keju",
      "Kacang",
      "Double Choco (Choco Ball + Choco Chips)",
      "Oreo Red Velvet",
      "Mini Oreo"
    ],
    special: [
      { name: "Strawberry", priceInfo: { "party-pack": 7000, "classic-fudgy": 4000, "petite-square": 4000 } },
      { name: "Lotus Biscoff", priceInfo: { "party-pack": 7000, "classic-fudgy": 4000, "petite-square": 4000 } },
      { name: "Milo Cubes", priceInfo: { "party-pack": 7000, "classic-fudgy": 4000, "petite-square": 4000 } }
    ]
  },

  // Steps to Order
  orderSteps: [
    {
      step: "01",
      title: "Pilih Menu Favorit",
      description: "Jelajahi varian brownies Naliya Bites dan tentukan topping basic serta add-on spesial pilihan Anda."
    },
    {
      step: "02",
      title: "Klik Tombol WhatsApp",
      description: "Tekan tombol pesan di katalog produk untuk langsung membuka obrolan chat dengan admin kami."
    },
    {
      step: "03",
      title: "Konfirmasi & Bayar",
      description: "Isi format pemesanan, lakukan pembayaran via transfer bank/E-wallet, dan brownies Anda siap dipanggang!"
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: "testi-1",
      name: "Amalia Putri",
      role: "Pecinta Manis",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      comment: "Rasa cokelatnya beneran premium, gak cuma manis gula aja. Topping keju dan almondnya melimpah banget! Box-nya cantik banget buat kado."
    },
    {
      id: "testi-2",
      name: "Budi Santoso",
      role: "Pelanggan Setia",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      comment: "Beli yang Party Pack buat ultah anak, langsung ludes dalam 10 menit. Teksturnya beneran fudgy basah di dalam dan shiny crust di luar."
    },
    {
      id: "testi-3",
      name: "Citra Dewi",
      role: "Ibu Rumah Tangga",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      comment: "Ukurannya pas banget yang Petite Square buat ngemil sore bareng teh. Topping Lotus Biscoff-nya favorit keluarga saya!"
    }
  ],

  // FAQ Accordion
  faqs: [
    {
      id: "faq-1",
      question: "Apakah dibuat setiap hari?",
      answer: "Ya! Karena brownies kami dibuat dengan sistem made-to-order, pemesanan wajib dilakukan maksimal H-1 sebelum hari pengiriman ya."
    },
    {
      id: "faq-2",
      question: "Bisa request topping?",
      answer: "Tentu saja! Anda bisa memilih kombinasi topping basic dan spesial hingga total maksimal 4 topping, tergantung kapasitas menu brownies yang dipilih."
    },
    {
      id: "faq-3",
      question: "Bisa untuk acara ulang tahun?",
      answer: "Bisa sekali! Party Pack kami (isi 25/36 pcs) sangat cocok untuk perayaan ulang tahun, syukuran, atau acara kumpul keluarga. Kami juga menyediakan kartu ucapan custom secara gratis."
    },
    {
      id: "faq-4",
      question: "Berapa lama proses pemesanan?",
      answer: "Pemesanan minimal dilakukan H-1 sebelum waktu pengiriman. Namun, jika slot panggangan kami masih tersedia di hari yang sama, kami bisa memprosesnya dalam waktu 3-4 jam."
    }
  ]
};
