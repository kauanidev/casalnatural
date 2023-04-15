import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #9a6b33;
  padding: 100px 10px;

  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: none;
    border-radius: 5px;
    background: #ffffff;
    padding: 20px;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-width: 1000px;
    gap: 40px;
    align-items: center;
  }

  p {
    color: #ffffff;
    font-size: 20px;
    font-weight: 300;
    text-align: justify;
    line-height: 30px;
  }

  @media (max-width: 768px) {
    div {
      grid-template-columns: 1fr;
      justify-items: center;
      max-width: 500px;
    }
  }
`;
