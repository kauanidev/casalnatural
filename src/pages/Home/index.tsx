import { About } from "../../components/About";
import { Hero } from "../../components/Hero";
import { WhatIsVideo } from "../../components/WhatIsVideo";
import { WhyVideo } from "../../components/WhyVideo";
import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Hero />
      <WhyVideo />
      <WhatIsVideo />
      <About />
    </Container>
  );
};
