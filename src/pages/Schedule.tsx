import React from "react";

function Schedule() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-700">Class Schedule</h1>
        <p className="text-gray-600 mt-2">
          Choose your preferred yoga class schedule
        </p>
      </div>

      {/* Schedule Table */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-4">Day</th>
              <th className="p-4">Class</th>
              <th className="p-4">Time</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">Monday</td>
              <td className="p-4">Beginner Yoga</td>
              <td className="p-4">8:00 AM</td>
            </tr>

            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">Wednesday</td>
              <td className="p-4">Power Yoga</td>
              <td className="p-4">5:00 PM</td>
            </tr>

            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">Friday</td>
              <td className="p-4">Meditation Yoga</td>
              <td className="p-4">6:00 PM</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="p-4">Saturday</td>
              <td className="p-4">Relaxation Yoga</td>
              <td className="p-4">7:00 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schedule;
