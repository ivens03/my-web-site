import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

// Mapeamento de meses de inglês para português
const monthsMap = {
  January: 'Janeiro',
  February: 'Fevereiro',
  March: 'Março',
  April: 'Abril',
  May: 'Maio',
  June: 'Junho',
  July: 'Julho',
  August: 'Agosto',
  September: 'Setembro',
  October: 'Outubro',
  November: 'Novembro',
  December: 'Dezembro',
};

// Função para formatar a data e traduzir o mês
const formatDate = (dateString) => {
  const monthYear = dayjs(dateString).format('MMMM YYYY');
  const [month, year] = monthYear.split(' ');
  return `${monthsMap[month]} ${year}`;
};

const Job = ({
  data: {
    name, position, url, startDate, endDate, summary, highlights,
  },
}) => (
  <article className="jobs-container">
    <header>
      <h4><a href={url}>{name}</a> - {position}</h4>
      {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Atualmente'}
    </header>
    {summary ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'summary',
              },
            },
          },
        }}
      >
        {summary}
      </Markdown>
    ) : null}
    {highlights ? (
      <ul className="points">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Job;
