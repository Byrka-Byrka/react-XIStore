import { Input } from "../Input/Input";
import { VpnKeyOutlined, MailOutlineOutlined } from '@material-ui/icons';
import { Button } from "../Button/Button";
import './SingUp.css';
import { useEffect, useState } from "react";
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { singUpDeactivate, singToggle } from "../features/modalFrame/modalFrameSlice";
import { registration } from "../features/singIn/authorizationReducer"
import { PopUp } from "../PopUp/PopUp";


export function SingUp() {
    const singUpIsActive = useSelector((state)=> state.modalFrame.singUpIsActive)
    const signUPError = useSelector((state)=>state.authorization.signUPError)
    const dispatch = useDispatch()
    const isActiveClassName = singUpIsActive? 'singUp_active singUpOverlay' : 'singUpOverlay';
    const [passwordInput, setPasswordInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [registrationAttempt,setRegistrationAttempt]=useState(false);
    const [emailIsValid, setEmailIsValid] = useState('signUPEmailError')
    const [popupActive, setPopupActive]= useState(false)
    const handleChangeEmail = (event) => {
        setEmailInput(event.target.value); 
    }
    const emailValidation = (event) => {
        let re = /.+@.+\..+/i
        if(!re.test(emailInput)){
            setEmailIsValid('signUPEmailError invalidEmail')
        } else {
            setEmailIsValid('signUPEmailError')
        }
    }
    const handleChangePassword = (event) => {
        setPasswordInput(event.target.value);  
    }
    const registrationUser = (event) => {
        let re = /.+@.+\..+/i
        if(!re.test(emailInput)){
            setEmailIsValid('signUPEmailError invalidEmail')
        } else {
            setEmailIsValid('signUPEmailError')
            setRegistrationAttempt(true);
            let userInp = {
                emailInput,
                passwordInput,
            }
            dispatch(registration(userInp))
            setEmailInput('')
            setPasswordInput('')
        }

    }
    useEffect(()=>{
        setEmailIsValid('signUPEmailError')
    },[singUpIsActive])
    useEffect(()=>{
        if (signUPError){
            setPopupActive(true)
        } else {
            dispatch(singUpDeactivate())
        }
        setRegistrationAttempt(false)
    },[registrationAttempt])

    return (
        <div className={isActiveClassName}>
            <div className='main-container'>
                <h2>Sign Up</h2>
                <form action="" className='form_wrapper'>
                    <Input value={emailInput} onInputEvent={handleChangeEmail} onChangeEvent={emailValidation} type='email' id='signUpEmail' className='input' placeholder='email address' requiredValue={true} labelValue={<MailOutlineOutlined />} />
                    <div className={emailIsValid}>
                    Please enter a valid email address
                    </div>
                    <Input value={passwordInput} onInputEvent={handleChangePassword} type='password' id='signUpPassword' className='input' placeholder='password' requiredValue={true} labelValue={<VpnKeyOutlined />} />
                    <div className = 'button_group'>
                    <Button eventCallback={registrationUser} value='SING UP' />
                    <Button eventCallback= {() => dispatch(singUpDeactivate())}  value='CANCEL' />
                    </div>
                        <span className='registration-button' onClick={() => dispatch(singToggle())}>
                            Already have an account? Sign in
                        </span>
                </form>
                <PopUp active={popupActive} setActive={setPopupActive}>
                    <h3 className='popUp__error'>  
                        This email is already in use !
                    </h3>
                    <Button eventCallback={()=>setPopupActive(false)} value='Ok' />
                </PopUp>
            </div>
        </div>
    )
}