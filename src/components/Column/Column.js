import Card from '../Card/Card';
import styles from './Column.module.scss';
import CardForm from '../CardForm/CardFrom';
import { useSelector } from 'react-redux';


const Column = props => {

  const cards = useSelector(state => state.cards);

  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>
      <ul className={styles.cards}>
        {props.cards.map(card => <Card key={card.id} title={card.title} />)}
      </ul>
      <CardForm columnId={props.id} action={props.addC} />
    </article>
  );
};

export default Column;