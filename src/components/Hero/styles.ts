import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 600px;
  background: url("/hero-bg.png") no-repeat center/cover;
  padding-left: 110px;
  display: flex;
  align-items: center;

  .logoCasalMobile {
    display: none;
  }

  div {
    max-width: 556px;

    h1 {
      font-size: 48px;
      font-family: "Secular One", sans-serif;
      font-weight: 400;
      line-height: 110%;
    }

    h2 {
      font-size: 27px;
      font-weight: 300;
      margin-top: 15px;
      margin-bottom: 50px;
    }
  }

  @media (max-width: 1024px) {
    height: 450px;
    padding-left: 40px;

    div {
      max-width: 450px;

      h1 {
        font-size: 38px;
      }

      h2 {
        font-size: 22px;
      }

      img {
        width: 120px;
      }
    }
  }

  @media (max-width: 780px) {
    height: 380px;
    padding-left: 30px;
    background-position: 80% 0%;

    div {
      max-width: 330px;

      h1 {
        font-size: 28px;
      }

      h2 {
        font-size: 18px;
        margin-bottom: 30px;
        margin-top: 5px;
      }

      img {
        width: 90px;
      }
    }
  }

  @media (max-width: 576px) {
    background: url("/hero-bg-mobile.png") no-repeat center/cover;
    height: 100vh;
    padding: 0 16px;
    text-align: center;
    flex-direction: column;
    justify-content: flex-end;

    .logoCasal {
      display: none;
    }

    .logoCasalMobile {
      margin-bottom: auto;
      margin-top: 50px;
      display: block;
    }
  }

  @media (max-width: 350px) {
    padding: 0;

    .logoCasalMobile {
      width: 120px;
      margin-top: 20px;
    }
  }
`;

export const LogosContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 576px) {
    justify-content: center;
    margin-bottom: 20vh;
  }

  @media (max-width: 350px) {
    margin-bottom: 10vh;
  }
`;
