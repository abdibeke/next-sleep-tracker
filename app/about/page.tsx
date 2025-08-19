import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="font-sans bg-[#f5f7fa] text-[#1a1f3a]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-br from-[#f5f7fa] via-[#e8edf5] to-[#dde3f2]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#f4a261]">
          About SleepTracker
        </h1>
        <p className="text-lg md:text-xl text-[#524e7e] max-w-2xl">
          SleepTracker is your smart companion for understanding sleep patterns,
          optimizing nightly rest, and improving your overall wellness with
          actionable insights.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-[#eef0f7] rounded-xl shadow-lg mx-4 md:mx-16 mt-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#f4a261]">
          Our Mission
        </h2>
        <p className="text-[#524e7e] max-w-3xl mx-auto text-center">
          We aim to empower individuals to achieve restorative sleep by
          providing accurate sleep tracking, insightful analytics, and
          personalized recommendations for healthier living.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-[#f5f7fa]">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#f4a261]">
          Why Choose SleepTracker?
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Comprehensive Tracking",
              desc: "Track your sleep duration, cycles, and quality to gain a complete picture of your nightly rest and improve long-term health.",
            },
            {
              title: "Personalized Insights",
              desc: "Receive actionable recommendations based on your unique sleep patterns to help you rest better and wake up refreshed.",
            },
            {
              title: "User-Friendly Design",
              desc: "Enjoy an intuitive, easy-to-use interface on any device, making sleep tracking effortless and enjoyable.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md border border-[#d1d1e0] hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-[#1a1f3a]">
                {item.title}
              </h3>
              <p className="text-[#524e7e]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 bg-[#eef0f7] rounded-xl shadow-lg mx-4 md:mx-16 mt-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#f4a261]">
          Our Story
        </h2>
        <p className="text-[#524e7e] max-w-3xl mx-auto text-center">
          SleepTracker was created to make quality sleep insights accessible to
          everyone. By combining research-backed algorithms, cutting-edge
          technology, and user-friendly design, we help people understand and
          improve their sleep for a healthier, more energized life.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-[#f5f7fa] text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#f4a261]">
          Ready to Sleep Better?
        </h2>
        <p className="text-lg mb-6 text-[#524e7e] max-w-xl mx-auto">
          Join SleepTracker today and start your journey toward better sleep,
          increased focus, and improved overall wellness.
        </p>
        <Link
          href="/sign-up"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md 
             transition duration-300 transform hover:scale-105"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
