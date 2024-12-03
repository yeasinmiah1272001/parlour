"use client";

import Container from "./Container";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Image from "next/image";
import { reviews } from "@/constant";

const ClientReview = () => {
  return (
    <div className="bg-white">
      <Container className="bg-white">
        <h1 className="text-center text-3xl font-semibold mb-6">
          Client <span className="text-btnColor">Reviews</span>
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((item, index) => (
            <SwiperSlide className="p-10" key={index}>
              <div className=" h-64 p-3 w-96 max-w-4xl shadow-btnColor/80  shadow-lg rounded-lg flex flex-col items-center text-center space-y-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-full border border-gray-200"
                />
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <div className="flex items-center text-yellow-500">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className="text-lg">
                      {i < Math.floor(item.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{item.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default ClientReview;
