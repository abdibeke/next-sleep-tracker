"use client";

const ContactPage = () => {
  return (
    <div className="font-sans bg-[#f4f4f9] text-[#1a1f3a]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-8 bg-[#f4f4f9]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#f4a261]">
          Contact SleepTracker
        </h1>
        <p className="text-lg md:text-xl text-[#524e7e]">
          Have questions or need help? Our team is here to assist you.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-8 bg-white rounded-md shadow-md mx-4 md:mx-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#f4a261]">
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
            const mailtoLink = `mailto:abdibbeyene@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
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
              className="mt-1 block w-full px-4 py-2 border border-[#d1d1e0] rounded-md shadow-sm focus:ring-[#f4a261] focus:border-[#f4a261]"
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
              className="mt-1 block w-full px-4 py-2 border border-[#d1d1e0] rounded-md shadow-sm focus:ring-[#f4a261] focus:border-[#f4a261]"
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
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-[#d1d1e0] rounded-md shadow-sm focus:ring-[#f4a261] focus:border-[#f4a261]"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#f4a261] hover:bg-[#e07a3e] text-white px-6 py-2 rounded-md font-medium shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-8 bg-[#f4f4f9] rounded-md shadow-md mx-4 md:mx-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#f4a261]">
          Contact Information
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#1a1f3a]">Email</h3>
            <p className="text-[#524e7e]">abdibbeyene@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#1a1f3a]">Phone</h3>
            <p className="text-[#524e7e]">+2519167999..</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#1a1f3a]">Location</h3>
            <p className="text-[#524e7e]">Adama, Ethiopia</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
