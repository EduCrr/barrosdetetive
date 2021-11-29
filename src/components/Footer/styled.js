import styled from "styled-components";

export const FooterArea = styled.footer`
  max-width: 1200px;
  margin: 5rem auto;
  display: flex;
  justify-content: space-between;
  .leftSide {
    h2 {
      margin-bottom: 20px;
    }
    .icon {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      color: white;
      svg {
        margin-right: 10px;
      }
    }
    form {
      margin-top: 3rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;

      input {
        cursor: pointer;
        background-color: #1e1e1e;
        padding: 20px;
        border-radius: 4px;
        color: white;
        margin-bottom: 20px;
        border: 0px;
        outline: 0;
        transition: all ease 0.4s;
        font-family: "Spartan", sans-serif;
        font-weight: bold;
        &:hover {
          background-color: #c78a13;
        }
      }
    }
  }
  .rightSide {
    overflow-x: hidden;
    display: flex;
    align-items: flex-end;
    img {
      width: 375px;
      height: 550px;
      object-fit: cover;
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
      border-radius: 15px 50px 30px;
    }
  }
  @media (max-width: 1024px) {
    max-width: 1000px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 980px) {
    .leftSide,
    .icon {
      text-align: center;
      justify-content: center;
    }
    flex-direction: column;
    form {
      width: 90%;
      margin: auto;
    }
    .rightSide {
      margin: 20px auto;
    }
  }
`;
