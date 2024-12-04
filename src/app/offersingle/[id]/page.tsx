import Container from "@/components/Container";
import SingleOffer from "@/components/SingleOffer";
import { speciaService } from "@/constant";
import { OfferItem } from "../../../../type";

interface PageProps {
  params: {
    id: string;
  };
}

const OfferSinglePage = ({ params }: PageProps) => {
  const { id } = params;

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
