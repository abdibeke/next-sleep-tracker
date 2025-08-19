import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { checkUser } from "@/lib/checkUser";

export default async function Navbar() {
  const user = await checkUser();
  console.log("Current User:", user);

  return (
    <nav className="bg-gradient-to-r from-[#1a1f3a] to-[#232946] shadow-lg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="focus:outline-none rounded z-10">
            <span className="text-2xl sm:text-3xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#f4a261] to-[#e07a3e] select-none">
              SleepTracker
            </span>
          </Link>

          {/* Center Navigation Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:flex space-x-6">
            <Link
              href="/"
              className="text-[#d4cee6] hover:text-[#f4a261] font-semibold px-3 py-2 rounded-md transition-colors duration-300 focus:outline-none focus:bg-[#2c2f4a]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#d4cee6] hover:text-[#f4a261] font-semibold px-3 py-2 rounded-md transition-colors duration-300 focus:outline-none focus:bg-[#2c2f4a]"
            >
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3 z-10">
            <SignedOut>
              <SignInButton>
                <button
                  type="button"
                  className="px-5 py-2 text-sm sm:text-base font-semibold rounded-lg bg-indigo-600 text-white shadow-md 
                 hover:bg-indigo-700 focus:outline-none transition duration-300 cursor-pointer"
                >
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox:
                      "w-10 h-10 sm:w-12 sm:h-12 rounded-full",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className="sm:hidden mt-3 flex flex-col space-y-2">
          <Link
            href="/"
            className="text-[#d4cee6] hover:text-[#f4a261] font-semibold px-3 py-2 rounded-md transition-colors duration-300 text-center focus:outline-none focus:bg-[#2c2f4a]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#d4cee6] hover:text-[#f4a261] font-semibold px-3 py-2 rounded-md transition-colors duration-300 text-center focus:outline-none focus:bg-[#2c2f4a]"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
