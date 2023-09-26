import { useNavigate } from 'react-router-dom';

import styles from './navBar.module.css';

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className={ styles.buttonContainer }>
      <button
        className={ styles.button }
        onClick={ () => navigate('/') }
      >
        Início
      </button>

      <button
        className={ styles.button }
        onClick={ () => navigate('/about') }
      >
        História
      </button>
      <button
        className={ styles.button }
        onClick={ () => navigate('/projects') }
      >
        Projetos
      </button>
    </nav>
  );
}
