"use client";
import Link from "next/link";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import Container from "./Container";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import SidebarCart from "./SidebarCar";
import { useSelector } from "react-redux";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { StateType } from "../../type";

const BottomHeader = () => {
  const { data: session } = useSession();
  const { cart } = useSelector((state: StateType) => state.perler);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="shadow-md shadow-btnColor border border-b-2 ">
      <Container className="w-full  text-black  flex justify-between items-center">
        {/* Left Side - Contact Information */}
        <div className="flex space-x-6">
          <div className="flex items-center">
            <span className="text-sm">Phone: </span>
            <span className="ml-2 text-sm">+1 234 567 890</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm">Location: </span>
            <span className="ml-2 text-sm">123 Main St, City, Country</span>
          </div>
          <div>
            {session?.user ? (
              <p
                className="text-xl font-medium cursor-pointer text-btnColor"
                onClick={() => signOut()}
              >
                Logout
              </p>
            ) : (
              <p
                className="text-xl animate-bounce font-medium cursor-pointer text-btnColor"
                onClick={() => signIn()}
              >
                Login
              </p>
            )}
          </div>
        </div>

        {/* Right Side - Cart and Authentication */}
        <div className="flex space-x-6 items-center">
          {/* Cart */}

          {/* sidebar drower */}
          <Button
            className="text-btnColor border-none relative"
            onClick={() => setOpenModal(true)}
          >
            <FaShoppingCart size={20} />
            <span className="absolute bg-red-500 h-5 text-white rounded-full w-5 top-0 right-0 ">
              {" "}
              {cart.length ? cart.length : "0"}
            </span>
          </Button>
          <SidebarCart setOpenModal={setOpenModal} openModal={openModal} />

          {/* sidebar drower */}

          {/* Authentication - Login / Logout */}
          <Link href="/" className="flex items-center">
            {session?.user ? (
              <div className="">
                <Image
                  className="rounded-full h-10 w-20"
                  src={session.user.image!}
                  alt="image"
                  height={50}
                  width={50}
                />
              </div>
            ) : (
              <>
                {" "}
                <FaUserAlt onClick={() => signIn()} className="text-2xl" />
              </>
            )}
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
