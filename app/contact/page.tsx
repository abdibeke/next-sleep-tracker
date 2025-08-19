"use client";

const ContactPage = () => {
  return (
    <div className="font-sans bg-[#f5f7fa] text-[#1a1f3a]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-br from-[#f5f7fa] via-[#e8edf5] to-[#dde3f2]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#f4a261]">
          Contact SleepTracker
        </h1>
        <p className="text-lg md:text-xl text-[#524e7e] max-w-2xl">
          Have questions, feedback, or need assistance? Our team is ready to
          help you improve your sleep experience.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-white rounded-xl shadow-lg mx-4 md:mx-16 mt-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#f4a261]">
          Get in Touch
        </h2>
        <form
          className="max-w-3xl mx-auto space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const name = (document.getElementById("name") as HTMLInputElement)
              ?.value;
            const email = (document.getElementById("email") as HTMLInputElement)
              ?.value;
            const message = (
              document.getElementById("message") as HTMLTextAreaElement
            )?.value;
            const mailtoLink = `mailto:sleeptracker@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
            window.location.href = mailtoLink;
          }}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#1a1f3a]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 block w-full px-4 py-3 border border-[#d1d1e0] rounded-lg shadow-sm focus:ring-[#4baaa3] focus:border-[#4baaa3] transition duration-300"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#1a1f3a]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 block w-full px-4 py-3 border border-[#d1d1e0] rounded-lg shadow-sm focus:ring-[#4baaa3] focus:border-[#4baaa3] transition duration-300"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#1a1f3a]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-2 block w-full px-4 py-3 border border-[#d1d1e0] rounded-lg shadow-sm focus:ring-[#4baaa3] focus:border-[#4baaa3] transition duration-300"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md 
             transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 bg-[#eef0f7] rounded-xl shadow-lg mx-4 md:mx-16 mt-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#f4a261]">
          Contact Information
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#1a1f3a]">Email</h3>
            <p className="text-[#524e7e]">sleeptracker@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#1a1f3a]">Location</h3>
            <p className="text-[#524e7e]">Addis Abeba, Ethiopia</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
