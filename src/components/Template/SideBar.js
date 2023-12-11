import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ivens Magno</h2>
        <p><a href="mailto:ivensmagno@gmail.com">ivensmagno@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Sobre-mim</h2>
      <p>Olá ! Meu nome é Ivens magno e estou cursando Análise e Desenvolvimento de Sistemas na <a href="https://unifametro.edu.br/">Unifametro</a>. Atuando como um desenvolvedor Fullstack, apaixonado por diversas tecnologias e estou sempre buscando novas oportunidades para ampliar meus conhecimentos e habilidades.</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Leia mais</Link> : <Link to="/about" className="button">Sobre-mim</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
