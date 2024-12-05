import Container from "@/components/Container";
import SingleService from "@/components/SingleService";
import { mainService } from "@/constant";
import { ProductItem } from "../../../../type";

const SinglePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const filterData = mainService.find((item) => item.id == Number(id));

  return (
    <Container className="">
      <SingleService item={filterData as ProductItem} />
    </Container>
  );
};

export default SinglePage;
