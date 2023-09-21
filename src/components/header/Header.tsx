import { useNavigate } from 'react-router-dom';

import imgPerfil from '../../assets/perfil-1.png';

import styles from './header.module.css';
import Logo from '../logo/Logo';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={ styles.container }>

      <div className={ styles.buttonContainer }>
        <button
          className={ styles.button }
          onClick={ () => navigate('/') }
        >
          Inicio
        </button>

        <button
          className={ styles.button }
          onClick={ () => navigate('/about') }
        >
          Conheça minha hitória
        </button>
        <button
          className={ styles.button }
          onClick={ () => navigate('/projects') }
        >
          Conheça meus projetos
        </button>
      </div>

      <Logo isCircle />

      <div className={ styles.imgContainer }>

        <img className={ styles.img } src={ imgPerfil } alt="Imagem de perfil" />
      </div>

    </header>
  );
}
