import styles from './about.module.css';

export default function About() {
  return (
    <section className={ styles.container }>
      <article className={ styles.article }>

        <h1 className={ styles.title }>Desenvolvedor Web Front-end</h1>

        <p className={ styles.paragraph }>

          Olá venho de uma carreira de aproximadamente 10 anos
          atuando como mecânico diesel sempre fui apaixonado
          por tecnologia então, no último ano resolvi colocar
          em prática a transição de carreira para desenvolvedor
          web fullstack que há tempos vinha planejando.
        </p>

        <p className={ styles.paragraph }>
          Para minha formação escolhi a Trybe, uma escola de desenvolvimento Web
          que foca nas principais tecnologias utilizadas no mercado.
        </p>

        <h2 className={ styles.subTitle }> 🛠️ Hard Skills</h2>
        <h2 className={ styles.subTitle }>Front-End:</h2>

        <ul className={ styles.ul }>
          <li className={ styles.li }>
            Desenvolvimento de páginas dinâmicas
            utilizando React.js | JavaScript | TypeScript.
          </li>

          <li className={ styles.li }>
            Experiência em HTML5 para o desenvolvimento de páginas semânticas.
          </li>

          <li className={ styles.li }>
            Experiência em CSS para criar páginas responsivas e modernas.
          </li>

          <li className={ styles.li }>
            Implementação de testes com RTL (React Testing Library) | Jest.
          </li>

          <li className={ styles.li }>
            Experiência em Redux.js | Context para gerenciamento
            do estado global da aplicação.
          </li>

          <li className={ styles.li }>
            Experiência em versionamento utilizando Git & GitHub
            .
          </li>
        </ul>

        <h2 className={ styles.subTitle }>Back-End:</h2>

        <ul className={ styles.ul }>
          <li className={ styles.li }>
            Experiência em Node.js para criação de API RestFull.
          </li>

          <li className={ styles.li }>
            Experiência em MySQL para criação de banco de dados bem estruturados.
          </li>

          <li className={ styles.li }>
            Implementação de testes com Mocha.
          </li>
        </ul>

        <h2 className={ styles.subTitle }>🤝 Soft Skills:</h2>

        <ul className={ styles.ul }>
          <li className={ styles.li }>
            Boa comunicação.
          </li>

          <li className={ styles.li }>
            Boa capacidade de trabalhar em equipe.
          </li>

          <li className={ styles.li }>
            Facilidade para trabalhar em projetos de grupo.
          </li>

          <li className={ styles.li }>
            Proatividade para aprender e ensinar no ambiente de trabalho.
          </li>
        </ul>

        <h2 className={ styles.subTitle }>💡O que estou aprendendo:</h2>
        <ul className={ styles.ul }>
          <li className={ styles.li }>
            Biblioteca Material UI para o Front End
          </li>

          <li className={ styles.li }>
            Cursando módulo de Back End
          </li>

        </ul>
        {/* <p className={ styles.paragraph }>
          Mecânico Diesel, com aproximadamente 10 anos de experiência,
          <br />
          no último ano, resolvi iniciar minha transição de carreira para
          <br />
          desenvolvedor web fullstack, um objetivo que vinha planejando há muito tempo.
        </p>

        <h2 className={ styles.subTitle }>
          Em processo de desenvolvimento como
          <br />
          Desenvolvedor Web Full-stack.
        </h2>

        <p className={ styles.paragraph }>
          Atualmente estou me dedicando integralmente

          ao curso de
          <br />
          Desenvolvimento Web Full-stack da Trybe,
          <br />
          onde estou cursando o módulo de Back-end,
          <br />
          Neste módulo, vou aprender as principais tecnologias
          <br />
          utilizadas no mercado de trabalho, que incluem:
        </p>

        <ul className={ styles.ul }>
          <li className={ styles.li }>SQL</li>
          <li className={ styles.li }>Node.js</li>
          <li className={ styles.li }>
            Programação Orientada
            <br />
            a Objetos (POO) e SOLID
          </li>
          <li className={ styles.li }>API Rest</li>
        </ul> */}

      </article>
    </section>
  );
}
