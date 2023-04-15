import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 80px 10px;
  background: url("/bg-video1.png") no-repeat center/cover;

  h3 {
    font-size: 30px;
    text-align: center;
  }

  iframe {
    width: 100%;
    max-width: 500px;
    aspect-ratio: 16 / 9;
    border: none;
    border-radius: 5px;
    background: #ffe0bc;
    padding: 20px;
  }
`;
