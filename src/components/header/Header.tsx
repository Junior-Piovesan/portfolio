import { useNavigate } from 'react-router-dom';

import imgPerfil from '../../assets/perfil-1.png';
import roquetIcon from '../../assets/foguete.png';

import styles from './header.module.css';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={ styles.container }>

      <div className={ styles.buttonContainer }>
        <button
          className={ styles.button }
          onClick={ () => navigate('/') }
        >
          Home
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

      <div className={ styles.titleContainer }>
        <div className={ styles.circle } />
        <img className={ styles.imgTitle } src={ roquetIcon } alt="Icone de foguete" />
        <h2 className={ styles.title }>JR Dev</h2>
      </div>

      <div className={ styles.imgContainer }>

        <img className={ styles.img } src={ imgPerfil } alt="Imagem de perfil" />
      </div>

    </header>
  );
}
