import DynamicIconCloud from '../../components/DynamicIconCloud/DynamicIconCloud';
import styles from './home.module.css';

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

      </article>
      <div className={ styles.DynamicIconCloud }>
        <DynamicIconCloud />
      </div>
    </section>
  );
}
