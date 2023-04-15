import { Container } from "./styles";

export const WhatIsVideo = () => {
  return (
    <Container>
      <div>
        <iframe
          src="https://www.youtube.com/embed/YoIk18xWxZ4?controls=0"
          title="O que é um óleo essencial doTERRA?"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <p>
          Você sabe o que são os óleos essenciais? São compostos naturais
          altamente benéficos para nossa saúde, prevenindo e atuando contra
          inúmeros problemas corporais. Assista o vídeo para mais informações!
        </p>
      </div>
    </Container>
  );
};
