import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Sobre esse site</Link></h2>
          <p>
            Soluções web inovadoras com Ivens Magno, um desenvolvedor,
            Fullstack dedicado a transformar ideias em realidade digital.
            Seja para desenvolver sites dinâmicos, aplicativos interativos ou sistemas complexos,
            meu conhecimento abrange todas as etapas do desenvolvimento, garantindo que suas
            necessidades de negócio sejam atendidas com eficiência e criatividade. Conecte-se agora
            e dê o próximo passo para impulsionar seu sucesso online!
          </p>
        </div>
      </header>
      <p> Bem-vindo ao meu site. Fique à vontade para ler mais <Link to="/about">sobre-mim</Link>,
        pode olhar meu {' '}
        <Link to="/resume">currículo</Link>, {' '}
        meus <Link to="/projects">projetos</Link>, {' '}
        {/* view <Link to="/stats">site statistics</Link>, {' '} */}
        ou <Link to="/contact">contate-me</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
