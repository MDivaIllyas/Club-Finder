import { Link } from "react-router-dom";
import FooterWeb from "./components/footerWeb"
import Navbar from "./components/Navbar";

const NotFoundPage = () => {

    return(
        <div>
            <Navbar />
            <div className="mt-[60px] w-full max-w-screen bg-[#F9FAFB] py-72 flex flex-col items-center">
                <h1 className=" mb-5 text-[#2A4759] font-bold text-4xl">Halaman Tidak Ditemukan.</h1>
                <Link to={"/"}>
                    <button className="px-12 py-3 bg-[#3B82F6] rounded-2xl hover:bg-[#6366F1] text-white">Kembali ke Beranda</button>
                </Link>
            </div>
            <FooterWeb />
        </div>
    );

}

export default NotFoundPage;