import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderArea, Featured } from "./styled";
export default function Header() {
  const [capa, setCapa] = useState([
    { title: "Serviços Investigativos", img: "/assets/capa1.jpg" },
    { title: "Serviços Investigativos", img: "/assets/capa2.jpg" },
  ]);
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    const randomCapa = Math.floor(Math.random() * capa.length);
    const chose = capa[randomCapa];
    setPhoto(chose);
  }, []);

  return (
    <>
      <HeaderArea>
        <h1>Barros</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Sobre</Link>
            </li>
            <li>
              <Link to="/">Serviços</Link>
            </li>
            <li>
              <Link to="/">Contato</Link>
            </li>
          </ul>
        </nav>
      </HeaderArea>
      <Featured
        style={{
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "100vh",
          width: "100%",
          top: "0",
          backgroundImage: `url(${photo.img})`,
        }}
      >
        <div className="featuredVertical">
          <p>Detetive Particular</p>
          <h1>{photo.title}</h1>
          <p>Bahia/BH</p>
        </div>
      </Featured>
    </>
  );
}
