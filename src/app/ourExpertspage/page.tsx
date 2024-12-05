import {
  FaStar,
  FaLeaf,
  FaWrench,
  FaHandsHelping,
  FaBrush,
  FaSpa,
  FaSmile,
} from "react-icons/fa";

const OurExpertsPage = () => {
  return (
    <section className="bg-gray-100 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Our Experts</h1>
        <p className="text-gray-600 text-lg mt-4">
          A team of dedicated professionals to meet all your needs.
        </p>
      </div>

      {/* Experts List */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Expert Level 1 */}
          <div className="relative w-full max-w-4xl">
            <div className="bg-white shadow-md rounded-lg p-8 text-center border-b-4 border-indigo-500">
              <FaStar className="text-indigo-500 text-6xl mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Elite Expert
              </h2>
              <p className="text-gray-600">
                Master of their craft, providing unparalleled expertise.
              </p>
            </div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <FaStar className="text-indigo-500 text-4xl bg-gray-100 p-2 rounded-full" />
            </div>
          </div>

          {/* Expert Level 2 */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {/* Expert 1 */}
            <div className="bg-white shadow-md rounded-lg p-8 text-center border-b-4 border-green-500 w-80">
              <FaLeaf className="text-green-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Nature Specialist
              </h3>
              <p className="text-gray-600">
                Expert in eco-friendly and natural solutions.
              </p>
            </div>

            {/* Expert 2 */}
            <div className="bg-white shadow-md rounded-lg p-8 text-center border-b-4 border-yellow-500 w-80">
              <FaWrench className="text-yellow-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Tech Genius
              </h3>
              <p className="text-gray-600">
                Solving technical challenges with precision.
              </p>
            </div>
          </div>

          {/* Expert Level 3 */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {/* Expert 3 */}
            <div className="bg-white shadow-md rounded-lg p-8 text-center border-b-4 border-red-500 w-72">
              <FaHandsHelping className="text-red-500 text-4xl mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Support Specialist
              </h4>
              <p className="text-gray-600">
                Always ready to assist with exceptional service.
              </p>
            </div>

            {/* Expert 4 */}
            <div className="bg-white shadow-md rounded-lg p-8 text-center border-b-4 border-purple-500 w-72">
              <FaBrush className="text-purple-500 text-4xl mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Art Creator
              </h4>
              <p className="text-gray-600">
                Transforming visions into beautiful realities.
              </p>
            </div>

            {/* Expert 5 */}
            <div className="bg-white shadow-md rounded-lg p-8 text-center border-b-4 border-blue-500 w-72">
              <FaSpa className="text-blue-500 text-4xl mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Relaxation Guru
              </h4>
              <p className="text-gray-600">
                Promoting well-being and tranquility.
              </p>
            </div>

            {/* Expert 6 */}
            <div className="bg-white shadow-md rounded-lg p-8 text-center border-b-4 border-pink-500 w-72">
              <FaSmile className="text-pink-500 text-4xl mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Happiness Officer
              </h4>
              <p className="text-gray-600">
                Ensuring a delightful and memorable experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertsPage;
