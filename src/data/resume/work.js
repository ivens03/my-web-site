/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Freelancer',
    position: 'Autonomo',
    url: '',
    startDate: '2023-10-01',
    summary: `  No dinâmico mundo do desenvolvimento web, 
                ofereço soluções personalizadas que englobam desde interfaces interativas até backend robusto. 
                Com um olhar sempre atento às novidades tecnológicas, me dedico a projetos que não só atendem às necessidades do cliente, 
                mas também elevam o padrão de qualidade e usabilidade. `,
    highlights: [
      'Desenvolvimento Frontend: Criação de interfaces esteticamente agradáveis e funcionalmente ricas, utilizando HTML, CSS e JavaScript moderno, juntamente com frameworks como React e Vue.js para garantir uma experiência de usuário fluida e responsiva.',
      'Desenvolvimento Backend: Construção de APIs robustas e otimizadas com Node.js e Express, assegurando desempenho e segurança. Trabalho com bancos de dados SQL e NoSQL para oferecer soluções de armazenamento de dados escaláveis e confiáveis.',
      'Design Responsivo: Priorizo a responsividade nos projetos para que se adaptem a uma variedade de dispositivos e tamanhos de tela, assegurando uma navegação consistente em smartphones, tablets e desktops.',
      'Manutenção e Otimização: Ofereço serviços de manutenção contínua e otimização de sites e aplicativos existentes, aplicando as melhores práticas de SEO e melhorando a performance para uma classificação superior nos motores de busca.',
      'Desenvolvimento Ágil: Aplico metodologias ágeis para manter os clientes atualizados e envolvidos em cada etapa do projeto, garantindo que o produto final esteja alinhado com a visão inicial e possa se adaptar rapidamente a mudanças de requisitos.',
      'Soluções E-commerce: Implemento plataformas de e-commerce utilizando tecnologias como Shopify e WooCommerce, facilitando a gestão de produtos e otimizando a experiência de compra para os usuários.',
    ],
  },
];

export default work;
