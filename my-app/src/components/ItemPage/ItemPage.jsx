import { useState } from 'react';
import { Button } from '../Button/Button'
import './ItemPage.css'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProductToEdit } from '../features/EditProduct/EditProduct'
import { addProductToCart } from '../features/Cart/Cart'
import { productAmountIncrement } from '../features/CreateLocalStorage/CreateLocalStorage'
import { setProducts } from '../features/Filter/Filter'
import { amountIncrement } from '../features/ChosenProduct/ChosenProduct'
import { singInActivate } from "../features/modalFrame/modalFrameSlice";

export function ItemPage() {
    const dispatch = useDispatch()
    const product = useSelector(state => state.chosenProduct.product)
    const path = useSelector(state => state.chosenProduct.path)
    const category = useSelector(state => state.chosenProduct.category)
    
    const isUserAuthorized = useSelector(state => state.authorization.isUserAuthorized)
    const isUserAdmin = useSelector(state =>state.authorization.isUserAdmin)
    const [chosenColor, setChosenColor] = useState(product.colors[0].color)
    const [productColor, setProductColor] = useState({
        color: product.colors[0].color,
        src: product.colors[0].src,
        amount: product.colors[0].amount,
    })
    const colorChange = (event) => {
        setChosenColor(event.target.alt)
        product.colors.find(item => item.color === event.target.alt)
        setProductColor(product.colors.find(item => item.color === event.target.alt))
    }
    const handleSetProductToEdit = () =>{
        let values = {
            product,
            category
        }
        dispatch(setProductToEdit(values))
    }
    const handleAddProductToCart = () =>{
        let values = {
            product,
            category,
            productColor
        }
        // product.colors.find(item => item.color === productColor.color).amount+= -1
        dispatch(amountIncrement(productColor))
        dispatch(addProductToCart(values))
        dispatch(productAmountIncrement(values))
        dispatch(setProducts())
        setProductColor(product.colors.find(item => item.color === chosenColor))
    }

    return (
        <div className='itemPage__wrapper'>
            <div className='itemPage__content'>
                <img onError={(e)=>{e.target.onerror = null; e.target.src='https://www.p-etalon.ru/global/images/prod/nophoto.png'}} className='itemPage__image' src={productColor.src} alt="" />
                <div className='itemPage__buttonGroup'>
                    <div>
                        {product.name} <br />
                        {product.colors.find(item => item.color === chosenColor).amount} products left
                    </div>
                    <h3>{product.price} $.</h3>
                    chosen color: {productColor.color}
                    <div className='colorButtons'>
                        {product.colors.map((item, index) => {
                            if (item.amount > 0) {return (

                                <img onError={(e)=>{e.target.onerror = null; e.target.src='https://www.p-etalon.ru/global/images/prod/nophoto.png'}} onClick={colorChange} key={index} className='colorSelection' src={item.src} alt={item.color} />

                            )}else{
                                return (

                                    <img onError={(e)=>{e.target.onerror = null; e.target.src='https://www.p-etalon.ru/global/images/prod/nophoto.png'}} onClick={colorChange} key={index} className='colorSelection colorSelection_sold' src={item.src} alt={item.color} />
    
                                )
                            }
                        })}
                    </div>
                    {isUserAuthorized && isUserAdmin ? <Link to= {`${path}/Edit`}><Button value='Edit' eventCallback={handleSetProductToEdit}/></Link> : isUserAuthorized && product.colors.find(item => item.color === chosenColor).amount > 0 ? <Button eventCallback={handleAddProductToCart} value='Add to cart' /> : isUserAuthorized && product.colors.find(item => item.color === chosenColor).amount <= 0 ? <div className='itemPage_soldInfo'>sold out</div> : <Button eventCallback={()=>dispatch(singInActivate())} value='Sing in'/>}
                </div>
            </div>
            <h2 className='itemPage__header'>Description</h2>
            <div className='itemPage__props-wrapper'>
                <div className='productProperty'>
                    <div className='productProperty__name'>Date</div> <div className='productProperty__value'>{product.date} Year</div>
                </div>
                <div className='productProperty'>
                    <div className='productProperty__name'>Screen</div> <div className='productProperty__value'>{product.screen}"</div>
                </div>
                <div className='productProperty'>
                    <div className='productProperty__name'>Screen resolution</div> <div className='productProperty__value'>{product.screenResolution[0]}x{product.screenResolution[1]} px</div>
                </div>
                <div className='productProperty'>
                    <div className='productProperty__name'>RAM</div> <div className='productProperty__value'>{product.RAM} Gb</div>
                </div>
                <div className='productProperty'>
                    <div className='productProperty__name'>CPU</div> <div className='productProperty__value'>{product.CPU}</div>
                </div>
                <div className='productProperty'>
                    <div className='productProperty__name'>CPU clock speed</div> <div className='productProperty__value'>{product.CPUClockSpeed} Mgz</div>
                </div>
                <div className='productProperty'>
                    <div className='productProperty__name'>Cores</div> <div className='productProperty__value'>{product.cores[0]}({product.cores[1]}x{product.cores[2]})</div>
                </div>
                <div className='productProperty'>
                    <div className='productProperty__name'>GPU</div> <div className='productProperty__value'>{product.GPU}</div>
                </div>
                <div className='productProperty'>
                    <div className='productProperty__name'>GPU speed</div> <div className='productProperty__value'>{product.GPUSpeed} Mgz</div>
                </div>
                <div className='productProperty'>
                    <div className='productProperty__name'>Flash memory</div> <div className='productProperty__value'>{product.flashMemory} Gb</div>
                </div>
            </div>
        </div>
    )
}