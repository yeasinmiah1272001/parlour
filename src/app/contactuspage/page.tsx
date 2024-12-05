import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUsPage = () => {
  return (
    <section className="bg-gray-100 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 text-lg mt-4">
          We&aposd love to hear from you! Reach out to us anytime.
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-600 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <FaPhone className="text-indigo-500 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-indigo-500 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">info@example.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-indigo-500 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-medium text-gray-800">Address</h3>
                <p className="text-gray-600">1234 Main Street, Anytown, USA</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Office Hours
            </h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
