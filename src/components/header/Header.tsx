import styles from './header.module.css';
import Logo from '../logo/Logo';
import NavBar from '../navBar/NavBar';

export default function Header() {
  return (
    <header className={ styles.container }>
      <Logo />

      <NavBar />
    </header>
  );
}
