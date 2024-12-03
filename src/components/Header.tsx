import Container from "./Container";
import logo from "../assets/logo.png";
import Image from "next/image";
import { navigation } from "@/constant";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" ">
      <Container className="">
        <div className="flex items-center justify-between px-4 ">
          <div>
            <Link href={"/"}>
              {" "}
              <Image
                className="w-32 h-10"
                src={logo}
                alt="logo"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-10 font-medium ">
            {navigation.map((item, index) => (
              <p key={index}>{item.title}</p>
            ))}
          </div>
          <div className="md:hidden">
            {/* You can add a mobile menu icon here if needed */}
            <button className="text-xl">☰</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
