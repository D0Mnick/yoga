import React from "react";

function ClassesPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-700">Our Yoga Classes</h1>
        <p className="text-gray-600 mt-2">
          Choose the best class for your mind and body wellness
        </p>
      </div>

      {/* Class Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-indigo-600">Beginner Yoga</h2>
          <p className="text-gray-600 mt-2">
            Perfect for beginners who want to learn basic poses and breathing.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-indigo-600">Power Yoga</h2>
          <p className="text-gray-600 mt-2">
            High-energy class to build strength, flexibility, and stamina.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-indigo-600">Meditation Yoga</h2>
          <p className="text-gray-600 mt-2">
            Focus on relaxation, breathing, and mental clarity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClassesPage;
