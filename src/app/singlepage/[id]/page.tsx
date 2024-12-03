import Container from "@/components/Container";
import SingleService from "@/components/SingleService";
import { mainService } from "@/constant";

interface Props {
  params: {
    id: string;
  };
}

const SinglePage = ({ params }: Props) => {
  const { id } = params;

  const filterData = mainService.find((item) => item.id == Number(id));

  return (
    <Container className="">
      <SingleService item={filterData} />
    </Container>
  );
};

export default SinglePage;
