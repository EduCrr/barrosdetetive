import React, { useState } from "react";
import { HomeArea } from "./styled";
import DirectionsCar from "@material-ui/icons/DirectionsCar";
import Room from "@material-ui/icons/Room";
import Group from "@material-ui/icons/Group";
import Explore from "@material-ui/icons/Explore";
import WorkOff from "@material-ui/icons/WorkOff";
import NotInterested from "@material-ui/icons/NotInterested";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";
export default function Home() {
  const [sliderInfo, setSliderInfo] = useState([
    {
      title: "Rastreador",
      icon: <Explore />,
      descripton: "Tenha a localização do seu veículo ao vivo 24/7.",
    },
    {
      title: "Casos de traição",
      icon: <Group />,
      descripton: "Descubra os segredos ocultos em seu relacionamento. ",
    },
    {
      title: "Localização de veículos",
      icon: <DirectionsCar />,
      descripton: "Localização do veículo em sistema personalizado.",
    },
    {
      title: "Fraudes contra o INSS",
      icon: <NotInterested />,
      descripton:
        "Trabalhamos para obter fotos e filmagens contra fraudes do INSS",
    },
    {
      title: "Localização de pessoas",
      icon: <Room />,
      descripton: "Localização de pessoas em sistema personalizado.",
    },
    {
      title: "Desvio de mercadorias",
      icon: <WorkOff />,
      descripton:
        "Colaboradores desonestos podem causar severos prejuízos aos empresários.",
    },
  ]);
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <HomeArea>
      <section className="about">
        <Fade left cascade>
          <div id="sobre" className="aboutPhoto">
            <img alt="" src="/assets/about.jpg" />
          </div>
          <div className="aboutDesc">
            <h2>Sobre Nós</h2>
            <p>
              Serviços de Investigação Particular nas cidades de: Luis Eduardo
              Magalhães/BA, Barreiras na Regiao oeste da Bahia e incluindo Irecê
              e região.
            </p>
            <a className="btn" href="#contato">
              Fale Conosco
            </a>
          </div>
        </Fade>
      </section>
      <section className="services">
        <h2 id="servico">Serviços</h2>
        <Slider {...settings}>
          {sliderInfo.map((item, k) => (
            <div className="infoSlider" key={k}>
              <div className="areaSlider">
                <Fade left>
                  <i>{item.icon}</i>
                  <h3>{item.title}</h3>
                  <p>{item.descripton}</p>
                </Fade>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <section className="servicesFinal">
        <div className="sessionOne">
          <Fade left cascade>
            <div className="ServiceDesc">
              <h2>Experiência & Segurança</h2>
              <p>
                Por que devo contratar os serviços do Detetive Barros? Porque
                temos uma equipe com anos de proficiência nos serviços
                investigativos, e temos o maior prazer em entregar um trabalho
                de qualidade, segurança para nossos clientes.
              </p>
            </div>
            <div className="ServicePhoto">
              <img alt="" src="/assets/experiencia.jpg" />
            </div>
          </Fade>
        </div>
        <div className="sessionTwo">
          <Fade right cascade>
            <div className="ServicePhoto">
              <img alt="" src="/assets/resultado.jpg" />
            </div>
            <div className="ServiceDesc">
              <h2>Resultados Rápidos</h2>
              <p>
                Atenção aos detalhes faz a diferença em nosso trabalho, mas
                queremos também entregar os resultados de forma ágil e segura
                para nossos clientes.
              </p>
            </div>
          </Fade>
        </div>
        <div className="sessionOne">
          <Fade left cascade>
            <div className="ServiceDesc">
              <h2>Sigilo Absoluto</h2>
              <p>
                Nosso trabalho é realizado com total sigilo absoluto, mantendo a
                confiança de nossos clientes e honestidade em cada caso
                realizado.
              </p>
            </div>
            <div className="ServicePhoto">
              <img alt="" src="/assets/sigilo.jpg" />
            </div>
          </Fade>
        </div>
      </section>
      <section
        style={{
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "80vh",
          width: "100%",
          top: "0",
          backgroundImage: `url('/assets/background.jpg')`,
          objectFit: "cover",
        }}
        className="backgroundCity"
      >
        <div className="featuredVertical">
          <Fade left cascade>
            <div className="textInside">
              <h2>Detetive Barros</h2>
              <p>
                O Detetive Particular Barros está preparado para desvendar às
                suas dúvidas tais como: traição, desvios de mercadorias, dossiê
                de pessoas tanto físicas como jurídicas e etc. Com ética e
                seriedade, priorizo pela resolução do seu problema.
              </p>
            </div>
          </Fade>
        </div>
      </section>
    </HomeArea>
  );
}
