import styled from "styled-components";

export const Container = styled.section`
  background: #ffe0bc;
  padding: 100px 10px;
  display: flex;

  h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    text-align: justify;
    line-height: 27px;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    max-width: 1400px;
    margin: 0 auto;
    gap: 40px;
    justify-items: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 100px 30px;

    p {
      font-size: 17px;
      line-height: 25px;
    }
    > div {
      grid-template-columns: 1fr 1.2fr;
    }
  }

  @media (max-width: 650px) {
    text-align: center;

    h3 {
      font-size: 38px;
    }
    > div {
      grid-template-columns: 1fr;
    }
  }
`;

export const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 400px;
  gap: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    height: auto;
    grid-auto-rows: 200px;
    gap: 10px;
    img:last-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 650px) {
    width: 100%;
    grid-auto-rows: 400px;
  }
`;
