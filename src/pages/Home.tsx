import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 to-white font-sans">
      {/* Hero Section */}
      <header className="text-center py-20 px-6 bg-teal-200 rounded-b-3xl shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Find Your Inner Peace 🧘‍♀️
        </h1>
        <p className="mt-4 text-gray-700 text-lg max-w-xl mx-auto">
          Join our yoga sessions to relax, stretch, and strengthen your mind and
          body.
        </p>

        <button className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition">
          Start Your Journey
        </button>
      </header>

      {/* About Section */}
      <section className="max-w-5xl mx-auto text-center py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-800">Why Yoga?</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Yoga helps improve flexibility, reduces stress, and brings balance to
          your daily life. Whether you're a beginner or advanced, yoga supports
          your wellness journey.
        </p>
      </section>

      {/* Classes Section */}
      <section className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Popular Classes
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Beginner Flow Yoga",
            "Power Yoga",
            "Night Relaxation Yoga",
            "Mindfulness Meditation",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <p className="text-lg text-gray-700">🧘 {item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2026 Yoga Flow. Breathe in peace, breathe out stress.
      </footer>
    </div>
  );
}

export default Home;
