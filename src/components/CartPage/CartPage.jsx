import { useState } from 'react';
import './CartPage.css'
import { useSelector, useDispatch } from 'react-redux'
import { } from '../features/Cart/Cart'
import { Button } from '../Button/Button'
import { productAmountDecrement } from '../features/CreateLocalStorage/CreateLocalStorage'
import { deleteProductFromCart, checkout } from '../features/Cart/Cart'
import { PopUp } from '../PopUp/PopUp';

export function CartPage() {
    const [popupActive, setPopupActive] = useState(false)
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.products)
    let allProductsAmount = 0
    let allProductsPrice = 0
    if (products.length) {
        products.forEach(item => allProductsAmount += item.colors.amount)
        products.forEach(item => allProductsPrice += (item.colors.amount * item.price))
    }

    const handleDeleteProduct = (event) => {
        let index = event.target.parentElement.id
        let product = products[index]
        let values = {
            index,
        }
        dispatch(deleteProductFromCart(values))
        dispatch(productAmountDecrement(product))

    }
    const activatePopup = () => {
        setPopupActive(true)
    }
    const handleCheckout = () => {
        dispatch(checkout())
        setPopupActive(false)
    }
    return (
        <div className='cart'>
            {!products.length ? 
            <>
            <h3>NO PRODUCTS IN CART</h3>
            <img src="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png" alt="empty cart" />
            </>
            :
                <>

                    <div className='cart__wrapper'>
                        {products.map((item, index) => {
                            return (
                                <div className='cart-item' id={index} key={index}>
                                    <Button eventCallback={handleDeleteProduct} className='cart__delete' value='X' />
                                    <img className='cart-item__image' src={item.src} alt="" />
                                    <div className='cart__product-name'>
                                        {item.name}
                                    </div>
                                    <div className='cart__product-prop'>
                                        Color: <span>{item.colors.color}</span>
                                    </div>
                                    <div className='cart__product-prop'>
                                        Amount: <span>{item.colors.amount}</span>
                                    </div>
                                    <div className='cart__product-prop'>
                                        Price: <span>{item.colors.amount * item.price}</span>
                                    </div>


                                </div>
                            )
                        })}
                    </div>
                    <div className='cart-ordering'>
                        <div className='cart-ordering__info'>
                        <div className='cart-ordering__items'>{`${allProductsAmount} items worth:`}</div>
                        <div className='cart-ordering__price'>{`${allProductsPrice}$`}</div>
                        </div>
                        <Button eventCallback={activatePopup} className='checkout_button' value='checkout' />
                        <PopUp active={popupActive} setActive={setPopupActive}>
                            <h3>Your order is accepted for processing</h3>
                            <Button className='checkout_position' eventCallback={handleCheckout} value='Close' />
                        </PopUp>
                    </div>
                </>
            }
        </div>
    )
}