import './AddProductPage.css'
import { Link } from 'react-router-dom';
import { Input } from '../Input/Input';
import { useSelector, useDispatch } from 'react-redux'
import { changeNumberOfColors, changeProductValue, changeColors, productReset } from '../features/AddProduct/AddProduct'
import { editProducts, editProductsInLocalStorage } from '../features/CreateLocalStorage/CreateLocalStorage'
import { setProducts } from '../features/Filter/Filter'
import { useState } from 'react';
import { PopUp } from '../PopUp/PopUp';
import { useEffect } from 'react';


export function AddProductPage(props) {
    const [popupActive, setPopupActive] = useState(false)
    const dispatch = useDispatch()
    const newProduct = useSelector((state) => state.addProduct.newProduct)
    const screenResolution = useSelector((state) => state.addProduct.screenResolution)

    const handleChangeValue = (event) => {
        if (event.target.id === 'numberOfColors') {
            dispatch(changeNumberOfColors(event.target.value))
        } else {
            let valueToChange = {
                id: event.target.id,
                value: event.target.value
            }
            dispatch(changeProductValue(valueToChange))
        }
    }

    const handleChangeColors = (event) => {
        let valuesToChange = {
            parentId: event.target.parentElement.parentElement.id,
            targetId: event.target.id,
            value: event.target.value
        }
        dispatch(changeColors(valuesToChange))
        console.log(newProduct.product.colors)
    }
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
        numberOfColors: 'valid'
    }
    const formValidation = (product) => {
        let date = new Date();
        let currentYear = date.getFullYear()
        if (!newProduct.product.name[0]) {
            isValid.name = 'inValid'
        } else if (newProduct.product.name[0] !== newProduct.product.name[0].toUpperCase()) { isValid.name = 'inValid' }
        if (!newProduct.product.date || isNaN(newProduct.product.date)) {
            isValid.date = 'inValid'
        } else if (+newProduct.product.date > currentYear || (+newProduct.product.date) < (currentYear - 20)) {
            isValid.date = 'inValid'
        }
        if (!newProduct.product.screen || isNaN(newProduct.product.screen)) {
            isValid.screen = 'inValid'
        } else if (+newProduct.product.screen < 4 || +newProduct.product.screen > 8) {
            isValid.screen = 'inValid'
        }
        if (!screenResolution.screenWidth || isNaN(screenResolution.screenWidth)) {
            isValid.screenWidth = 'inValid'
        }
        if (!screenResolution.screenHeight || isNaN(screenResolution.screenHeight)) {
            isValid.screenHeight = 'inValid'
        }
        if (!newProduct.product.RAM || isNaN(newProduct.product.RAM)) {
            isValid.RAM = 'inValid'
        } else if (+newProduct.product.RAM < 2 || +newProduct.product.RAM > 64 || newProduct.product.RAM % 2) {
            isValid.RAM = 'inValid'
        }
        if (!newProduct.product.CPU || !isNaN(newProduct.product.CPU)) {
            isValid.CPU = 'inValid'
        } else if (newProduct.product.CPU.length < 5) {
            isValid.CPU = 'inValid'
        }
        if (!newProduct.product.CPUClockSpeed || isNaN(newProduct.product.CPUClockSpeed)) {
            isValid.CPUClockSpeed = 'inValid'
        } else if (+newProduct.product.CPUClockSpeed < 100 || +newProduct.product.CPUClockSpeed > 2000) {
            isValid.CPUClockSpeed = 'inValid'
        }
        if (!newProduct.product.cores[0] || newProduct.product.cores.length > 3) {
            isValid.cores = 'inValid'
        } else if (newProduct.product.cores.find(item => item % 2 !== 0)) {
            isValid.cores = 'inValid'
        }
        if (!newProduct.product.GPU || !isNaN(newProduct.product.GPU)) {
            isValid.GPU = 'inValid'
        } else if (newProduct.product.GPU.length < 5) {
            isValid.GPU = 'inValid'
        }
        if (!newProduct.product.GPUSpeed || isNaN(newProduct.product.GPUSpeed)) {
            isValid.GPUSpeed = 'inValid'
        } else if (+newProduct.product.GPUSpeed < 100 || +newProduct.product.GPUSpeed > 2000) {
            isValid.GPUSpeed = 'inValid'
        }
        if (!newProduct.product.flashMemory || isNaN(newProduct.product.flashMemory)) {
            isValid.flashMemory = 'inValid'
        } else if (+newProduct.product.flashMemory < 32 || +newProduct.product.flashMemory > 512 || newProduct.product.RAM % 2) {
            isValid.flashMemory = 'inValid'
        }
        if (!newProduct.product.price || isNaN(newProduct.product.price) || newProduct.product.price % 1 || newProduct.product.price < 1) {
            isValid.price = 'inValid'
        }
        if (!newProduct.product.colors[0]) {
            isValid.numberOfColors = 'inValid'
            console.log(222)
        }
        isValid.validation = true;
    }
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
        validation: false,
    })
    useEffect(() => {
        if (!Object.values(validationState).includes('inValid') && validationState.validation === true) {
            dispatch(editProductsInLocalStorage(newProduct))
            dispatch(editProducts(newProduct))
            dispatch(setProducts())
            dispatch(productReset())
            setPopupActive(true)
        }
    }, [validationState])
    const handleAddProduct = (event) => {
        event.preventDefault()
        formValidation()
        setValidationState(isValid)
    }

    return (

        <div className='newProduct'>
            <form className="newProduct_form" onSubmit={handleAddProduct} action="">
                <div className='newProduct__wrapper' onInput={handleChangeValue}>
                    <div className="newProduct_category">
                        <p>Choose category</p>
                        <select className='newProduct_category__input' name="categorySelector" required id="category">
                            <option value="Mi Phones">Mi Phones</option>
                            <option value="POCOPHONE">POCOPHONE</option>
                            <option value="Redmi Phones">Redmi Phones</option>
                        </select>
                    </div>
                    <Input value={newProduct.product.name} type='text' id='name' className='input addProduct-input' placeholder='product name' requiredValue={false} labelValue='Name' />
                    <div className={`error ${validationState.name}`}>
                        Name must start with a capital letter
                    </div>
                    <Input value={newProduct.product.date} type='text' id='date' className='input addProduct-input' placeholder='market launch year' requiredValue={false} labelValue='Date' />
                    <div className={`error ${validationState.date}`}>
                        The field must contain the year of market entry
                    </div>
                    <Input value={newProduct.product.screen} type='number' id='screen' min='4' max='8' step='0.1' className='input addProduct-input' placeholder='screen inches' requiredValue={false} labelValue='Screen' />
                    <div className={`error ${validationState.screen}`}>
                        The field must contain a number from 4 to 8
                    </div>
                    <Input value={screenResolution.screenWidth} type='number' id='screenWidth' min='1' className='input addProduct-input' placeholder='screen width' requiredValue={false} labelValue='Screen width' />
                    <div className={`error ${validationState.screenWidth}`}>
                        Enter screen width in pixels
                    </div>
                    <Input value={screenResolution.screenHeight} type='number' min='1' id='screenHeight' className='input addProduct-input' placeholder='screen height' requiredValue={false} labelValue='Screen height' />
                    <div className={`error ${validationState.screenHeight}`}>
                        Enter screen height in pixels
                    </div>
                    <Input value={newProduct.product.RAM} type='number' min='2' max='64' step={2} id='RAM' className='input addProduct-input' placeholder='RAM (gb)' requiredValue={false} labelValue='RAM' />
                    <div className={`error ${validationState.RAM}`}>
                        The field must contain a multiple of 2, greater than 2 less than 64
                    </div>
                    <Input value={newProduct.product.CPU} type='text' id='CPU' className='input addProduct-input' placeholder='CPU name' requiredValue={false} labelValue='CPU' />
                    <div className={`error ${validationState.CPU}`}>
                        The field must contain letters and be at least 5 characters
                    </div>
                    <Input value={newProduct.product.CPUClockSpeed} type='number' min='100' max='2000' step='100' id='CPUClockSpeed' className='input addProduct-input' placeholder='CPU clock speed' requiredValue={false} labelValue='CPU clock speed' />
                    <div className={`error ${validationState.CPUClockSpeed}`}>
                        The field should only contain a number between 100 and 3500
                    </div>
                    <Input value={newProduct.product.cores} type='text' id='cores' className='input addProduct-input' placeholder='number of cores' requiredValue={false} labelValue='Cores' />
                    <div className={`error ${validationState.cores}`}>
                        The field must contain only numbers, up to three digits divisible by 2, separated by commas
                    </div>
                    <Input value={newProduct.product.GPU} type='text' id='GPU' className='input addProduct-input' placeholder='GPU name' requiredValue={false} labelValue='GPU' />
                    <div className={`error ${validationState.GPU}`}>
                        The field must contain letters and be at least 5 characters
                    </div>
                    <Input value={newProduct.product.GPUSpeed} type='number' id='GPUSpeed' min='100' max='2000' step='100' className='input addProduct-input' placeholder='GPU speed' requiredValue={false} labelValue='GPU speed' />
                    <div className={`error ${validationState.GPUSpeed}`}>
                        The field must contain only numbers
                    </div>
                    <Input value={newProduct.product.flashMemory} type='number' min='32' max='512' step={32} id='flashMemory' className='input addProduct-input' placeholder='flash memory (gb)' requiredValue={false} labelValue='Flash memory' />
                    <div className={`error ${validationState.flashMemory}`}>
                        The field must contain a number from 32 to 512
                    </div>
                    <Input value={newProduct.product.price} type='number' id='price' min='1' className='input addProduct-input' placeholder='price' requiredValue={false} labelValue='Price' />
                    <div className={`error ${validationState.price}`}>
                        The field must contain an integer
                    </div>
                    <Input type='number' id='numberOfColors' className='input addProduct-input' min='1' placeholder='number of colors' requiredValue={false} labelValue='Colors' />
                    <div className={`error ${validationState.numberOfColors}`}>
                        The field must contain an integer
                    </div>
                </div>
                {newProduct.product.colors.map((item, index) => {
                    return (
                        <div className='colors__wrapper' onInput={handleChangeColors} key={index} id={`${index}`}>
                            <Input value={newProduct.product.colors[index].color} type='text' id='color' className='input addProduct-input' placeholder='color' requiredValue={true} labelValue='Color' />
                            <Input value={newProduct.product.colors[index].src} type='text' id='src' className='input addProduct-input' placeholder='image path' requiredValue={true} labelValue='Image' />
                            <Input value={newProduct.product.colors[index].amount} type='number' id='amount' className='input addProduct-input' placeholder='product quantity' requiredValue={true} labelValue='Quantity' />
                        </div>
                    )
                })}
                <input className='addProduct__submit' type="submit" value='Add Product' />
            </form >
            <PopUp active={popupActive} setActive={setPopupActive}>
                <h3>
                    product added successfully
                </h3>
                <Link onClick={() => setPopupActive(false)} className='popUp-link' to='/list'><div>To main Page</div></Link>
            </PopUp>


        </div>
    )
}