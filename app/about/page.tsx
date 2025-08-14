import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="font-sans bg-[#f4f4f9] text-[#1a1f3a]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-8 bg-[#f4f4f9]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#f4a261]">
          About SleepTracker
        </h1>
        <p className="text-lg md:text-xl text-[#524e7e]">
          SleepTracker is your smart companion for tracking sleep, understanding
          patterns, and improving your overall well-being.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8 bg-white rounded-md shadow-md mx-4 md:mx-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#f4a261]">
          Our Mission
        </h2>
        <p className="text-[#524e7e] max-w-3xl mx-auto text-center">
          Our mission is to help individuals achieve restorative sleep by
          providing clear insights, personalized recommendations, and actionable
          guidance.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-[#f4f4f9]">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#f4a261]">
          Why Choose SleepTracker?
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-md shadow-md border border-[#d1d1e0]">
            <h3 className="text-xl font-bold mb-2 text-[#1a1f3a]">
              Comprehensive Tracking
            </h3>
            <p className="text-[#524e7e]">
              Monitor your sleep duration, cycles, and quality to gain a
              complete understanding of your rest patterns.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md border border-[#d1d1e0]">
            <h3 className="text-xl font-bold mb-2 text-[#1a1f3a]">
              Personalized Insights
            </h3>
            <p className="text-[#524e7e]">
              Receive actionable recommendations tailored to your sleep habits
              to improve overall wellness.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md border border-[#d1d1e0]">
            <h3 className="text-xl font-bold mb-2 text-[#1a1f3a]">
              User-Friendly Design
            </h3>
            <p className="text-[#524e7e]">
              Enjoy a seamless, intuitive experience on any device, making sleep
              tracking easy and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-8 bg-white rounded-md shadow-md mx-4 md:mx-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#f4a261]">
          Our Story
        </h2>
        <p className="text-[#524e7e] max-w-3xl mx-auto text-center">
          SleepTracker was founded to make quality sleep accessible to everyone.
          Combining technology, research, and user-friendly design, we help
          users understand and improve their sleep patterns for a healthier
          life.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 bg-[#f4f4f9] text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#f4a261]">
          Ready to Sleep Better?
        </h2>
        <p className="text-lg mb-6 text-[#524e7e]">
          Join SleepTracker today and start your journey towards better sleep
          and improved health.
        </p>
        <Link
          href="/sign-up"
          className="inline-block bg-[#f4a261] hover:bg-[#e07a3e] text-white px-6 py-3 rounded-md font-medium shadow-md transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
