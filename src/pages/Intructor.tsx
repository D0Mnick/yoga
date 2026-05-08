import React from "react";

function Instructor() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-700">Our Instructors</h1>
        <p className="text-gray-600 mt-2">
          Certified yoga instructors to guide your wellness journey
        </p>
      </div>

      {/* Instructor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Instructor 1 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
          <div className="w-24 h-24 mx-auto bg-indigo-200 rounded-full mb-4"></div>
          <h2 className="text-xl font-bold text-indigo-600">Anna Cruz</h2>
          <p className="text-gray-600 mt-2">
            Expert in Beginner Yoga & Meditation
          </p>
        </div>

        {/* Instructor 2 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
          <div className="w-24 h-24 mx-auto bg-indigo-200 rounded-full mb-4"></div>
          <h2 className="text-xl font-bold text-indigo-600">Mark Santos</h2>
          <p className="text-gray-600 mt-2">
            Power Yoga & Strength Training Specialist
          </p>
        </div>

        {/* Instructor 3 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
          <div className="w-24 h-24 mx-auto bg-indigo-200 rounded-full mb-4"></div>
          <h2 className="text-xl font-bold text-indigo-600">Liza Reyes</h2>
          <p className="text-gray-600 mt-2">
            Flexibility & Relaxation Yoga Coach
          </p>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
