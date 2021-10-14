import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import './FilterPopup.css'
import { useSelector, useDispatch } from 'react-redux'
import { filterProducts, clearFilter, changeSortParam, changePriceParam, changeWordFilter, changeIsActive } from '../features/Filter/Filter'


export function FilterPopup() {
    const dispatch = useDispatch()
    const handleSort = (event) => {
        dispatch(changeSortParam(event.target.value))
        dispatch(filterProducts())
    }
    const handleChangePrise = (event) =>{
        let value = {
            id: event.target.id,
            value: +event.target.value
        }
        dispatch(changePriceParam(value))
        dispatch(filterProducts())
    }
    const handleChangeWordFilter = (event)=>{
        
        dispatch(changeWordFilter(event.target.value))
        dispatch(filterProducts())
        
    }
    const closeFilter = () =>{
        dispatch(changeIsActive())
    }
    const handleClearFilter = (event) =>{
        dispatch(clearFilter())
        dispatch(filterProducts())
        document.getElementById('filterForm').reset();

    }
    const isActive = useSelector((state) => state.filter.isActive)

    return (
        <div className={isActive ? 'filterOverlay filter_active' : 'filterOverlay'}>
            <form id='filterForm' className='filterForm' action="">
            <div className='filter_control'>
                <Button eventCallback={closeFilter} className='filter_close' value='close' />
                <Button eventCallback={handleClearFilter} className='filter_clear' value='clear' />
            </div>

            <div className='filter'>
                <div onInput={handleChangePrise} className='sort_price'>
                    <Input labelValue='Price:'  id='minPrice' placeholder='min price' className='sort_minPrice' type='number' />
                    <Input id='maxPrice' placeholder='max price' className='sort_maxPrice' type='number' />
                </div>
                <div onClick={handleSort} className='sort_checkboxes'>
                    <Input name='sort' id='priceSort' value='priceSort' className='sort_Price' labelValue='Sort by price' type='radio' />
                    <Input name='sort' id='dateSort' value='dateSort' className='sort_date' labelValue='Sort by date' type='radio' />
                    <Input name='sort' id='amountSort' value='amountSort' className='sort_amount' labelValue='Sort by amount' type='radio' />
                </div>
                <div className='search_container'>
                    <Input onInputEvent={handleChangeWordFilter}  id='keyWordSort' className='sort_keyword input' labelValue='Search: ' type='text' />
                </div>

            </div>
            </form>
        </div>
    )
}