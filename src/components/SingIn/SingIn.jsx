import { Input } from "../Input/Input";
import { MailOutlineOutlined, VpnKeyOutlined } from '@material-ui/icons';
import { Button } from "../Button/Button";
import './SingIn.css';
import { useSelector, useDispatch } from 'react-redux'
import { singInDeactivate, singToggle } from "../features/modalFrame/modalFrameSlice";
import { useState } from "react";
import { SubmitInput } from "../SubmitInput/SubmitInput";
import { authorization } from '../features/singIn/authorizationReducer'
import { PopUp } from "../PopUp/PopUp";
import { useEffect } from "react";

export function SingIn() {
    const isSingInActive = useSelector((state) => state.modalFrame.singInIsActive)
    const dispatch = useDispatch()
    const isActiveClassName = isSingInActive ? 'singIn_active singInOverlay' : 'singInOverlay';
    const isUserAuthorized = useSelector((state) => state.authorization.isUserAuthorized)
    const signInError = useSelector((state) =>state.authorization.signInError)
    if (isUserAuthorized) {
        dispatch(singInDeactivate())
    }

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [popupActive,setPopupActive] = useState(false);
    const [authorizationAttempt,setAuthorizationAttempt]=useState(false);

    const handleChangeUsername = (event) => {
        setUsernameInput(event.target.value);
        
        
    }
    const handleChangePassword = (event) => {
        setPasswordInput(event.target.value);
        
        
    }
    const handleAuthorization = (event) => {
        setAuthorizationAttempt(true)
        let userInp = {
            usernameInput,
            passwordInput
        }
        dispatch(authorization(userInp))
        
        if (isUserAuthorized) {
            dispatch(singInDeactivate())
        }
        
        setUsernameInput('')
        setPasswordInput('')
        event.preventDefault()
    }
    useEffect(()=>{
        if (signInError){
            setPopupActive(true)
        }
        setAuthorizationAttempt(false)
    },[authorizationAttempt])

    return (
        <div className={isActiveClassName}>
            <div className='main-container'>
                <h2>Sing In</h2>
                <form id='singInForm' onSubmit={handleAuthorization} className='form_wrapper'>
                    <Input value={usernameInput} onInputEvent={handleChangeUsername} type='email' id='email' className='input' placeholder='email address' requiredValue={true} labelValue={<MailOutlineOutlined />} />
                    <Input value={passwordInput} onInputEvent={handleChangePassword} type='password' id='password' className='input' placeholder='password' requiredValue={true} labelValue={<VpnKeyOutlined />} />
                    <div className='button_group'>
                        <SubmitInput value='SIGN IN' />
                        <Button eventCallback={() => dispatch(singInDeactivate())} value='CANCEL' />
                    </div>

                    <span className='registration-button' onClick={() => dispatch(singToggle())} >
                        Don't have an account? Sign up
                    </span>

                </form>
                <PopUp active={popupActive} setActive={setPopupActive}>
                    <h3 className='popUp__error'>
                        Wrong password or email !
                    </h3>
                    <Button eventCallback={()=>setPopupActive(false)} value='Try again' />
                </PopUp>
            </div>
        </div>
    )
}