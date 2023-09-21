import styles from './logo.module.css';

import roquetIcon from '../../assets/foguete.png';

type PropsType = {
  isCircle:boolean
};

export default function Logo({ isCircle }:PropsType) {
  return (
    <div className={ styles.titleContainer }>
      <div className={ isCircle ? styles.circle : styles.notCircle } />
      <img className={ styles.imgTitle } src={ roquetIcon } alt="Icone de foguete" />
      <h2 className={ styles.title }>JR Dev</h2>
    </div>
  );
}
