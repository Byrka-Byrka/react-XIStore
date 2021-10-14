import './PopUp.css'

export const PopUp = ({active, setActive, children}) => {
    return(
        <div onClick={() => setActive(false)} className={active? 'popup active':'popup'}>
            <div onClick={e=>e.stopPropagation()} className='popup__content'>
                {children}
            </div>
        </div>
    );

};