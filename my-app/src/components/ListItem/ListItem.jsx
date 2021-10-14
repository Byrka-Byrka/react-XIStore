import './ListItem.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { findProduct } from '../features/ChosenProduct/ChosenProduct'

export function ListItem(props) {
    let { src, name, id, path, category, totalAmount } = props;
    const dispatch = useDispatch();
    const isUserAdmin = useSelector(state => state.authorization.isUserAdmin)
    const handleChoseItem = (event) =>{
        let values = {
            id,
            category
        }
        dispatch(findProduct(values))
    }
    
    
    
    return (
        <Link className='list-item__link' onClick={handleChoseItem} to= {`${path}/${id}`}>
            <div className={!totalAmount && !isUserAdmin ? 'listItem hidden':'listItem'}>
                <img onError={(e)=>{e.target.onerror = null; e.target.src='https://www.p-etalon.ru/global/images/prod/nophoto.png'}}  className='listItem__image' src={src} alt="product" />
                <span className='listItem__name'>{name}</span>
            </div>
        </Link>
    )
}