// "use client";
import Container from "@/components/Container";
import SingleService from "@/components/SingleService";
import { mainService } from "@/constant";
import { ProductItem } from "../../../../type";

interface PageProps {
  params: {
    id: string;
  };
}

const OfferSinglePage = ({ params }: PageProps) => {
  const { id } = params;
  console.log("id", typeof id, "params", params);

  const filterData = mainService.find((item) => item.id === Number(id));

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
