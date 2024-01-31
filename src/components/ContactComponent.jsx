import './ContactComponent.css'

import { AiOutlineMail } from "react-icons/ai";

export default function ContactComponent() {

    function handleClick(e) {
        e.preventDefault()
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
                        <input type='text' placeholder='Nome' className='input-text'></input>
                        <input type='text' placeholder='Sobrenome' className='input-text'></input>
                    </div>
                    <div className='contactsection-form-seconddiv'>
                        <input type='email' placeholder='Email' className='input-text'></input>
                        <input type='text' placeholder='Companhia' className='input-text'></input>
                        <input type='text' placeholder='Titulo' className='input-text'></input>
                        <textarea className='input-text-message' placeholder='Assunto'></textarea>
                    </div>
                    <div className='contactsection-form-thirddiv'>
                        <button type='submit' className='button-send' onClick={(e) => handleClick(e)}>Enviar</button>
                        <button type='submit' className='button-clear' onClick={(e) => handleClick(e)}>Apagar</button>
                    </div>

                </div>

            </form>
        </section>
    )
}