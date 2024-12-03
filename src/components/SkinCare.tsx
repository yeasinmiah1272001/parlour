import React from "react";
import Container from "./Container";
import Image from "next/image";
import skinImage from "../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";

const SkinCare = () => {
  return (
    <Container className="py-8 mt-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* left */}
        <div className="overflow-hidden shadow-lg shadow-btnColor group transition">
          <Image
            src={skinImage}
            height={700}
            width={600}
            alt="Banner"
            className="rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300 "
          />
        </div>
        {/* right */}
        <div className="text-center md:text-left space-y-4 max-w-md">
          <h1 className="text-4xl font-semibold text-black leading-tight">
            Let us handle your
          </h1>
          <h1 className="text-4xl font-semibold text-btnColor leading-tight">
            screen Professionally.
          </h1>
          <p className="text-gray-600">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus commodo ipsum.
          </p>
          <div className="flex space-x-8">
            <div>
              <h3 className="text-4xl text-btnColor font-bold">500+</h3>
              <span>Happy Customer</span>
            </div>
            <div>
              <h3 className="text-4xl text-btnColor font-bold">500+</h3>
              <span>Happy Customer</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SkinCare;
