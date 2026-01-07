import z from "zod"
import registrationSchema from "../schemas/registrationSchema"
import "./RegistrationForm.sass"
import { useState } from "react"

export default function RegistrationForm(){
    const [errors, setErrors] = useState({})

    const submithandler = (event) => {
        event.preventDefault()

        const form = event.target
        const formdata = new FormData(form)
        const formDataObject = Object.fromEntries(formdata.entries())

        const result = registrationSchema.safeParse(formDataObject)

        if(result.success){
            setErrors({})
            alert("Du er nu oprettet som bruger")
        } else {
            const readableErrors = z.treeifyError(result.error)
            // console.log(readableErrors.properties)
            setErrors(readableErrors.properties)
        }
    }

    return(
        <form onSubmit={submithandler} className="sign-up-form">
            <fieldset className="sign-up-form__fieldset">
                <legend className="sign-up-form__legend">Lav en profil</legend>
                <label htmlFor="first-name" className="sign-up-form__label">
                    <span className="sign-up-form__text">Fornavn</span>
                    <input id="first-name" name="firstName" className="sign-up-form__input" type="text" autoComplete="given-name"/>
                    <ul className="sign-up-form__error-list">
                        {
                            errors.firstName?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="last-name" className="sign-up-form__label">
                    <span className="sign-up-form__text">Efternavn</span>
                    <input id="last-name" name="lastName" className="sign-up-form__input" type="text" autoComplete="family-name"/>
                    <ul className="sign-up-form__error-list">
                        {
                            errors.lastName?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="email" className="sign-up-form__label">
                    <span className="sign-up-form__text">Email</span>
                    <input id="email" name="email" className="sign-up-form__input" type="email" autoComplete="email"/>
                    <ul className="sign-up-form__error-list">
                        {
                            errors.email?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="password" className="sign-up-form__label">
                    <span className="sign-up-form__text">Adgangskode</span>
                    <input id="password" name="password" className="sign-up-form__input" type="password" autoComplete="new-password"/>
                    <ul className="sign-up-form__error-list">
                        {
                            errors.password?.errors.map(
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
                            errors.confirmPassword?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="birthday" className="sign-up-form__label">
                    <span className="sign-up-form__text">Fødselsdag</span>
                    <input id="birthday" name="birthday" className="sign-up-form__input" type="date" autoComplete="bday-day"/>
                    <ul className="sign-up-form__error-list">
                        {
                            errors.birthday?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="phone" className="sign-up-form__label">
                    <span className="sign-up-form__text">Telefon</span>
                    <input id="phone" name="phone" className="sign-up-form__input" type="tel" autoComplete="tel"/>
                    <ul className="sign-up-form__error-list">
                        {
                            errors.phone?.errors.map(
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