/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Projeyi statik HTML/CSS/JS olarak çıktı alır
  images: {
    unoptimized: true, // GitHub Pages görsel optimizasyon servislerini desteklemediği için bunu açmalıyız
  },
  // EĞER siten "kullaniciadi.github.io/repo-adi" şeklinde alt klasörde çalışacaksa:
  // basePath: '/repo-adi', 
};

module.exports = nextConfig;