import { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import './ContactComponent.css'

export default function ContactComponent() {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        if (name === '' ||
            lastName === '' ||
            email === '' ||
            company === '' ||
            message === '') {

            console.log('Campos em branco')
            return
        }

        if (name.length <= 3) {
            console.log('Campo nome deve ter mais de 3 caracteres')
            return
        }
        if (lastName.length <= 3) {
            console.log('Campo sobrenome deve ter mais de 3 caracteres')
            return
        }
        if (email.length <= 5) {
            console.log('Campo email deve ter mais de 3 caracteres')
            return
        }
        if (company.length <= 3) {
            console.log('Campo companhia deve ter mais de 3 caracteres')
            return
        }
        if (message.length <= 10) {
            console.log('Campo mensagem deve ter mais de 10 caracteres')
            return
        }

        const templateParams = {
            name,
            lastName,
            email,
            company,
            message
        }

        alert(templateParams)
    }

    function handleClear(e) {
        e.preventDefault()

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

                <h6>Mande uma mensagem!</h6>

                <div className='contactsection-form-maindiv'>

                    <div className='contactsection-form-firstdiv'>
                        <input type='text' placeholder='Nome' className='input-text'
                            value={name} onChange={(e) => setName(e.target.value)}>
                        </input>

                        <input type='text' placeholder='Sobrenome' className='input-text'
                            value={lastName} onChange={(e) => setLastName(e.target.value)}>
                        </input>
                    </div>

                    <div className='contactsection-form-seconddiv'>
                        <input type='email' placeholder='Email' className='input-text'
                            value={email} onChange={(e) => setEmail(e.target.value)}>
                        </input>

                        <input type='text' placeholder='Companhia' className='input-text'
                            value={company} onChange={(e) => setCompany(e.target.value)}>
                        </input>

                        <textarea className='input-text-message' placeholder='Assunto'
                            value={message} onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
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