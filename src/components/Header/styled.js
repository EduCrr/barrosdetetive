import styled from "styled-components";

export const HeaderArea = styled.header`
  max-width: 1200px;
  margin: ${(props) => (props.black ? "15px auto" : "30px auto")};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  transition: all ease 0.4s;
  .menu {
    display: none;
  }
  @media (max-width: 1024px) {
    max-width: 1000px;
    justify-content: center;
    ul,
    svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 768px) {
    justify-content: space-around;
    .menu {
      display: flex;
      z-index: 999;
    }
    ul {
      top: 0;
      right: 0;
      width: ${(props) => (props.open ? "30%" : "0")};
      height: 100vh;
      background-color: #191919;
      position: fixed;
      flex-direction: column;
      transition: all ease 0.4s;
      ul,
      li {
        justify-content: center;
        margin: 10px auto;
      }
    }
  }
  @media (max-width: 400px) {
    ul {
      width: ${(props) => (props.open ? "100%" : "0")};
    }
  }
`;

export const Featured = styled.div`
  height: 100vh;
  .featuredVertical {
    text-align: center;
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #191919 5%, transparent 95%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      font-weight: bold;
      margin: 15px 0px;
    }
    h1 {
      text-align: center;
      font-size: 40px;
      letter-spacing: 2px;
      font-weight: bold;
    }
  }
`;
