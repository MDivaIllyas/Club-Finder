import { Link } from "react-router-dom";


function Navbar() {

    return(
        <div className="flex flex-col sm:flex-row fixed min-w-full top-0 left-0 justify-between p-4 bg-white box-content z-50">
            <h1 className="text-xl mb-2 sm:mb-0 md:text-2xl lg:text-3xl font-bold text-[#3B82F6]">Club Finder</h1>
            <nav className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 sm:gap-x-7 lg:gap-x-16 mr-20">
                <Link to="/" className="text-base lg:text-lg text-[#3B82F6] hover:px-2 hover:bg-[#6366F1] hover:text-white hover:text-center hover:rounded-lg">Beranda</Link>
                <Link to="/clubs" className="text-base lg:text-lg text-[#3B82F6] hover:px-2 hover:bg-[#6366F1] hover:text-white hover:text-center hover:rounded-lg">Klub</Link>
                <Link to="/about" className="text-base lg:text-lg text-[#3B82F6] hover:px-2 hover:bg-[#6366F1] hover:text-white hover:text-center hover:rounded-lg">Tentang Kami</Link>
            </nav>
        </div>
    );
}

export default Navbar;