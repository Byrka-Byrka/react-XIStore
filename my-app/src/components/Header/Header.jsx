import { Link } from 'react-router-dom';
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "../Button/Button";
import { singInActivate, singUpActivate } from "../features/modalFrame/modalFrameSlice";
import { singOut } from '../features/singIn/authorizationReducer'
import './Header.css'


export function Header() {
    const { isUserAuthorized, isUserAdmin } = useSelector((state) => state.authorization)
    
    const dispatch = useDispatch()
    return (
        <div className='header'>
            {!isUserAuthorized ?
                <div className='account-info'>
                    <span className='authorization-button' onClick={() => dispatch(singInActivate())} >{'Sign in'}</span>
                    <span className='authorization-button__separator'>|</span>
                    <span className='authorization-button' onClick={() => dispatch(singUpActivate())}>{'Sign up'}</span>
                </div>
                :
                <div className='account-info'>
                    <span className='authorization-button' onClick={() => dispatch(singOut())} >{'Sign Out'}</span>
                </div>
            }
            {isUserAuthorized && !isUserAdmin ?
                <Link to='/cart'>
                    <Button className='cartButton' value='CART' />
                </Link> : isUserAdmin ?
                <Link to='/newProduct'>
                    <Button className='addProductButton' value='add product' />
                </Link> : ''}
        </div>
    )
}