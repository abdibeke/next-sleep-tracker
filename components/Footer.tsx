import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1a1f3a] border-t border-[#524e7e] text-[#d4cee6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-[#f4a261]">SleepTracker</h2>
            <p className="text-sm text-[#9c92ac]">
              Track your sleep, improve your health.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link
              href="/"
              className="hover:text-[#f4a261] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#f4a261] transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#f4a261] transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 text-center text-sm text-[#9c92ac]">
          <p>
            Email:{" "}
            <a
              href="mailto:abdibbeyene@gmail.com"
              className="hover:text-[#f4a261]"
            >
              abdibbeyene@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+251916799994" className="hover:text-[#f4a261]">
              +251 916 799 9..
            </a>
          </p>
          <p>Location: Adama, Ethiopia</p>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-xs text-[#7a7590]">
          © {new Date().getFullYear()} SleepTracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
