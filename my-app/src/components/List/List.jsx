import './List.css'
import { Switch, Route } from 'react-router-dom'
import { ItemPage } from '../ItemPage/ItemPage'
import { Category } from '../Category/Category'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "../Button/Button";
import { FilterPopup } from "../FilterPopup/FilterPopup";
import { changeIsActive} from '../features/Filter/Filter'
import { EditProductPage } from '../EditProductPage/EditProductPage'


export function List(props) {

    // const users = [
    //     {
    //         username: 'user@mail',
    //         password: 'user',
    //         isAdmin: false,
    //     },
    //     {
    //         username: 'user1@mail',
    //         password: 'user1',
    //         isAdmin: false,
    //     },
    //     {
    //         username: 'admin@mail',
    //         password: 'admin',
    //         isAdmin: true,
    //     },
    // ];
    // localStorage.products = JSON.stringify(items)
    // localStorage.users = JSON.stringify(users)
    // 
    const dispatch = useDispatch();
    const activateFilter = () => {
        dispatch(changeIsActive())
    }
    const items = useSelector((state) => state.filter.filteredProducts)
    const path = useSelector(state => state.chosenProduct.path)
    
    return (
        <div className='list-wrapper'>
            <Route exact path='/list'>
                <div className='sort'>
                    <FilterPopup />
                    <Button eventCallback={activateFilter} className='filter_button' value='filter' />
                </div>
                {items.map((item, index) => {
                    return (
                        <Category key={`category_${index}`} categories={item} />
                    )
                })}
            </Route>
            {items.map((item, index) => {
                return (
                    <Route  key={`route_${index}`} exact path={`/list/${item.category.replace(/\s+/g, '')}`}>
                        <div className='sort'>
                            <FilterPopup />
                            <Button eventCallback={activateFilter} className='filter_button' value='filter' />
                        </div>
                        <Category categories={item} />
                    </Route>
                )
            })}
            <Switch>
                <Route exact path={path}>
                    <ItemPage />
                </Route>
                <Route path={`${path}/Edit`}>
                    <EditProductPage />
                </Route>
            </Switch>
        </div>
    )
}