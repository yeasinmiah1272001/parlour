import Image from "next/image";
import img from "../assets/layout-07.jpg";
import Container from "./Container";
const PremiumBanner = () => {
  return (
    <Container className="">
      <div className="relative flex items-center">
        <Image
          className="w-full"
          src={img}
          alt="image"
          width={700}
          height={200}
        />
        <div className="absolute top-0 right-0">
          <h1>BEAUTY SALON</h1>
          <h1>FOR EVERY WOMAN</h1>
        </div>
      </div>
    </Container>
  );
};

export default PremiumBanner;
