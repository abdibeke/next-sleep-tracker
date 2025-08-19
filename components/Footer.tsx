import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1a1f3a] text-[#d4cee6] border-t border-[#524e7e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col space-y-3">
        {/* Top row: Logo + Email */}
        <div className="w-full flex justify-between items-center">
          <h2 className="text-lg font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#f4a261] to-[#e07a3e]">
            SleepTracker
          </h2>
          <a
            href="mailto:sleeptracker@gmail.com"
            className="hover:text-[#f4a261] transition-colors duration-200 text-sm"
          >
            sleeptracker@gmail.com
          </a>
        </div>

        {/* Center: Nav Links */}
        <div className="flex justify-center space-x-4 text-[#9c92ac]">
          <Link
            href="/"
            className="hover:text-[#f4a261] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#f4a261] transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#f4a261] transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-[#7a7590]">
          © {new Date().getFullYear()} SleepTracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
