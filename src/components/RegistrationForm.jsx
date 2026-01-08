import z from "zod"
import registrationSchema from "../schemas/registrationSchema"
import "./RegistrationForm.sass"
import { use, useEffect, useState } from "react"

export default function RegistrationForm(){
    const [firstNameError, setFirstNameError] = useState({})
    const [lastNameError, setLastNameError] = useState({})
    const [usernameError, setUsernameError] = useState({})
    const [emailError, setEmailError] = useState({})
    const [passwordError, setPasswordError] = useState({})
    const [confirmPasswordError, setConfirmPasswordError] = useState({})
    const [birthdayError, setBirthdayError] = useState({})
    const [phoneError, setPhoneError] = useState({})
    const [descriptionError, setDescriptionError] = useState({})

    const firstNameHandler = (event) => {
        const result = registrationSchema.safeParse({firstName: `${event.target.value}`})
        if(result.success){
            setFirstNameError({})
        } else {
            const readableErrors = z.treeifyError(result.error)
            setFirstNameError(readableErrors.properties)
        }
    }

    const lastNameHandler = (event) => {
        const result = registrationSchema.safeParse({lastName: `${event.target.value}`})
        if(result.success){
            setLastNameError({})
        } else {
            const readableErrors = z.treeifyError(result.error)
            setLastNameError(readableErrors.properties)
        }
    }

    const usernameHandler = (event) => {
        const result = registrationSchema.safeParse({username: `${event.target.value}`})
        if(result.success){
            setUsernameError({})
        } else {
            const readableErrors = z.treeifyError(result.error)
            setUsernameError(readableErrors.properties)
        }
    }

    const emailHandler = (event) => {
        const result = registrationSchema.safeParse({email: `${event.target.value}`})
        if(result.success){
            setEmailError({})
        } else {
            const readableErrors = z.treeifyError(result.error)
            setEmailError(readableErrors.properties)
        }
    }

    const passwordHandler = (event) => {
        const result = registrationSchema.safeParse({password: `${event.target.value}`})
        if(result.success){
            setPasswordError({})
        } else {
            const readableErrors = z.treeifyError(result.error)
            setPasswordError(readableErrors.properties)
        }
    }

    const birthdayHandler = (event) => {
        const result = registrationSchema.safeParse({birthday: `${event.target.value}`})
        if(result.success){
            setBirthdayError({})
        } else {
            const readableErrors = z.treeifyError(result.error)
            setBirthdayError(readableErrors.properties)
        }
    }

    const phoneHandler = (event) => {
        const result = registrationSchema.safeParse({phone: `${event.target.value}`})
        if(result.success){
            setPhoneError({})
        } else {
            const readableErrors = z.treeifyError(result.error)
            setPhoneError(readableErrors.properties)
        }
    }

    const descriptionHandler = (event) => {
        const result = registrationSchema.safeParse({description: `${event.target.value}`})
        if(result.success){
            setDescriptionError({})
        } else {
            const readableErrors = z.treeifyError(result.error)
            setDescriptionError(readableErrors.properties)
        }
    }

    const submithandler = (event) => {
        event.preventDefault()

        const form = event.target
        const formdata = new FormData(form)
        const formDataObject = Object.fromEntries(formdata.entries())

        const result = registrationSchema.safeParse(formDataObject)

        if(result.success){
            setConfirmPasswordError({})
            alert(
                `Tak for din registrering`
            )
            form.reset()
        } else {
            const readableErrors = z.treeifyError(result.error)
            setFirstNameError(readableErrors.properties)
            setLastNameError(readableErrors.properties)
            setUsernameError(readableErrors.properties)
            setEmailError(readableErrors.properties)
            setPasswordError(readableErrors.properties)
            setConfirmPasswordError(readableErrors.properties)
            setBirthdayError(readableErrors.properties)
            setPhoneError(readableErrors.properties)
            setDescriptionError(readableErrors.properties)
        }
    }

    return(
        <form onSubmit={submithandler} className="sign-up-form">
            <fieldset className="sign-up-form__fieldset">
                <legend className="sign-up-form__legend">Lav en profil</legend>
                <label htmlFor="first-name" className="sign-up-form__label">
                    <span className="sign-up-form__text">Fornavn</span>
                    <input onChange={firstNameHandler} id="first-name" name="firstName" className="sign-up-form__input" type="text" autoComplete="given-name"/>
                    <ul className="sign-up-form__error-list">
                        {
                            firstNameError.firstName?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="last-name" className="sign-up-form__label">
                    <span className="sign-up-form__text">Efternavn</span>
                    <input onChange={lastNameHandler} id="last-name" name="lastName" className="sign-up-form__input" type="text" autoComplete="family-name"/>
                    <ul className="sign-up-form__error-list">
                        {
                            lastNameError.lastName?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="username" className="sign-up-form__label">
                    <span className="sign-up-form__text">Brugernavn</span>
                    <input onChange={usernameHandler} id="username" name="username" className="sign-up-form__input" type="text" autoComplete="given-name"/>
                    <ul className="sign-up-form__error-list">
                        {
                            usernameError.username?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="email" className="sign-up-form__label">
                    <span className="sign-up-form__text">Email</span>
                    <input onChange={emailHandler} id="email" name="email" className="sign-up-form__input" type="email" autoComplete="email"/>
                    <ul className="sign-up-form__error-list">
                        {
                            emailError.email?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="password" className="sign-up-form__label">
                    <span className="sign-up-form__text">Adgangskode</span>
                    <input onChange={passwordHandler} id="password" name="password" className="sign-up-form__input" type="password" autoComplete="new-password"/>
                    <ul className="sign-up-form__error-list">
                        {
                            passwordError.password?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="confirm-password" className="sign-up-form__label">
                    <span className="sign-up-form__text">Gentag adgangskode</span>
                    <input id="confirm-password" name="confirmPassword" className="sign-up-form__input" type="password" autoComplete="new-password"/>
                    <ul className="sign-up-form__error-list">
                        {
                            confirmPasswordError.confirmPassword?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="birthday" className="sign-up-form__label">
                    <span className="sign-up-form__text">Fødselsdag</span>
                    <input onChange={birthdayHandler} id="birthday" name="birthday" className="sign-up-form__input" type="date" autoComplete="bday-day"/>
                    <ul className="sign-up-form__error-list">
                        {
                            birthdayError.birthday?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="phone" className="sign-up-form__label">
                    <span className="sign-up-form__text">Telefon</span>
                    <input onChange={phoneHandler} id="phone" name="phone" className="sign-up-form__input" type="tel" autoComplete="tel"/>
                    <ul className="sign-up-form__error-list">
                        {
                            phoneError.phone?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="description" className="sign-up-form__label">
                    <span className="sign-up-form__text">Profil beskrivelse</span>
                    <textarea onChange={descriptionHandler} id="description" name="description" className="sign-up-form__textarea"/>
                    <ul className="sign-up-form__error-list">
                        {
                            descriptionError.description?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
            </fieldset>
            <button className="sign-up-form__button" type="submit">Opret bruger</button>
        </form>
    )
}