import React from "react";
import { ProductItem } from "../../type";

const AddServiceBtn = ({ item }: { item: ProductItem }) => {
  const handleAddService = () => {
    console.log("item", item);
  };
  return (
    <div>
      <button
        onClick={handleAddService}
        className="bg-btnColor text-white px-4 py-3 font-medium rounded-md hover:bg-opacity-90 transition"
      >
        Add Your Service
      </button>
    </div>
  );
};

export default AddServiceBtn;
