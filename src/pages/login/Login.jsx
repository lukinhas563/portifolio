import NavComponent from '../../components/NavComponent'
import { AiOutlineGoogle } from "react-icons/ai"
import { useContext } from 'react'
import { AuthGoogleContext } from '../../context/authGoogle'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import './Login.css'


export default function Login() {

    const { handleGoogleSign, signed } = useContext(AuthGoogleContext)

    async function loginGoogle() {

        try {

            await handleGoogleSign()

        } catch (error) {

            toast.error('Erro inesperado')
        }


    }

    if (!signed) {

        return (
            <>
                <NavComponent />
                <div className='divLogin'>

                    <h2>Acesse sua conta</h2>
                    <span>Para acessar a página de Administrador do site, você deve
                        estar autenticado com uma conta do Google autorizada.
                    </span>
                    <button onClick={() => loginGoogle()}><AiOutlineGoogle size={20} />Entrar com Google</button>

                </div>

            </>
        )

    } else {

        return <Navigate to={'/post'} />

    }


}