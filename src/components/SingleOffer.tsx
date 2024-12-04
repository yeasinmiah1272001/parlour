"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { OfferItem, ProductItem } from "../../type";
import AddServiceBtn from "./AddServiceBtn";

const SingleOffer = ({ item }: { item: OfferItem }) => {
  return (
    <div className="p-6 space-y-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Service Image and Details */}
      <div className="flex overflow-hidden group transition flex-col md:flex-row">
        <Image
          className="rounded-lg group-hover:scale-95 transition-transform duration-300 shadow-lg shadow-btnColor object-cover"
          src={item.image}
          alt={item.title}
          height={500}
          width={500}
        />

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
          <AddServiceBtn item={item} />
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>

      {/* Reviews Section */}
      <div>
        <h2 className="text-2xl font-bold text-btnColor mb-4">Reviews:</h2>
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
  );
};

export default SingleOffer;
