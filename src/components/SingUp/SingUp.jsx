import { Input } from "../Input/Input";
import { VpnKeyOutlined, MailOutlineOutlined } from '@material-ui/icons';
import { Button } from "../Button/Button";
import './SingUp.css';
import { useState } from "react";
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { singUpDeactivate, singToggle } from "../features/modalFrame/modalFrameSlice";
import { registration } from "../features/singIn/authorizationReducer"


export function SingUp() {
    const singUpIsActive = useSelector((state)=> state.modalFrame.singUpIsActive)
    const dispatch = useDispatch()
    const isActiveClassName = singUpIsActive? 'singUp_active singUpOverlay' : 'singUpOverlay';
    const [passwordInput, setPasswordInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const handleChangeEmail = (event) => {
        setEmailInput(event.target.value); 
    }
    const handleChangePassword = (event) => {
        setPasswordInput(event.target.value);  
    }
    const registrationUser = (event) => {
        let userInp = {
            emailInput,
            passwordInput,
        }
        dispatch(registration(userInp))
        setEmailInput('')
        setPasswordInput('')

    }

    return (
        <div className={isActiveClassName}>
            <div className='main-container'>
                <h2>Sing Up</h2>
                <form action="" className='form_wrapper'>
                    <Input onInputEvent={handleChangeEmail} type='email' id='signUpEmail' className='input' placeholder='email address' requiredValue={true} labelValue={<MailOutlineOutlined />} />
                    <Input onInputEvent={handleChangePassword} type='password' id='signUpPassword' className='input' placeholder='password' requiredValue={true} labelValue={<VpnKeyOutlined />} />
                    <div className = 'button_group'>
                    <Button eventCallback={registrationUser} value='SING UP' />
                    <Button eventCallback= {() => dispatch(singUpDeactivate())}  value='CANCEL' />
                    </div>
                        <span className='registration-button' onClick={() => dispatch(singToggle())}>
                            Already have an account? Sign in
                        </span>
                </form>
            </div>
        </div>
    )
}