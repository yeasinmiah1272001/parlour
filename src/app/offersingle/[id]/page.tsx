"use client";

import Container from "@/components/Container";
import SingleService from "@/components/SingleService";
import { mainService } from "@/constant";
import { ProductItem } from "../../../../type";

interface PageProps {
  params: {
    id: string; // This ensures compatibility with dynamic routes where `id` is a string.
  };
}

const OfferSinglePage: React.FC<PageProps> = ({ params }) => {
  const { id } = params;

  // Parse `id` as a number for comparison
  const filterData = mainService.find((item) => item.id === parseInt(id, 10));

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
