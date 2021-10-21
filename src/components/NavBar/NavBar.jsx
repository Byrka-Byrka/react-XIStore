import { Link } from 'react-router-dom';
import './NavBar.css';
import { useDispatch } from 'react-redux'
import { setProducts } from '../features/Filter/Filter'
import { setTotalAmountOfProducts } from "../features/CreateLocalStorage/CreateLocalStorage";
import { useLocation } from "react-router-dom";

export function NavBar() {

    const SECTIONS = [
        { title: 'Mi Phones', href: '/list/MiPhones' },
        { title: 'POCOPHONE', href: '/list/POCOPHONE' },
        { title: 'Redmi Phones', href: '/list/redmiPhones' },
        { title: 'All Products', href: '/list' }
    ]
    const dispatch = useDispatch()
    const handleSetProducts = () => {
        dispatch(setTotalAmountOfProducts())
        dispatch(setProducts())
    }
    const location = useLocation()

    return (
        <div className='navbar'>
            <div className='navbar_categories'>
                {location.pathname === '/cart' ?
                    <div onClick={handleSetProducts} className='cart__nav-link__wrapper'>
                        <Link className='cart__nav-link' to={'/list'}>
                            <span>{'To home'}</span>
                        </Link>
                    </div> :
                    SECTIONS.map((item) => {
                        return (
                            <div onClick={handleSetProducts} key={item.title.replace(/\s+/g, '')} className='main-category'>
                                <Link className='nav-link' to={item.href}>
                                    <span>{item.title}</span>
                                </Link>
                            </div>
                        )
                    })
                    }
            </div>
        </div>
    )
}