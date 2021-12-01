import React, { useState } from "react";
import { HomeArea } from "./styled";
import Stars from "@material-ui/icons/Stars";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";
export default function Home() {
  const [sliderInfo, setSliderInfo] = useState([
    {
      title: "Rastreador",
      icon: <Stars />,
      descripton:
        " Lorem ipsum dolor sit am rem ipsum dolor sit amet,  consectetur consectetur consectetur adipiscing elit,",
    },
    {
      title: "Casos de traição",
      icon: <Stars />,
      descripton: " Lorem ipsum dolor sit amet,  nsectetur adipiscing elit,",
    },
    {
      title: "Casos de traição",
      icon: <Stars />,
      descripton: " Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      title: "Rastreador",
      icon: <Stars />,
      descripton: " Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      title: "Casos de traição",
      icon: <Stars />,
      descripton:
        " Lorem ipsum dolor sit amet,   aliquip ex ea commodo con elit,",
    },
    {
      title: "Casos de traição",
      icon: <Stars />,
      descripton: " Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
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
                <Fade left cascade>
                  <i>
                    <Stars />
                  </i>
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
