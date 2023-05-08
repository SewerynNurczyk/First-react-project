import Card from '../Card/Card';
import styles from './Column.module.scss';
import CardForm from '../CardForm/CardFrom';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';


const Column = props => {

  //const searchString = useSelector(state => state.searchString);
  const cards = useSelector(state => getFilteredCards(state, props.id));

  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>
      <ul className={styles.cards}>
      {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />)}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;