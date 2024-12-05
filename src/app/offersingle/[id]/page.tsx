import React from "react";
import Container from "@/components/Container";
import SingleOffer from "@/components/SingleOffer";
import { speciaService } from "@/constant";
import { OfferItem } from "../../../../type";

const OfferSinglePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params; // Unwrap the promise

  console.log("params", params);

  const filterData = speciaService.find((item) => item.id === Number(id));

  if (!filterData) {
    return (
      <Container className="">
        <p>Service not found.</p>
      </Container>
    );
  }

  return (
    <Container className="">
      <SingleOffer item={filterData as OfferItem} />
    </Container>
  );
};

export default OfferSinglePage;
