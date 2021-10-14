import './EditProductPage.css'
import { Input } from '../Input/Input';
import { useSelector, useDispatch } from 'react-redux'
import { changeProductValue, changeColors, deleteColor, addColor } from '../features/EditProduct/EditProduct'
import { changeProductsArr, deleteProduct } from '../features/CreateLocalStorage/CreateLocalStorage'
import { setProducts } from '../features/Filter/Filter'
import { Button } from '../Button/Button';
import { PopUp } from '../PopUp/PopUp';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';


export function EditProductPage(props) {
    const dispatch = useDispatch()
    const productToEdit = useSelector((state) => state.editProduct.product)
    const screenResolution = useSelector(state => state.editProduct.screenResolution)
    const history = useHistory();
    const initialID = useSelector(state => state.editProduct.initialID)
    const category = useSelector(state => state.chosenProduct.category)
    const [popupActive, setPopupActive] = useState(false)
    const [confirmPopupActive, setConfirmPopupActive] = useState(false)
    const [validationState, setValidationState] = useState({
        category: 'valid',
        name: 'valid',
        date: 'valid',
        screen: 'valid',
        screenWidth: 'valid',
        screenHeight: 'valid',
        RAM: 'valid',
        CPU: 'valid',
        CPUClockSpeed: 'valid',
        cores: 'valid',
        GPU: 'valid',
        GPUSpeed: 'valid',
        flashMemory: 'valid',
        price: 'valid',
        numberOfColors: 'valid',
    })
    // const color = [
    //     {
    //         color: 'test',
    //         src: '',
    //         amount: null,
    //     },
    // ];
    // let numberOfColors = 0;

    const formValidation = (product) => {
        let isValid = {
            category: 'valid',
            name: 'valid',
            date: 'valid',
            screen: 'valid',
            screenWidth: 'valid',
            screenHeight: 'valid',
            RAM: 'valid',
            CPU: 'valid',
            CPUClockSpeed: 'valid',
            cores: 'valid',
            GPU: 'valid',
            GPUSpeed: 'valid',
            flashMemory: 'valid',
            price: 'valid',
            numberOfColors: 'valid',
            isValidationPassed: true,
        }
        let date = new Date();
        let currentYear = date.getFullYear()
        if (!productToEdit.name[0]) {
            isValid.name = 'inValid'
        } else if (productToEdit.name[0] !== productToEdit.name[0].toUpperCase()) { isValid.name = 'inValid' }
        if (!productToEdit.date || isNaN(productToEdit.date)) {
            isValid.date = 'inValid'
        } else if (+productToEdit.date > currentYear || (+productToEdit.date) < (currentYear - 20)) {
            isValid.date = 'inValid'
        }
        if (!productToEdit.screen || isNaN(productToEdit.screen)) {
            isValid.screen = 'inValid'
        } else if (+productToEdit.screen < 4 || +productToEdit.screen > 8) {
            isValid.screen = 'inValid'
        }
        if (!screenResolution.screenWidth || isNaN(screenResolution.screenWidth)) {
            isValid.screenWidth = 'inValid'
        }
        if (!screenResolution.screenHeight || isNaN(screenResolution.screenHeight)) {
            isValid.screenHeight = 'inValid'
        }
        if (!productToEdit.RAM || isNaN(productToEdit.RAM)) {
            isValid.RAM = 'inValid'
        } else if (+productToEdit.RAM < 2 || +productToEdit.RAM > 64 || productToEdit.RAM % 2) {
            isValid.RAM = 'inValid'
        }
        if (!productToEdit.CPU || !isNaN(productToEdit.CPU)) {
            isValid.CPU = 'inValid'
        } else if (productToEdit.CPU.length < 5) {
            isValid.CPU = 'inValid'
        }
        if (!productToEdit.CPUClockSpeed || isNaN(productToEdit.CPUClockSpeed)) {
            isValid.CPUClockSpeed = 'inValid'
        } else if (+productToEdit.CPUClockSpeed < 100 || +productToEdit.CPUClockSpeed > 3500) {
            isValid.CPUClockSpeed = 'inValid'
        }
        if (!productToEdit.cores[0] || productToEdit.cores.length > 3) {
            isValid.cores = 'inValid'
        } else if (productToEdit.cores.find(item => item % 2 !== 0)) {
            isValid.cores = 'inValid'
        }
        if (!productToEdit.GPU || !isNaN(productToEdit.GPU)) {
            isValid.GPU = 'inValid'
        } else if (productToEdit.GPU.length < 5) {
            isValid.GPU = 'inValid'
        }
        if (!productToEdit.GPUSpeed || isNaN(productToEdit.GPUSpeed)) {
            isValid.GPUSpeed = 'inValid'
        } else if (+productToEdit.GPUSpeed < 100 || +productToEdit.GPUSpeed > 2000) {
            isValid.GPUSpeed = 'inValid'
        }
        if (!productToEdit.flashMemory || isNaN(productToEdit.flashMemory)) {
            isValid.flashMemory = 'inValid'
        } else if (+productToEdit.flashMemory < 32 || +productToEdit.flashMemory > 512 || productToEdit.RAM % 2) {
            isValid.flashMemory = 'inValid'
        }
        if (!productToEdit.price || isNaN(productToEdit.price) || productToEdit.price % 1 || productToEdit.price < 1) {
            isValid.price = 'inValid'
        }
        if (!productToEdit.colors[0]) {
            isValid.numberOfColors = 'inValid'
        }
        return (isValid)
    }
    const handleChangeValue = (event) => {
        let valueToChange = {
            id: event.target.id,
            value: event.target.value
        }
        dispatch(changeProductValue(valueToChange))
    }
    const handleChangeColors = (event) => {
        let valuesToChange = {
            parentId: event.target.parentElement.parentElement.id,
            targetId: event.target.id,
            value: event.target.value
        }
        dispatch(changeColors(valuesToChange))
        
    }
    useEffect(()=>{
        
        if (!Object.values(validationState).includes('inValid')&&validationState.isValidationPassed === true) {
            
            let values = {
                category: category,
                initialID: initialID,
                product: productToEdit,
            }
            dispatch(changeProductsArr(values))
            dispatch(setProducts())
            setConfirmPopupActive(true)
        }
    },[validationState])
    
    const handleChangeProductsArr = (event) => {
        event.preventDefault()
        setValidationState(formValidation())
    }
    const handleDeleteColor = (event) => {
        
        dispatch(deleteColor(event.target.parentElement.parentElement.id))
    }
    const handleAddColor = () => {
        dispatch(addColor())
    }
    const handleDeleteProduct = () => {
        let values = {
            category: category,
            initialID: initialID,
        }
        dispatch(deleteProduct(values))
        dispatch(setProducts())
        history.push('/list')
    }
    return (

        <div className='productToEdit'>
            <form className="productToEdit_form" onSubmit={handleChangeProductsArr} action="">
                <div className='productToEdit__wrapper' onInput={handleChangeValue}>
                    <Input value={productToEdit.name} type='text' id='name' className='input editProduct-input' placeholder='product name' requiredValue={true} labelValue='Name' />
                    <div className={`error ${validationState.name}`}>
                        имя должно начинаться с заглавной буквы
                    </div>
                    <Input value={productToEdit.date} type='text' id='date' className='input editProduct-input' placeholder='market launch year' requiredValue={true} labelValue='Date' />
                    <div className={`error ${validationState.date}`}>
                        поле должно содержать год выхода на рынок
                    </div>
                    <Input value={productToEdit.screen} type='text' id='screen' className='input editProduct-input' placeholder='screen inches' requiredValue={true} labelValue='Screen' />
                    <div className={`error ${validationState.screen}`}>
                        поле должно содержать число от 4 до 8
                    </div>
                    <Input value={screenResolution.screenWidth} type='number' id='screenWidth' className='input editProduct-input' placeholder='screen width' requiredValue={true} labelValue='Screen width' />
                    <div className={`error ${validationState.screenWidth}`}>
                        введите ширину экрана в пикселях
                    </div>
                    <Input value={screenResolution.screenHeight} type='number' id='screenHeight' className='input editProduct-input' placeholder='screen height' requiredValue={true} labelValue='Screen height' />
                    <div className={`error ${validationState.screenHeight}`}>
                        введите высоту экрана в пикселях
                    </div>
                    <Input value={productToEdit.RAM} type='text' id='RAM' className='input editProduct-input' placeholder='RAM (gb)' requiredValue={true} labelValue='RAM' />
                    <div className={`error ${validationState.RAM}`}>
                        поле должно содержать число кратную 2 больше 2 меньше 64
                    </div>
                    <Input value={productToEdit.CPU} type='text' id='CPU' className='input editProduct-input' placeholder='CPU name' requiredValue={true} labelValue='CPU' />
                    <div className={`error ${validationState.CPU}`}>
                        поле должно содержать буквы и быть не менее 5 символов
                    </div>
                    <Input value={productToEdit.CPUClockSpeed} type='text' id='CPUClockSpeed' className='input editProduct-input' placeholder='CPU clock speed' requiredValue={true} labelValue='CPU clock speed' />
                    <div className={`error ${validationState.CPUClockSpeed}`}>
                        поле должно содержать только число от 100 до 3500
                    </div>
                    <Input value={productToEdit.cores} type='text' id='cores' className='input editProduct-input' placeholder='number of cores' requiredValue={true} labelValue='Cores' />
                    <div className={`error ${validationState.cores}`}>
                        поле должно содержать только цифры, до трех цифр кратных 2 через запятую
                    </div>
                    <Input value={productToEdit.GPU} type='text' id='GPU' className='input editProduct-input' placeholder='GPU name' requiredValue={true} labelValue='GPU' />
                    <div className={`error ${validationState.GPU}`}>
                        поле должно содержать буквы и быть не менее 5 символов
                    </div>
                    <Input value={productToEdit.GPUSpeed} type='text' id='GPUSpeed' className='input editProduct-input' placeholder='GPU speed' requiredValue={true} labelValue='GPU speed' />
                    <div className={`error ${validationState.GPUSpeed}`}>
                        поле должно содержать только цифры
                    </div>
                    <Input value={productToEdit.flashMemory} type='number' min='32' max='512' step={32} id='flashMemory' className='input editProduct-input' placeholder='flash memory (gb)' requiredValue={true} labelValue='Flash memory' />
                    <div className={`error ${validationState.flashMemory}`}>
                        поле должно содержать число от 32 до 512
                    </div>
                    <Input value={productToEdit.price} type='number' id='price' className='input editProduct-input' placeholder='price' requiredValue={true} labelValue='Price' />
                    <div className={`error ${validationState.price}`}>
                        поле должно содержать целое число
                    </div>
                </div>
                <Button eventCallback={handleAddColor} value='Add color' />
                {productToEdit.colors.map((item, key) => {
                    return (
                        <div key={key} className='editProduct__colors' onInput={handleChangeColors} id={`${key}`}>
                            <Input value={item.color} type='text' id='color' className='input editProduct-input' placeholder='color' requiredValue={true} labelValue='Color' />
                            <Input value={item.src} type='text' id='src' className='input editProduct-input' placeholder='image path' requiredValue={true} labelValue='Image' />
                            <Input value={item.amount} type='number' id='amount' className='input editProduct-input' placeholder='product quantity' requiredValue={true} labelValue='Quantity' />
                            {key > 0 ? <div className='colors__delete-button'>
                                <Button eventCallback={handleDeleteColor} value='Delete color' />
                            </div> : ''}
                        </div>
                    )
                })}
                <div className='editProduct-buttons__wrapper'>
                    <input className='editProduct__submit' type="submit" value='Confirm changes' />
                    <PopUp active={confirmPopupActive} setActive={setConfirmPopupActive}>
                        <h3>
                            Changes saved
                            successfully
                        </h3>
                        <Button eventCallback={()=>{history.push('/list')}} value='Yes' />
                    </PopUp>
                    <Button eventCallback={() => setPopupActive(true)} value='Delete item' />
                    <PopUp active={popupActive} setActive={setPopupActive}>
                        <h3>
                            Are you sure ?
                        </h3>
                        <div className='editProduct__delete-popup__buttons'>
                            <Button eventCallback={handleDeleteProduct} value='Yes' />
                            <Button eventCallback={() => setPopupActive(false)} value='No' />
                        </div>
                    </PopUp>
                </div>
            </form >

        </div>
    )
}