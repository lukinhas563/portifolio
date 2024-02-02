import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../services/firebaseConfig.js'
import { createContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types';

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

                if (user.email === import.meta.env.VITE_FIREBASE_EMAILALLOWED) {

                    setUser(user)

                    sessionStorage.setItem("@AuthFirebase:token", token)
                    sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))

                    toast.success('Logado com sucesso')

                } else {

                    toast.error('Usuário não autorizado')
                    return
                }


            })
            .catch(error => {

                const errorCode = error.code;
                const errorMessage = error.message;
                // const email = error.customData.email;
                // const credential = GoogleAuthProvider.credentialFromError(error);
                toast.error('Ocorreu um erro durante a autenticação')
                console.error('Detalhes do erro: ', errorCode, errorMessage)

            })

    }

    function handleGoogleSignOut() {

        sessionStorage.clear()
        setUser(null)
        toast.success('Desconectado')

        return <Navigate to={'/login'} />
    }

    return (
        <AuthGoogleContext.Provider
            value={{ handleGoogleSign, signed: !!user, user, handleGoogleSignOut }}>
            {children}
        </AuthGoogleContext.Provider>
    )
}

AuthGoogleProvider.propTypes = {
    children: PropTypes.node.isRequired,

};