import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

const Guest = () => {
  return (
    <div className="font-sans bg-[#f4f4f9] text-[#1a1f3a]">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-3 md:p-16 bg-[#f4f4f9] pt-20">
        <div className="flex-1 mb-8 xl:pl-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-[#f4a261]">
            Welcome to SleepTracker
          </h1>
          <p className="md:text-xl mb-6 text-[#524e7e]">
            Monitor your sleep, gain actionable insights, and wake up refreshed with our smart tracking platform.
          </p>
          <SignInButton>
            <button className="w-full md:w-auto bg-[#f4a261] hover:bg-[#e07a3e] text-white px-6 py-2 rounded-md font-medium shadow-md transition">
              Get Started
            </button>
          </SignInButton>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/sleep-tracker.png"
            alt="SleepTracker Illustration"
            width={400}
            height={400}
            className="rounded-tl-3xl rounded-br-3xl shadow-lg"
          />
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="py-16 px-8 bg-white rounded-md shadow-md mx-4 md:mx-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#f4a261]">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#1a1f3a]">What is SleepTracker?</h3>
            <p className="text-[#524e7e]">
              SleepTracker is a smart platform that tracks your sleep patterns, helping you improve rest and overall wellness.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1a1f3a]">How does it work?</h3>
            <p className="text-[#524e7e]">
              The app collects sleep data, analyzes trends, and provides personalized recommendations for better sleep.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1a1f3a]">Is SleepTracker free?</h3>
            <p className="text-[#524e7e]">
              Yes! We offer a free plan with essential features, and premium plans for advanced insights.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-8 bg-[#f4f4f9]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#f4a261]">
          What Our Users Say
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-md shadow-md border border-[#d1d1e0]">
            <p className="text-[#1a1f3a] mb-4">
              &quot;SleepTracker transformed my sleep routine. I wake up refreshed and energized every day.&quot;
            </p>
            <p className="text-[#f4a261] font-bold">- Sarah L.</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md border border-[#d1d1e0]">
            <p className="text-[#1a1f3a] mb-4">
              &quot;The insights are clear and actionable. SleepTracker has improved my nightly rest significantly.&quot;
            </p>
            <p className="text-[#f4a261] font-bold">- John D.</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md border border-[#d1d1e0]">
            <p className="text-[#1a1f3a] mb-4">
              &quot;User-friendly, accurate, and helpful. A must-have app for anyone looking to sleep better.&quot;
            </p>
            <p className="text-[#f4a261] font-bold">- Emily R.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;
