function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-700">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          We’d love to hear from you. Send us a message below.
        </p>
      </div>

      {/* Contact Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Get in Touch
          </h2>

          <p className="text-gray-600 mb-3">📍 Roxas City, Capiz</p>
          <p className="text-gray-600 mb-3">📞 0912-345-6789</p>
          <p className="text-gray-600 mb-3">📧 yogabliss@gmail.com</p>

          <p className="text-gray-500 mt-6 text-sm">
            We usually respond within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            placeholder="Your Message"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
