import Navbar from "./components/Navbar";
import FooterWeb from "./components/footerWeb";

function About() {
    return (
    <div className="bg-[#F9FAFB]">
      <Navbar/>
        <div className="mt-[60px] max-w-4xl mx-auto pt-10 px-6 pb-40">
          <h1 className="text-3xl text-[#2A4759] text-center font-bold mb-4">About Club Finder</h1>

          <p className="text-gray-700 mb-6">
            <strong>Club Finder</strong> adalah aplikasi web yang membantu mahasiswa menemukan dan bergabung
            dengan klub kampus sesuai minat mereka. Dengan tampilan yang mudah digunakan dan informasi klub
            yang lengkap, pengguna dapat:
          </p>

          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
            <li>Melihat daftar klub kampus dalam tampilan grid atau list</li>
            <li>Melihat detail informasi setiap klub</li>
            <li>Melihat event mendatang yang diadakan oleh klub</li>
            <li>Bergabung dengan klub pilihan (disimpan di localStorage)</li>
            <li>Menyaring dan mengurutkan daftar klub berdasarkan nama</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>React.js</strong> – library utama untuk membangun UI</li>
            <li><strong>Tailwind CSS</strong> – styling utility-first yang responsif</li>
            <li><strong>React Router</strong> – navigasi antar halaman</li>
            <li><strong>LocalStorage</strong> – menyimpan status klub yang sudah diikuti</li>
            <li><strong>Vite</strong> – bundler modern untuk pengembangan cepat</li>
          </ul>
      </div>
      <FooterWeb/>
    </div>
  )
}

export default About;