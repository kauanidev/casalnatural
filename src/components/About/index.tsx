import { Container, PhotosGrid } from "./styles";

export const About = () => {
  return (
    <Container>
      <div>
        <div>
          <h3>Quem somos nós?</h3>
          <p>
            Médico, empresária, papais do Lorenzo. A princípio, éramos apenas
            clientes e usuários dos óleos essenciais, mas vendo os benefícios
            que eles traziam para nossa vida, decidimos entrar de cabeça no
            plano de carreira da empresa e investir para obter uma renda
            residual, saúde física, mental e financeira, pois essa escolha
            permite que estejamos cada vez mais presentes na vida do nosso
            filho.
          </p>
        </div>
        <PhotosGrid>
          <img
            src="/casalkit.jfif"
            alt="Casal segurando o Kit Brasil Living doTerra"
          />
          <img
            src="/sam.jfif"
            alt="Mulher de cabelos compridos segurando um óleo essencial de Gerânio da doTerra"
          />
          <img
            src="/loli.jfif"
            alt="Menino loiro de aproximadamente 2 anos mexendo no difusor Petal da doTerra"
          />
        </PhotosGrid>
      </div>
    </Container>
  );
};
