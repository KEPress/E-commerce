import React, { Fragment } from 'react'
import { Form, useActionData, useNavigate, useNavigation, json, redirect } from 'react-router-dom'
import './SignIn.scss'

export const SignIn = ({ method, event }) => {

    const data = useActionData()
    const navigate = useNavigate(), navigation = useNavigation()

    const process = navigation.state === 'submitting'
    
    return (<Fragment>
                 <Form method={method}>
                    <input required type={'text'} name={'username'} id={'username'} placeholder={'Enter Username'} defaultValue={ event ? (event.username):('')} />
                    <input required type={'password'} name={'passcode'} id={'passcode'} placeholder={'Enter Passcode'} defaultValue={ event ? (event.passcode):('')} />
                    <button type={'submit'} disabled={process}>{ process ? ('Logging'):('LOGIN')}</button>
                    <a href={`/`}>Forget Passcode!?</a>
                    <a href={`/`}>Create New Account</a>
                  </Form>
            </Fragment>)

}
