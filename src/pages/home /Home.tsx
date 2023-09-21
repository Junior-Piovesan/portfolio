import styles from './home.module.css';

import gitHubIcon from '../../assets/github-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import whatsappIcon from '../../assets/whatsapp-icon.svg';
import emailIcon from '../../assets/email-icon.png';

export default function Home() {
  return (
    <section className={ styles.titleContainer }>
      <article className={ styles.article }>
        <h2 className={ styles.title }>
          Olá, Meu nome é
          Junior Piovesan
        </h2>
        <h3
          className="teaxtAnimation subTtilte"
        >
          Desenvolvedor Web Front-end
        </h3>
        <h3 className={ styles.titleContatos }>Meus contatos:</h3>

        <div className={ styles.contatosContainer }>

          <a
            href="https://api.whatsapp.com/send?phone=5551985884913"
            target="blank"
          >
            <img
              className={ styles.imgIcons }
              src={ whatsappIcon }
              alt="Icone Linkedin"
            />
          </a>

          <a
            href="mailto:juniorpiovesan3022@gmail.com"
          >
            <img
              className={ styles.imgIcons }
              src={ emailIcon }
              alt="Icone Linkedin"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/junior-piovesan-silva/"
            target="blank"
          >
            <img
              className={ styles.imgIcons }
              src={ linkedinIcon }
              alt="Icone Linkedin"
            />
          </a>

          <a
            href="https://github.com/Junior-Piovesan"
            target="blank"
          >
            <img
              className={ styles.imgIcons }
              src={ gitHubIcon }
              alt="Icone gitHub"
            />
          </a>

        </div>

      </article>
    </section>
  );
}
