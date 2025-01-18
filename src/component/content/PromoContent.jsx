import { Container, Stack } from "react-bootstrap";
import EmblaCarousel from "../utils/carousel/EmblaCarousel";

const PromoContent = ({ data }) => {
  const limitedData = data ? data.slice(0, 10) : [];

  return (
    <Container className="cpromo text-light">
      {limitedData.length > 0 ? (
        <Stack className="promoproduct text-center" gap={2}>
          <EmblaCarousel data={limitedData} options={{ loop: true }} />
        </Stack>
      ) : null}
    </Container>
  );
};

export default PromoContent;
