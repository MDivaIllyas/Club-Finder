import { Link } from "react-router-dom";


function Navbar() {

    return(
        <div className="flex fixed min-w-full top-0 left-0 justify-between p-4 bg-white box-content z-50">
            <h1 className="text-3xl font-bold text-[#3B82F6]">Club Finder</h1>
            <nav className="flex items-center text-center gap-x-16 mr-20">
                <Link to="/" className="text-lg text-center text-[#3B82F6] hover:px-2 hover:bg-[#6366F1] hover:text-white hover:text-center hover:rounded-lg">Home</Link>
                <Link to="/about" className="text-lg text-[#3B82F6] hover:px-2 hover:bg-[#6366F1] hover:text-white hover:text-center hover:rounded-lg">About</Link>
                <Link to="/clubs" className="text-lg text-[#3B82F6] hover:px-2 hover:bg-[#6366F1] hover:text-white hover:text-center hover:rounded-lg">Club</Link>
            </nav>
        </div>
    );
}

export default Navbar;