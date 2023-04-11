import { Container, LogosContainer } from "./styles";

export const Hero = () => {
  return (
    <Container>
      <img
        className="logoCasalMobile"
        src="/logo-casalnatural.png"
        alt="Logotipo Casal Natural sendo a palavra Casal escrita em letra cursiva e Natural escrita em letras caixa-alta, uma palavra embaixo da outra."
      />
      <div>
        <h1>
          CONQUISTE SUA
          <br /> SAÚDE FÍSICA, MENTAL
          <br /> E FINANCEIRA CONOSCO
        </h1>
        <h2>
          E AINDA RECEBA NOSSO SUPORTE PARA EMPREENDER E OBTER ÊXITO NO NOSSO
          PLANO DE CARREIRA
        </h2>
        <LogosContainer>
          <img
            className="logoCasal"
            src="/logo-casalnatural.png"
            alt="Logotipo Casal Natural sendo a palavra Casal escrita em letra cursiva e Natural escrita em letras caixa-alta, uma palavra embaixo da outra."
          />
          <img
            src="/logo-consultor.png"
            alt="Logotipo da empresa DoTerra, escrito DoTerra em cima e Consultor de Bem-estar embaixo, separados por uma fina linha"
          />
        </LogosContainer>
      </div>
    </Container>
  );
};
