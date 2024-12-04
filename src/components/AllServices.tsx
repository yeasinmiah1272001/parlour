"use client";

import { allService } from "@/constant"; // assuming allService is an array of objects
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import AddServiceBtn from "./AddServiceBtn";
import { useState } from "react";
import Link from "next/link";
import { ProductItem } from "../../type";

const AllServices = () => {
  const [filteredServices, setFilteredServices] = useState(allService);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [offerFilter, setOfferFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 2; // Default number of services per page

  const handleCategoryFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
  };

  const handleOfferFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOfferFilter(e.target.value);
  };

  // Filter services based on category and offer
  const filteredData = filteredServices.filter((service) => {
    const categoryMatch = categoryFilter
      ? service.category === categoryFilter
      : true;
    const offerMatch = offerFilter ? service.offers === offerFilter : true;
    return categoryMatch && offerMatch;
  });

  // Paginate the filtered data
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredData.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const totalPages = Math.ceil(filteredData.length / servicesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between space-x-72">
        {/* Left Side Filters */}
        <div className="w-1/4 bg-gray-100 fixed top-36 left-0 z-50 p-6 rounded-lg shadow-lg h-screen">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Filter Services
          </h2>

          {/* Category Filter */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">
              Category
            </label>
            <select
              id="category"
              value={categoryFilter}
              onChange={handleCategoryFilter}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">All Categories</option>
              {/* Map unique categories */}
              {Array.from(new Set(allService.map((item) => item.category))).map(
                (category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Offer Filter */}
          <div>
            <label htmlFor="offer" className="block text-gray-700">
              Offer
            </label>
            <select
              id="offer"
              value={offerFilter}
              onChange={handleOfferFilter}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">All Offers</option>
              {/* Map unique offers */}
              {Array.from(new Set(allService.map((item) => item.offers))).map(
                (offer, index) => (
                  <option key={index} value={offer}>
                    {offer}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        {/* Right Side Services */}
        <div className="w-3/4  space-y-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Our Services
          </h2>
          <div className="space-y-8">
            {currentServices.map((item, index) => (
              <div
                key={index}
                className="p-6 space-y-6 bg-gray-100 rounded-lg shadow-lg"
              >
                {/* Service Image and Details */}
                <div className="flex overflow-hidden group transition flex-col md:flex-row">
                  <Link
                    href={{
                      pathname: `/singlepage/${item.id}`,
                      query: { id: item.id },
                    }}
                  >
                    <Image
                      className="rounded-lg group-hover:scale-95 transition-transform duration-300 shadow-lg shadow-btnColor object-cover"
                      src={item.image}
                      alt={item.title}
                      height={300}
                      width={500}
                    />
                  </Link>

                  <div className="mt-4 md:mt-0 md:ml-8 space-y-4">
                    <h1 className="text-2xl font-bold text-btnColor">
                      Service: {item.title}
                    </h1>
                    <h2 className="text-xl font-semibold text-gray-700">
                      Category: {item.category}
                    </h2>
                    <h2 className="text-xl font-semibold text-gray-700">
                      Offer: {item.offers}
                    </h2>
                    <p className="text-lg font-bold text-green-600">
                      Price: {item.price} BDT
                    </p>
                    <AddServiceBtn item={item as ProductItem} />
                    <p className="text-gray-600">
                      {item.description.slice(0, 100)}
                    </p>
                  </div>
                </div>

                {/* Reviews Section */}
                <div>
                  <h2 className="text-2xl font-bold text-btnColor mb-4">
                    Reviews:
                  </h2>
                  <div className="space-y-4">
                    {item.reviews.length > 0 ? (
                      item.reviews.map((review, index) => (
                        <div
                          key={index}
                          className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {review.user}
                            </h3>
                            <div className="flex items-center space-x-1 text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <FaStar
                                  key={i}
                                  className={
                                    i < review.rating
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  }
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 mt-2">{review.comment}</p>
                        </div>
                      ))
                    ) : (
                      <p>No reviews yet. Be the first to review!</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
            >
              Previous
            </button>
            <span className="flex items-center text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
