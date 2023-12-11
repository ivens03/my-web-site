const skills = [
  {
    title: 'Javascript',
    competency: 2,
    category: ['Desenvolvedor Web', 'Linguagens', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Desenvolvedor Web', 'Javascript'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Desenvolvedor Web', 'Javascript'],
  },
  {
    title: 'Angular',
    competency: 2,
    category: ['Desenvolvedor Web', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 2,
    category: ['Desenvolvedor Web', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Ferramentas', 'Linguagens'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Desenvolvedor Web', 'Banco De Dados'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 2,
    category: ['Desenvolvedor Web', 'Banco De Dados', 'Linguagens'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Desenvolvedor Web', 'Javascript'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Ferramentas'],
  },
  {
    title: 'AWS',
    competency: 1,
    category: ['Ferramentas', 'Desenvolvedor Web'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Desenvolvedor Web', 'Linguagens', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 2,
    category: ['Desenvolvedor Web', 'Linguagens'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Linguagens', 'Machine Learning'],
  },
  {
    title: 'Java',
    competency: 2,
    category: ['Data Science', 'Linguagens'],
  },
  // { Funciona
  //  title: 'teste',
  //  competency: 4,
  //  category: ['back', 'front'],
  // },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#9345C4',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
