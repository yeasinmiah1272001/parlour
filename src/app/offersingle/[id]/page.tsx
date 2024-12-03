import Container from "@/components/Container";
import SingleService from "@/components/SingleService";
import { mainService } from "@/constant";
import { ProductItem } from "../../../../type";

// Define the component using correct PageProps type
interface PageProps {
  params: {
    id: string; // Dynamic route parameters are strings
  };
}

const OfferSinglePage = ({ params }: PageProps) => {
  const { id } = params;

  // Convert id to a number and find the service
  const filterData = mainService.find((item) => item.id === Number(id));

  // Handle case where the service is not found
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
