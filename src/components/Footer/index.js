import React, { useEffect, useState } from "react";
import { FooterArea } from "./styled";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Email from "@material-ui/icons/Email";

export default function Footer() {
  return (
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
        <img src="/assets/contato.jpg" />
      </div>
    </FooterArea>
  );
}
