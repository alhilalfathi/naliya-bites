/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./preview.html"
  ],
  theme: {
    extend: {
      colors: {
        // Mengubah warna utama (primary) menjadi Biru #2c5499
        primary: {
          DEFAULT: '#2C5499', // Royal Blue Utama
          light: '#426EB8',   // Biru lebih terang untuk hover
          dark: '#1C3766',    // Biru gelap untuk teks/kontras tinggi
          soft: '#EBF1FA',    // Biru sangat lembut untuk background/tone manis
        },
        // Mengubah warna secondary menjadi putih/biru es bersih (bukan krem lagi)
        secondary: {
          DEFAULT: '#F8FAFC', // Slate sangat terang (bersih & premium)
          dark: '#EDF2F7',    // Abu-abu kebiruan lembut
        },
        // Mengubah aksen menjadi biru laut/cyan sebagai aksen pemanis
        accent: {
          DEFAULT: '#00A8CC', // Biru Cyan sebagai pemikat mata
          light: '#33BAD6',
          dark: '#007A99',
        },
        // Mengubah palet 'cocoa' (cokelat lama) menjadi palet 'cocoa' baru berisi warna Navy/Slate gelap
        // (Tetap menggunakan nama 'cocoa' agar Anda tidak perlu mengubah class text-cocoa-xxx di file Hero.jsx)
        cocoa: {
          900: '#0F172A', // Slate 900 (Sangat gelap hampir hitam untuk judul)
          800: '#1E293B', // Slate 800
          700: '#334155', // Slate 700
          600: '#475569', // Slate 600 (Untuk teks deskripsi/sub-judul)
          500: '#64748B', // Slate 500
          100: '#F1F5F9', // Slate 100
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Nunito', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        // Mengubah bayangan shadow cokelat lama menjadi bayangan biru transparan yang elegan
        'premium': '0 10px 30px -10px rgba(44, 84, 153, 0.15)',
        'premium-hover': '0 20px 40px -15px rgba(44, 84, 153, 0.25)',
      }
    },
  },
  plugins: [],
}