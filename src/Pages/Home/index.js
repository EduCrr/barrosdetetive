import React, { useState } from "react";
import { HomeArea } from "./styled";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Stars from "@material-ui/icons/Stars";

export default function Home() {
  const handleDragStart = (e) => e.preventDefault();
  const [sliderInfo, setSliderInfo] = useState([
    {
      title: "Rastreador",
      icon: <Stars />,
      descripton: " Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      title: "Casos de traição",
      icon: <Stars />,
      descripton:
        " Lorem ipsum dolor sit amet,   aliquip ex ea commodo consequat. consectetur adipiscing elit,",
    },
    {
      title: "Casos de traição",
      icon: <Stars />,
      descripton: " Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
  ]);
  const items = sliderInfo.map((item, k) => (
    <div className="infoSlider" key={k}>
      <div className="areaSlider">
        <i>{item.icon}</i>
        <h3>{item.title}</h3>
        <p>{item.descripton}</p>
      </div>
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <HomeArea>
      <section className="about">
        <div className="aboutPhoto">
          <img alt="" src="/assets/about2.jpg" />
        </div>
        <div className="aboutDesc">
          <h2>Sobre Nós</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a className="btn">Fale Conosco</a>
        </div>
      </section>
      <section className="services">
        <h2>Serviços</h2>
        <AliceCarousel
          mouseTracking
          items={items}
          disableDotsControls={true}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </section>
      <section className="servicesFinal">
        <div className="sessionOne">
          <div className="ServiceDesc">
            <h2>Experiência & Segurança</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="ServicePhoto">
            <img alt="" src="/assets/experiencia.jpg" />
          </div>
        </div>
        <div className="sessionTwo">
          <div className="ServicePhoto">
            <img alt="" src="/assets/resultado.jpg" />
          </div>
          <div className="ServiceDesc">
            <h2>Resultados Rápidos</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="sessionOne">
          <div className="ServiceDesc">
            <h2>Sigilo Absoluto</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="ServicePhoto">
            <img alt="" src="/assets/sigilo.jpg" />
          </div>
        </div>
      </section>
    </HomeArea>
  );
}
