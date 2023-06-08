import React, { Fragment } from 'react'
import { useActionData, useNavigate, useNavigation, Form, json, redirect } from 'react-router-dom'
import './SignUp.scss'


export const SignUp = ({ method, event }) => {

    const data = useActionData()
    const navigate = useNavigate(), navigation = useNavigation()

    const process = navigation.state === 'submitting'
    
    return (<Fragment>
                <Form method={method} className='signup' >
                    <input required type={'text'} placeholder={'Enter Name'} name={'name'} id={'name'} defaultValue={ event ? (event.name):('') }/>
                    <input required type={'text'} placeholder={'Enter Surname'} name={'surname'} id={'surname'} defaultValue={ event ? (event.surname):('')} />
                    <input required type={'email'} placeholder={'Enter Email Address'} name={'email'} id={'email'} defaultValue={ event ? (event.email):('')} />
                    <input required type={'text'} placeholder={'Enter Username'} name={'username'} id={'username'} defaultValue={ event ? (event.username):('')} />
                    <input required type={'password'} placeholder={'Enter Passcode'} name={'passcode'} id={'passcode'} defaultValue={ event ? (event.passcode):('')} />
                    <input required type={'password'} placeholder={'Confirm Passcode'} name={'confirm'} id={'confirm'} defaultValue={ event ? (event.confirm):('')} />
                    <span>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></span>
                    <button type={'submit'} disabled={process}>{ process ? ('Submitting'):('REGISTER')}</button>
                </Form>
            </Fragment>)

}



