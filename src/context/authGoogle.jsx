import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../services/firebaseConfig.js'
import { createContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

export const AuthGoogleContext = createContext({})

export const AuthGoogleProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider()

    useEffect(() => {

        const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user")

            if (sessionToken && sessionUser) {
                setUser(sessionUser)
            }
        }

        loadStoreAuth()

    }, [])

    function handleGoogleSign() {

        signInWithPopup(auth, provider)
            .then(result => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken
                const user = result.user

                setUser(user)

                sessionStorage.setItem("@AuthFirebase:token", token)
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))

            })
            .catch(error => {

                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

            })

    }

    function handleGoogleSignOut() {

        sessionStorage.clear()
        setUser(null)

        return <Navigate to={'/login'} />
    }

    return (
        <AuthGoogleContext.Provider
            value={{ handleGoogleSign, signed: !!user, user, handleGoogleSignOut }}>
            {children}
        </AuthGoogleContext.Provider>
    )
}