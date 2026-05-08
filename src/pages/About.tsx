import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white font-sans">
      {/* Header */}
      <header className="text-center py-16 px-6 bg-teal-100 rounded-b-3xl shadow-sm">
        <h1 className="text-4xl font-bold text-gray-800">About Yoga Flow 🧘‍♀️</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Discover the story behind our yoga journey and how we help people find
          balance, peace, and strength.
        </p>
      </header>

      {/* Content */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Yoga Flow, we believe yoga is more than exercise—it’s a
            lifestyle. Our mission is to help people of all levels improve
            flexibility, reduce stress, and build a deeper connection with
            themselves.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you're a beginner or experienced yogi, our classes are
            designed to guide you step-by-step toward better physical and mental
            wellness.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="bg-teal-200 rounded-2xl h-64 flex items-center justify-center shadow-md">
          <p className="text-gray-700 font-medium">
            🧘 Yoga Peace Illustration
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          What We Value
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { title: "Balance", desc: "Harmony between body and mind." },
            { title: "Peace", desc: "A calm and stress-free lifestyle." },
            { title: "Growth", desc: "Continuous self-improvement." },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-teal-50 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2026 Yoga Flow. Breathe, Stretch, Live.
      </footer>
    </div>
  );
}

export default About;
