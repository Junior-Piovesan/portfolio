import { useNavigate } from 'react-router-dom';

import styles from './header.module.css';
import Logo from '../logo/Logo';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={ styles.container }>
      <Logo />

      <div className={ styles.buttonContainer }>
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
      </div>

    </header>
  );
}
