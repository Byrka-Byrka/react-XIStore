import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useDispatch } from 'react-redux'
import { setProducts } from '../features/Filter/Filter'
import { setTotalAmountOfProducts } from "../features/CreateLocalStorage/CreateLocalStorage";

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

    return (
        <div className='navbar'>
            <div className='navbar_categories'>
                {SECTIONS.map((item) => {
                    return (
                        <div onClick={handleSetProducts} key={item.title.replace(/\s+/g, '')} className='main-category'>
                            <Link className='nav-link' to={item.href}>
                                <span>{item.title}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}