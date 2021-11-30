import React, { useEffect, useState } from "react";
import { FooterArea } from "./styled";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Email from "@material-ui/icons/Email";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";
export default function Footer() {
  let ano = new Date();
  return (
    <>
      <FooterArea>
        <div className="leftSide">
          <h2>Entre em contato</h2>

          <div className="icon">
            <span>
              <WhatsApp />
            </span>
            (77) 99924-5457 || (77) 99821-4480
          </div>
          <div className="icon">
            <span>
              <Email />
            </span>
            contato@detetivebarros.com.br
          </div>
          <form>
            <input type="text" required placeholder="Nome" />
            <input type="text" required placeholder="Telefone" />
            <input type="text" required placeholder="Email" />
            <input type="text" required placeholder="Cidade" />
            <input type="submit" />
          </form>
        </div>
        <div className="rightSide">
          <Fade right cascade>
            <img src="/assets/contato.jpg" />
          </Fade>
        </div>
      </FooterArea>
      <div
        style={{ textAlign: "center", margin: "1rem auto" }}
        className="rodape"
      >
        <p>Todos os direitos reservados {ano.getFullYear()}</p>
      </div>
    </>
  );
}
