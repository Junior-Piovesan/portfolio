import styles from './about.module.css';

export default function About() {
  return (
    <section className={ styles.container }>
      <article className={ styles.article }>

        <h1 className={ styles.title }>Desenvolvedor Web Front-end</h1>

        <p className={ styles.paragraph }>
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
        </ul>

      </article>
    </section>
  );
}
