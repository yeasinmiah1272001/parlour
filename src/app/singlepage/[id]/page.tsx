import Container from "@/components/Container";
import SingleService from "@/components/SingleService";
import { mainService } from "@/constant";
import { ProductItem } from "../../../../type";

interface Props {
  params: {
    id: number;
  };
}

const SinglePage = ({ params }: Props) => {
  const { id } = params;

  const filterData = mainService.find((item) => item.id == Number(id));

  return (
    <Container className="">
      <SingleService item={filterData as ProductItem} />
    </Container>
  );
};

export default SinglePage;
