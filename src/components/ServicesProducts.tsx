"use client";
import React, { useState } from "react";
import Container from "./Container";
import { mainService } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const ServicesProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterService =
    selectedCategory === "All"
      ? mainService
      : mainService.filter((item) => item.category === selectedCategory);

  return (
    <Container className="">
      <div className="flex justify-center items-center  gap-6">
        {["All", "Fashion & Styling", "Makeup & Hair", " Skin Care"].map(
          (category) => (
            <button
              className={`border px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? "bg-btnColor text-white"
                  : "border-btnColor text-btnColor"
              }`}
              onClick={() => setSelectedCategory(category)}
              key={category}
            >
              {category}
            </button>
          )
        )}
      </div>
      <div className="grid mt-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filterService.map((item) => (
          <div
            key={item.id}
            className="border overflow-hidden group transition shadow-lg shadow-btnColor/30  rounded-md border-gray-400"
          >
            <div className="relative">
              <Link
                href={{
                  pathname: `/singlepage/${item.id}`,
                  query: { id: item.id },
                }}
              >
                <Image
                  className="h-48 object-cover w-full group-hover:scale-95 transition-transform duration-300"
                  src={item.image}
                  alt="image"
                  width={200}
                  height={200}
                />
              </Link>
              <span className="absolute text-sm  top-2 rounded-md bg-btnColor px-2 p-1 left-2">
                {item.discount} BDT
              </span>
            </div>
            <div className="p-2">
              <h1 className="text-xl font-medium">{item.title}</h1>
              <p className="text-btnColor font-medium">{item.price} BDT</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ServicesProducts;
