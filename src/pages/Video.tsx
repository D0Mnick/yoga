function Video() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-700">
          Yoga Video Sessions
        </h1>
        <p className="text-gray-600 mt-2">
          Watch guided yoga practices anytime, anywhere
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Video 1 */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/v7AYKMP6rOE"
            title="Yoga Video 1"
            allowFullScreen
          ></iframe>

          <div className="p-4">
            <h2 className="text-lg font-bold text-indigo-600">
              Beginner Yoga Flow
            </h2>
            <p className="text-gray-600 text-sm">
              Perfect for beginners to start their yoga journey.
            </p>
          </div>
        </div>

        {/* Video 2 */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/4pLUleLdwY4"
            title="Yoga Video 2"
            allowFullScreen
          ></iframe>

          <div className="p-4">
            <h2 className="text-lg font-bold text-indigo-600">
              Power Yoga Session
            </h2>
            <p className="text-gray-600 text-sm">
              Build strength and flexibility with power yoga.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
