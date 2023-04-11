import styles from './Column.module.scss';

const Column = ({ text, icon }) => {
    return (
      <article className={styles.column}>
        <h2 className={styles.title}>
          <span className={`${styles.icon} fa fa-${icon}`} />
          {text}
        </h2>
      </article>
    );
  };

export default Column;