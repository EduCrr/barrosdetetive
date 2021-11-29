import styled from "styled-components";

export const HomeArea = styled.main`
  max-width: 1200px;
  margin: 4rem auto;

  .about {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .aboutPhoto {
      flex: 1;
      margin: auto;
      img {
        filter: brightness(80%);
        -webkit-filter: brightness(80%);
        -moz-filter: brightness(80%);
        width: auto;
        height: 550px;
        border-radius: 15px 50px 30px;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
          0 15px 12px rgba(0, 0, 0, 0.22);
      }
    }
    .aboutDesc {
      width: 550px;
      margin: auto;
      h2 {
        margin-bottom: 20px;
      }

      a {
        justify-content: center;
      }
    }
  }
  .infoSlider {
    margin: 2rem auto;
    text-align: center;
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 15px 50px 30px;
    height: 250px;
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;

    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    p {
      color: #b2b2b1;
      font-size: 15px;
      line-height: 1.7;
    }
    &:hover {
      transform: scale(1);
    }
    i {
      color: #c78a13;
    }
    .areaSlider {
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .services {
    margin: 5rem auto;
    .alice-carousel .alice-carousel__next-btn-item,
    .alice-carousel__prev-btn-item {
      background-color: #ffd000;
      padding: 20px;
      border-radius: 5px 25px 15px;
      span {
        color: white !important;
        font-size: 20px;
      }
    }
    h2 {
      text-align: center;
    }
    h3 {
      margin: 10px 0px;
      font-size: 22px;
    }
  }
  .servicesFinal {
    .sessionOne,
    .sessionTwo {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .ServicePhoto {
      img {
        width: auto;
        height: 550px;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
          0 15px 12px rgba(0, 0, 0, 0.22);
        border-radius: 15px 50px 30px;
      }
    }
    .ServiceDesc {
      width: 550px;
      h2 {
        margin-bottom: 20px;
      }
    }
  }
  .backgroundCity {
    margin-top: 5rem;
    .featuredVertical {
      width: inherit;
      height: inherit;
      background: linear-gradient(to right, #191919 20%, transparent 98%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .textInside {
        max-width: 500px;

        h2 {
          margin-bottom: 20px;
        }
      }
    }
  }
`;
