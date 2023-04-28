import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
//import { getAllColumns } from '../../redux/store';
import { getListById } from '../../redux/store';
import { useParams } from 'react-router-dom';
import { getColumnsByList } from '../../redux/store';
import SearchForm from '../SearchForm/SearchForm';
import { Navigate } from 'react-router-dom';


const List = () => {

    //const columns = useSelector(getAllColumns);

    const { listId } = useParams();
    const listData = useSelector(state => getListById(state, listId));
    const columns = useSelector(state => getColumnsByList(state, listId));

    // const addCard = () =>{}

    //const addColumn = () =>{}

    if (!listData) return <Navigate to="/" />
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>{listData.title}</h1>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <div className={styles.columns}>
                {columns.map(column =>
                    <Column
                        key={column.id}
                        {...column} />)}
            </div>
            <ColumnForm listId={listId} />
        </div>
    );
};



export default List;