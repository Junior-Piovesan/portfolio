import myProjects from '../../data/projects';

import styles from './myProjects.module.css';

export default function MyProjects() {
  return (
    <section className={ styles.container }>

      {myProjects.map((project) => (
        <div className={ styles.card } key={ project.id }>

          <img
            className={ styles.img }
            src={ project.images[0] }
            alt="Print do projeto"
          />

          <div className={ styles.nameContainer }>
            <h2>{project.name}</h2>
          </div>

          <div className={ styles.linksContainer }>
            <a
              className={ styles.link }
              href={ project.deploy }
              target="blank"
            >
              Deploy do projeto
            </a>
            <a
              className={ styles.link }
              href={ project.repoUrl }
              target="blank"
            >
              Repositório do projeto
            </a>
          </div>

        </div>
      ))}

    </section>

  );
}
