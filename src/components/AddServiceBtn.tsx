"use client";
import { addTocart } from "@/redux/perlerSlice";
import { ProductItem, StateType } from "../../type";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
const AddServiceBtn = ({ item }: { item: ProductItem }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: StateType) => state.perler);

  const handleAddService = () => {
    const isItemInServiceList = cart.find(
      (serviceItem: ProductItem) => serviceItem.id === item.id
    );

    if (isItemInServiceList) {
      toast.error(`${item.title} is already in your service list!`);
    } else {
      dispatch(addTocart(item));
      toast.success(`${item.title} added to your service list!`);
    }
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
