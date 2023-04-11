import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../firebase/firebase.config";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignupForm = () => {
    const [formFields, setformFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('password do not match')
            return;
        }

        try {
            const user = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use')
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformFields({ ...formFields, [name]: value })
    }

    return (
        <div>
            <h2>Sign up with your email and password</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Display Name</label>
                <input type="text" required name="displayName" value={displayName} onChange={handleChange} />

                <label htmlFor="">Email</label>
                <input type="email" required name="email" value={email} onChange={handleChange} />

                <label htmlFor="">Password</label>
                <input type="password" required name="password" value={password} onChange={handleChange} />

                <label htmlFor="">Confirm Password</label>
                <input type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm