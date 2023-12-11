import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

// Mapeamento de títulos para português, incluindo a seção de línguas
const sectionTitles = {
  Education: 'Educação',
  Experience: 'Experiência',
  Skills: 'Habilidades',
  Courses: 'Cursos',
  References: 'Contate-me',
  Languages: 'Línguas',
};

// Dados das línguas
const languagesData = [
  { name: 'Inglês', level: 'B2 – Intermediário Avançado' },
  { name: 'Espanhol', level: 'B2 – Intermediário Avançado' },
];

// Objeto sections permanece o mesmo
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
  References: () => <References />,
  Languages: () => (
    <section id="languages">
      <h3>{sectionTitles.Languages}</h3>
      <ul>
        {languagesData.map((language) => (
          <li key={`${language.name}-${language.level}`}>{language.name}: {language.level}</li>
        ))}
      </ul>
    </section>
  ),
};

const Resume = () => (
  <Main>
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="/resume">Currículo</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((section) => (
              <h4 key={section}>
                <a href={`#${section.toLowerCase()}`}>{sectionTitles[section]}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([section, Component]) => (
        <section id={section.toLowerCase()} key={section}>
          <Component />
        </section>
      ))}
    </article>
  </Main>
);

export default Resume;
