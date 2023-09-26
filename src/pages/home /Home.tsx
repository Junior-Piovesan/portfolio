import DynamicIconCloud from '../../components/DynamicIconCloud/DynamicIconCloud';
import styles from './home.module.css';

import imgPerfil from '../../assets/perfil-1.png';

export default function Home() {
  return (
    <section className={ styles.titleContainer }>
      <article className={ styles.article }>
        <h2 className={ styles.title }>
          Olá, Meu nome é
          Junior Piovesan
        </h2>
        <h3
          className="teaxtAnimation subTtilte"
        >
          Desenvolvedor Web Front-end
        </h3>

        <div className={ styles.imgContainer }>

          <img className={ styles.img } src={ imgPerfil } alt="Imagem de perfil" />
        </div>
      </article>
      <div className={ styles.DynamicIconCloud }>
        <DynamicIconCloud />
      </div>
    </section>
  );
}
