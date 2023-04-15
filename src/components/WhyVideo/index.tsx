import { Container } from "./styles";

export const WhyVideo = () => {
  return (
    <Container>
      <h3>Por que doTERRA é diferente?</h3>
      <iframe
        src="https://www.youtube.com/embed/iL1L2lYztKQ?controls=0"
        title="Por que escolher os óleos essenciais doTERRA?"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Container>
  );
};
