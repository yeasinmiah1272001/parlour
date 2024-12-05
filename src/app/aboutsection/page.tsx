import { FaSpa, FaLeaf, FaHandsHelping } from "react-icons/fa";

import image from "../../assets/images/special/servie.jpg";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src={image}
              alt="Parlor Services"
              className="rounded-lg shadow-lg w-full"
              height={300}
              width={300}
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 lg:pl-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About Our Parlor
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to our luxurious parlor, where beauty meets relaxation.
              Our expert team is dedicated to providing top-notch services,
              ensuring you leave feeling refreshed and rejuvenated.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <div className="flex items-center space-x-4">
                <FaSpa className="text-teal-500 text-4xl" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Relaxing Spa
                  </h4>
                  <p className="text-gray-600">
                    Experience ultimate relaxation with our spa treatments.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex items-center space-x-4">
                <FaLeaf className="text-green-500 text-4xl" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Organic Products
                  </h4>
                  <p className="text-gray-600">
                    We use only natural and organic products for your care.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="flex items-center space-x-4">
                <FaHandsHelping className="text-orange-500 text-4xl" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Expert Team
                  </h4>
                  <p className="text-gray-600">
                    Our trained professionals are here to pamper you.
                  </p>
                </div>
              </div>

              {/* Service 4 */}
              <div className="flex items-center space-x-4">
                <FaSpa className="text-pink-500 text-4xl" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Custom Packages
                  </h4>
                  <p className="text-gray-600">
                    Tailored beauty and relaxation packages for every need.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
