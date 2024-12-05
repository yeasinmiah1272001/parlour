import {
  FaSpa,
  FaLeaf,
  FaHeart,
  FaBrush,
  FaHandHoldingWater,
  FaCrown,
  FaHotTub,
  FaGem,
  FaMagic,
} from "react-icons/fa";

const GalleryPage = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-teal-500 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Our Exclusive Parlor Gallery
        </h1>
        <p className="text-lg">
          Discover a collection of services designed to bring out your best.
          Experience the luxury and comfort we provide.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Explore Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaSpa className="text-teal-500 text-7xl mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Relaxing Spa
            </h3>
            <p className="text-gray-600">
              Unwind with our serene spa treatments designed for ultimate
              relaxation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaLeaf className="text-green-500 text-7xl mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Organic Treatments
            </h3>
            <p className="text-gray-600">
              Discover beauty through nature with our organic product-based
              treatments.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaHeart className="text-pink-500 text-7xl mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Heartfelt Care
            </h3>
            <p className="text-gray-600">
              Every service is crafted with love and attention for your
              satisfaction.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaBrush className="text-purple-500 text-7xl mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Expert Makeovers
            </h3>
            <p className="text-gray-600">
              Enhance your beauty with our expert makeup artists.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaHandHoldingWater className="text-blue-500 text-7xl mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hydrotherapy
            </h3>
            <p className="text-gray-600">
              Rejuvenate with our exclusive hydrotherapy treatments.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaCrown className="text-yellow-500 text-7xl mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Royal Treatments
            </h3>
            <p className="text-gray-600">
              Experience luxury with our premium royal packages.
            </p>
          </div>

          {/* Card 7 */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaHotTub className="text-orange-500 text-7xl mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hot Tub Therapy
            </h3>
            <p className="text-gray-600">
              Relax and soak in our soothing hot tub treatments.
            </p>
          </div>

          {/* Card 8 */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaGem className="text-indigo-500 text-7xl mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Gem Facials
            </h3>
            <p className="text-gray-600">
              Radiate like a gem with our luxurious facial treatments.
            </p>
          </div>

          {/* Card 9 */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaMagic className="text-pink-500 text-7xl mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Magical Glow
            </h3>
            <p className="text-gray-600">
              Achieve a radiant glow with our signature glow-up treatments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
