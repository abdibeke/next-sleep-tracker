import Image from "next/image";
import Link from "next/link";

const Guest = () => {
  return (
    <div className="font-sans bg-[#f5f7fa] text-[#1a1f3a]">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 pt-20 bg-gradient-to-br from-[#f5f7fa] via-[#e8edf5] to-[#dde3f2]">
        <div className="flex-1 mb-8 xl:pl-10 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#f4a261] leading-tight">
            Sleep Better, Live Better
          </h1>
          <p className="md:text-xl mb-6 text-[#524e7e] max-w-lg">
            SleepTracker helps you understand your sleep patterns, gain
            actionable insights, and wake up feeling refreshed every morning.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md 
             transition duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/sleep-tracker.png"
            alt="SleepTracker Illustration"
            width={420}
            height={420}
            className="rounded-tl-3xl rounded-br-3xl shadow-lg transform transition duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="py-16 px-6 bg-[#eef0f7] rounded-xl shadow-lg mx-4 md:mx-16 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#f4a261]">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              q: "What is SleepTracker?",
              a: "SleepTracker is an intelligent platform designed to monitor your sleep habits and provide insights to improve rest, energy, and overall well-being.",
            },
            {
              q: "How does it work?",
              a: "Our app collects data from your nightly sleep, analyzes trends, and delivers personalized recommendations to optimize your sleep quality.",
            },
            {
              q: "Is SleepTracker free?",
              a: "Yes! Enjoy essential sleep tracking features for free, or upgrade to premium for advanced analytics and personalized guidance.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-[#d1d1e0] shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg md:text-xl font-bold text-[#1a1f3a] mb-2">
                {item.q}
              </h3>
              <p className="text-[#524e7e]">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-6 bg-[#f5f7fa]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#f4a261]">
          What Our Users Say
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "SleepTracker has completely transformed my sleep routine. I wake up energized and ready for the day.",
              name: "Abdi B.",
            },
            {
              quote:
                "Clear insights and actionable tips make SleepTracker an essential tool for better nightly rest.",
              name: "Ebbise T.",
            },
            {
              quote:
                "Intuitive, accurate, and highly useful. SleepTracker is my go-to app for monitoring sleep.",
              name: "Eyu M.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md border border-[#d1d1e0] hover:shadow-lg transition duration-300"
            >
              <p className="text-[#1a1f3a] mb-4 italic">“{item.quote}”</p>
              <p className="text-[#29231e] font-semibold">- {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guest;
