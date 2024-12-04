"use client";

import { useSelector } from "react-redux";
import { StateType } from "../../type";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai"; // Close icon from react-icons
import Link from "next/link";
import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

interface SidebarCartProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const SidebarCart = ({ openModal, setOpenModal }: SidebarCartProps) => {
  const { cart } = useSelector((state: StateType) => state.perler);

  return (
    <Modal
      className="p-4  lg:mt-40 shadow-md shadow-btnColor"
      dismissible
      show={openModal}
      onClose={() => setOpenModal(false)}
    >
      <div className="relative p-4">
        {/* Modal Header */}
        <Modal.Header className="text-center text-xl font-semibold text-btnColor">
          Your Cart : {cart.length ? cart.length : "0"}
        </Modal.Header>

        {/* Modal Body with Cart Items */}
        <Modal.Body className="p-4">
          <div className="space-y-4">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-2 border-b border-gray-300"
                >
                  <div className="flex items-center gap-2   ">
                    <div className="flex items-center justify-center w-7 h-7 duration-300 bg-gray-500 rounded-full transition  hover:bg-red-500 group">
                      <AiOutlineClose
                        size={20}
                        className="text-white group-hover:text-gray-200 transition duration-200"
                      />
                    </div>
                    <Image
                      className="w-16 h-16 rounded-md"
                      src={item.image}
                      alt={item.title}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col ml-4">
                    <h1 className="font-medium text-lg text-btnColor">
                      {item.title}
                    </h1>
                  </div>
                  <div>
                    <p className="text-xl text-btnColor ">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm text-btnColor">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </Modal.Body>

        {/* Modal Footer with Checkout Button */}
        <Modal.Footer className="flex justify-between items-center">
          {cart.length > 0 && (
            <div>
              <Button className="w-full bg-btnColor text-white py-2 rounded-md text-lg hover:bg-opacity-90 transition">
                Proceed to Checkout
              </Button>
            </div>
          )}
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default SidebarCart;
