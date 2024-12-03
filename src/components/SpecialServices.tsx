import Container from "./Container";
import { speciaService } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const SpecialServices = () => {
  return (
    <Container className="">
      <div>
        <h1 className="text-4xl font-semibold text-center">Special Offer</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        {speciaService.map((item) => (
          <div
            className="flex space-x-4 mt-6 p-3 rounded-md items-center shadow-lg shadow-btnColor/50"
            key={item.id}
          >
            <div className="group overflow-hidden transition">
              <Link
                href={{
                  pathname: `/offersingle/${item.id}`,
                  query: { id: item.id },
                }}
              >
                <Image
                  className="group-hover:scale-105 transition-transform duration-300"
                  alt="image"
                  src={item.image}
                  height={300}
                  width={300}
                />
              </Link>
            </div>
            <div className="space-y-2">
              <h1 className="text-xl text-btnColor">{item.title}</h1>
              <h2>{item.category}</h2>
              <h2>{item.offers}</h2>
              <p className="text-xl font-medium text-btnColor">
                {item.price} BDT
              </p>
              <p>{item.description.slice(0, 50)}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SpecialServices;
