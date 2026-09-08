import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full py-6 px-8 md:px-16 flex justify-between items-center bg-[#030712]/95 border-b border-cyan-500/20 text-white sticky top-0 z-50 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            {/* Logo / Brand Name */}
            <Link href="#home" className="text-2xl font-extrabold tracking-tight text-white group">
                Portfolio<span className="text-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.8)] group-hover:scale-125 inline-block transition-transform">.</span>
            </Link>

            {/* Nav Links - Increased font size (text-base) and strong bold contrast */}
            <ul className="hidden md:flex gap-9 text-base font-bold text-gray-100">
                <li>
                    <Link href="#home" className="text-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.7)] hover:text-[#00e5ff] transition-all duration-300">Home</Link>
                </li>
                <li>
                    <Link href="#about" className="hover:text-[#00e5ff] hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.9)] transition-all duration-300">About</Link>
                </li>
                <li>
                    <Link href="#education" className="hover:text-[#00e5ff] hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.9)] transition-all duration-300">Education</Link>
                </li>
                <li>
                    <Link href="#skills" className="hover:text-[#00e5ff] hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.9)] transition-all duration-300">Skills</Link>
                </li>
                <li>
                    <Link href="#projects" className="hover:text-[#00e5ff] hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.9)] transition-all duration-300">Projects</Link>
                </li>
                <li>
                    <Link href="#contact" className="hover:text-[#00e5ff] hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.9)] transition-all duration-300">Contact</Link>
                </li>
            </ul>

            {/* Mobile Menu Placeholder */}
            <div className="md:hidden text-[#00e5ff] font-bold text-base cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">
                Menu
            </div>
        </nav>
    );
}