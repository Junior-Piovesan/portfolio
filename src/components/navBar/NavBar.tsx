import { NavLink } from 'react-router-dom';

import styles from './navBar.module.css';

export default function NavBar() {
  return (
    <nav className={ styles.buttonContainer }>

      <NavLink
        className={ styles.link }
        to="/"
      >
        Início
      </NavLink>

      <NavLink
        className={ styles.link }
        to="/about"
      >
        História
      </NavLink>

      <NavLink
        className={ styles.link }
        to="/projects"
      >
        Projetos
      </NavLink>
    </nav>
  // <nav className={ styles.buttonContainer }>
  //   <button
  //     className={ styles.button }
  //     onClick={ () => navigate('/') }
  //   >
  //     Início
  //   </button>

  //   <button
  //     className={ styles.button }
  //     onClick={ () => navigate('/about') }
  //   >
  //     História
  //   </button>
  //   <button
  //     className={ styles.button }
  //     onClick={ () => navigate('/projects') }
  //   >
  //     Projetos
  //   </button>
  // </nav>
  );
}
