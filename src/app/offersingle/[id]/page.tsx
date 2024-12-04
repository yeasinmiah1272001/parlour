// "use client";
import Container from "@/components/Container";
import SingleService from "@/components/SingleService";
import { mainService } from "@/constant";
import { ProductItem } from "../../../../type";

type Params = {
  id: string; // Assuming the 'id' in URL is a string
};

const OfferSinglePage = ({ params }: { params: Params }) => {
  const { id } = params;

  const filterData = mainService.find((item) => item.id === Number(id));
  console.log("fil", filterData);
  if (!filterData) {
    return (
      <Container className="">
        <p>Service not found.</p>
      </Container>
    );
  }

  return (
    <Container className="">
      <SingleService item={filterData as ProductItem} />
    </Container>
  );
};

export default OfferSinglePage;
