import styled from "styled-components";

export const HeaderArea = styled.header`
  max-width: 1200px;
  margin: 30px auto;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
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