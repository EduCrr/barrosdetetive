import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderArea, Featured } from "./styled";
import Menu from "@material-ui/icons/Menu";
export default function Header() {
  const [capa, setCapa] = useState([
    { title: "Serviços Investigativos", img: "/assets/capa1.jpg" },
    { title: "Serviços Investigativos", img: "/assets/capa2.jpg" },
  ]);
  const [menuBackground, setMenuBackground] = useState(false);
  const [photo, setPhoto] = useState({});
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const randomCapa = Math.floor(Math.random() * capa.length);
    const chose = capa[randomCapa];
    setPhoto(chose);
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 30) {
        setMenuBackground(true);
      } else {
        setMenuBackground(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  function handleMenu() {
    setOpenMenu(!openMenu);
    console.log("a");
  }
  return (
    <>
      <div
        className="menuBackground"
        style={{
          background: menuBackground ? "#191919" : "transparent",
          height: menuBackground ? "70px" : "0px",
          width: menuBackground ? "100%" : "0px",
          position: menuBackground ? "fixed" : "none",
          zIndex: menuBackground ? "999" : "0",
          transition: "all ease 0.4s",
        }}
      >
        <HeaderArea open={openMenu} black={menuBackground}>
          <h1>Barros</h1>
          <nav>
            <ul onClick={() => setOpenMenu(false)}>
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
          <div className="menu">
            <Menu onClick={handleMenu} />
          </div>
        </HeaderArea>
      </div>

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
