import { useEffect, useState } from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { toast } from 'react-toastify'
import isEmail from 'validator/lib/isEmail'
import { isLength } from 'validator'
import emailjs from '@emailjs/browser'
import './ContactComponent.css'




export default function ContactComponent() {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [verification, setVerification] = useState('')
    const [verification2, setVerification2] = useState(0)
    const [numberVerification1, setNumberVerification1] = useState(0)
    const [numberVerification2, setNumberVerification2] = useState(0)
    const [verification3, setVerification3] = useState(0)
    const [message, setMessage] = useState('')


    const [loading, setLoading] = useState(0)

    const generateRandomNumbers = () => {

        const randomNumber1 = Math.floor(Math.random() * 9 + 1)
        const randomNumber2 = Math.floor(Math.random() * 9 + 1)

        setNumberVerification1(randomNumber1)
        setNumberVerification2(randomNumber2)

        setVerification3(randomNumber1 + randomNumber2)

    }

    useEffect(() => {

        generateRandomNumbers()

    }, [])


    async function handleSubmit(e) {
        e.preventDefault()

        const valid = validation()

        if (valid) {

            setLoading(1)

            const templateParams = {
                from_name: name,
                from_lastname: lastName,
                from_email: email,
                from_company: company,
                message: message
            }

            try {

                await emailjs.send(import.meta.env.VITE_FIREBASE_EMAILSERVICE, import.meta.env.VITE_FIREBASE_EMAILTEMPLATE, templateParams, import.meta.env.VITE_FIREBASE_EMAILKEY)
                toast.success('E-mail enviado com sucesso')
                handleClear()
                setLoading(0)
                generateRandomNumbers()

            } catch (error) {

                toast.error('Erro inesperado')
                setLoading(0)
            }


        } else {

            return

        }

    }

    function validation() {

        let isValid = true

        const elementName = document.getElementById('name')
        const elementLastname = document.getElementById('lastname')
        const elementEmail = document.getElementById('email')
        const elementCompany = document.getElementById('company')
        const elementMessage = document.getElementById('message')
        const elementVerification = document.getElementById('verification')

        if (verification.length > 0) {
            return
        }

        if (verification2 !== verification3) {
            toast.error('Verificação incorreta')
            elementVerification.classList.add('errorMessage')
            return
        }
        elementVerification.classList.remove('errorMessage')

        if (name === '' ||
            lastName === '' ||
            email === '' ||
            company === '' ||
            message === '') {

            toast.error('Campos em branco')

            elementName.classList.add('errorMessage')
            elementLastname.classList.add('errorMessage')
            elementEmail.classList.add('errorMessage')
            elementCompany.classList.add('errorMessage')
            elementMessage.classList.add('errorMessage')

            return
        }

        if (!isLength(name, { min: 3, max: 50 })) {
            toast.error('Campo nome deve ter mais de 3 caracteres')
            elementName.classList.add('errorMessage')
            isValid = false
        } else if (isValid) {
            elementName.classList.remove('errorMessage')
        }


        if (!isLength(lastName, { min: 3, max: 50 })) {
            toast.error('Campo sobrenome deve ter mais de 3 caracteres')
            elementLastname.classList.add('errorMessage')
            isValid = false
        } else if (isValid) {
            elementLastname.classList.remove('errorMessage')
        }



        if (!isLength(email, { min: 3, max: 50 })) {
            toast.error('Campo email deve ter mais de 3 caracteres')
            elementEmail.classList.add('errorMessage')
            isValid = false
        }
        if (!isEmail(email)) {
            toast.error('E-mail inválido')
            elementEmail.classList.add('errorMessage')
            isValid = false
        } else if (isValid) {
            elementEmail.classList.remove('errorMessage')
        }


        if (!isLength(company, { min: 3, max: 50 })) {
            toast.error('Campo empresa deve ter mais de 3 caracteres')
            elementCompany.classList.add('errorMessage')
            isValid = false
        } else if (isValid) {
            elementCompany.classList.remove('errorMessage')
        }


        if (!isLength(message, { min: 10, max: 1000 })) {
            toast.error('Campo mensagem deve ter entre 10 e 1000 caracteres')
            elementMessage.classList.add('errorMessage')
            isValid = false
        } else if (isValid) {
            elementMessage.classList.remove('errorMessage')
        }


        return isValid

    }

    function handleClear(e) {

        if (e) {
            e.preventDefault()
        }


        setCompany('')
        setEmail('')
        setLastName('')
        setMessage('')
        setName('')
    }

    return (
        <section className='contactsection' id='contact'>
            <div className='contactsection-info'>
                <h6>Entre em Contato!</h6>
                <p><AiOutlineMail size={30} /> lucasmontenegro475@gmail.com</p>
            </div>
            <form className='contactsection-form'>

                {loading > 0 && (
                    <div className='loading2'>
                        <img src='src/assets/RollingIcon.svg'></img>
                    </div>
                )}

                <h6>Mande uma mensagem!</h6>

                <div className='contactsection-form-maindiv'>

                    <div className='contactsection-form-firstdiv'>
                        <input type='text' placeholder='Nome' className='input-text' id='name'
                            value={name} onChange={(e) => setName(e.target.value)}>
                        </input>

                        <input type='text' placeholder='Sobrenome' className='input-text' id='lastname'
                            value={lastName} onChange={(e) => setLastName(e.target.value)}>
                        </input>
                    </div>

                    <div className='contactsection-form-seconddiv'>
                        <input type='email' placeholder='Email' className='input-text' id='email'
                            value={email} onChange={(e) => setEmail(e.target.value)} required>
                        </input>

                        <input type='text' placeholder='Empresa' className='input-text' id='company'
                            value={company} onChange={(e) => setCompany(e.target.value)}>
                        </input>

                        <input type='number' placeholder={`Quanto é ${numberVerification1} + ${numberVerification2} ?`} className='input-text' id='verification'
                            onChange={(e) => { setVerification2(Number(e.target.value)) }}>
                        </input>

                        <input type='hidden' className='input-text' id='company'
                            value={verification} onChange={(e) => setVerification(e.target.value)}>
                        </input>

                        <textarea className='input-text-message' placeholder='Assunto' id='message'
                            value={message} onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
                        <div className='messageLenght'>{message.length}/1000</div>
                    </div>

                    <div className='contactsection-form-thirddiv'>
                        <button type='submit' className='button-send' onClick={(e) => handleSubmit(e)}>Enviar</button>
                        <button type='submit' className='button-clear' onClick={(e) => handleClear(e)}>Apagar</button>
                    </div>

                </div>

            </form>
        </section>
    )
}