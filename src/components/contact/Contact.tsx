import gitHubIcon from '../../assets/github-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import whatsappIcon from '../../assets/whatsapp-icon.svg';
import emailIcon from '../../assets/email-icon.png';

import styles from './contact.module.css';

export default function Contact() {
  return (
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
  );
}
