import Container from "@/components/Container";
import SingleService from "@/components/SingleService";
import { mainService } from "@/constant";
import { ProductItem } from "../../../../type";

interface Prop {
  params: {
    id: string | number;
  };
}

const OfferSinglePage = ({ params }: Prop) => {
  const { id } = params;

  // Find the service by ID
  const filterData = mainService.find((item) => item.id === Number(id));

  return (
    <Container className="">
      <SingleService item={filterData as ProductItem} />{" "}
      {/* Type assertion to ProductItem */}
    </Container>
  );
};

export default OfferSinglePage;
