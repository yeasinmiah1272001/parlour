import Image from "next/image";
import Container from "./Container";
import banner from "../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";

const Banner = () => {
  return (
    <Container className="py-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left */}
        <div className="text-center md:text-left space-y-4 max-w-2xl">
          <h1 className="text-5xl font-semibold text-black leading-tight">
            BEAUTY SALON
          </h1>
          <h1 className="text-4xl font-semibold text-btnColor leading-tight">
            FOR EVERY WOMAN
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet
            maecenas. Feugiat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat.
          </p>
          <button className="bg-btnColor text-white px-6 py-3 font-medium rounded-md hover:bg-opacity-90 transition">
            Get an Appointment
          </button>
        </div>
        {/* Right */}
        <div className="group transition overflow-hidden shadow-lg shadow-btnColor">
          <Image
            src={banner}
            height={400}
            width={500}
            alt="Banner"
            className="rounded-lg bg-bodyColor shadow-lg group-hover:scale-110 transition-transform duration-300 "
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
