import { navigation } from "@/constant";
import Container from "./Container";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <div className="py-7 bg-btnColor">
      <Container className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
        <div className="space-y-2">
          <h1 className="text-white text-xl font-medium">
            H#000 (0th Floor), Road #00,
          </h1>
          <p className="text-white text-xl font-medium">
            New DOHS, Mohakhali, Dhaka, Bangladesh
          </p>
        </div>
        <div className="text-xl text-white">
          {navigation.map((item, index) => (
            <div key={index} className="py-2">
              <p className="space-y-3">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="text-xl text-white">
          {navigation.map((item, index) => (
            <div key={index} className="py-2">
              <p className="space-y-3">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="text-xl text-white">
          {navigation.map((item, index) => (
            <div key={index} className="py-2">
              <p className="space-y-3">{item.title}</p>
            </div>
          ))}
          <SocialLink />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
