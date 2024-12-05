"use client";

import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";

const SuccessPage = () => {
  const searchParams = useSearchParams(); // Corrected typo from "serchParams"
  console.log("searchParams", searchParams);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    redirect("/"); // Redirect if session_id is missing
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-green-500 mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your purchase. Your order is being processed.
        </p>

        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">
            View Cart
          </button>

          <Link
            href="/"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Continue Add Your Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
