import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { checkUser } from "@/lib/checkUser";

export default async function Navbar() {
  const user = await checkUser();
  console.log("Current User:", user);

  return (
    <nav className="bg-[#1a1f3a] shadow-md border-b border-[#524e7e]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="focus:outline-none rounded">
              <span className="text-xl sm:text-3xl font-extrabold text-[#a29bb9] select-none">
                SleepTracker
              </span>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex-grow flex justify-center sm:flex sm:space-x-8">
            <Link
              href="/"
              className="text-[#9c92ac] hover:text-[#d4cee6] transition-colors duration-300 font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9c92ac]"
              aria-current={user ? "page" : undefined}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[#9c92ac] hover:text-[#d4cee6] transition-colors duration-300 font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9c92ac]"
            >
              About
            </Link>
          </div>

          {/* Right: Auth Buttons */}
          <div className="flex-shrink-0 flex items-center justify-end w-[140px]">
            <SignedOut>
              <SignInButton>
                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center px-5 py-2 text-sm sm:text-base font-semibold rounded-md bg-[#f4a261] text-[#1a1f3a] shadow-md hover:bg-[#e07a3e] focus:outline-none transition"
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
                      "w-12 h-12 sm:w-14 sm:h-14 rounded-full",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
