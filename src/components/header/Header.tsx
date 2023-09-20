import React from 'react';
import { useNavigate } from 'react-router-dom';

import imgPerfil from '../../assets/perfil-1.png';

import styles from './header.module.css';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={ styles.container }>

      <div className={ styles.buttonContainer }>
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
        <h2 className={ styles.title }>Junior Piovesan</h2>
        <h3 className="teaxtAnimation">
          Desenvolvedor Front-end
        </h3>
      </div>
      <div />

      <div className={ styles.imgContainer }>

        <img className={ styles.img } src={ imgPerfil } alt="Imagem de perfil" />
      </div>

    </header>
  );
}
