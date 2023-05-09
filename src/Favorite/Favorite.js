import PageTitle from "../components/PageTitle/PageTitle";
import styles from './Favorite.module.scss';
import { useSelector } from "react-redux";
import { getIsFavoriteCards } from "../redux/cardsReducer";
import Card from "../components/Card/Card";

const Favorite = () => {
  const favoriteCards = useSelector(getIsFavoriteCards);

  if (favoriteCards.length === 0) {
    return (
      <div className={styles.favorite}>
        <PageTitle>No cards...</PageTitle>
      </div>
    );
  }

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map((card) => (
            <Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Favorite;