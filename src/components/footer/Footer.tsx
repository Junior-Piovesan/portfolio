import styles from './footer.module.css';
import Contact from '../contact/Contact';
import Logo from '../logo/Logo';

export default function Footer() {
  return (
    <footer className={ styles.footer }>
      <div className={ styles.contactContainer }>
        <Contact />
      </div>

      <div className={ styles.logoContainer }>
        <Logo />
      </div>
    </footer>
  );
}
