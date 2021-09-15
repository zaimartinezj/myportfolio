import React, { useRef, useState } from 'react'
import { useForm } from '../hooks/useForm'
import emailjs, {init} from 'emailjs-com';


export const Contact = () => {
    init(process.env.REACT_APP_USER_ID_EMAILJS);
    const [formValues, handleInputChange, reset] = useForm({name: '', email: '', message: ''});
    const {name, email, message} = formValues;

    const initialValidState = {emailV:true, nameV: true, messageV:true, sent:false};
    const [formValid, setFormValid] = useState(initialValidState);
    const refItemError = useRef('')

    const handleSendEmail = (e) => {
        e.preventDefault();
        setFormValid(initialValidState)

        if(!name){
            setFormValid((state)=>({...state, nameV: false}))
            refItemError.current="Nombre"

            return;
        }else if(!email){
            setFormValid((state)=>({...state, emailV: false}))
            refItemError.current="Email"

            return;
        }else if (!message){
            setFormValid((state)=>({...state, messageV: false}))
            refItemError.current="Mensaje"

            return;
        }

        emailjs.send("service_dq23p9a", process.env.REACT_APP_TEMPLATE_ID_EMAILJS, formValues, process.env.REACT_APP_USER_ID_EMAILJS)
        .then()
        .catch((err)=>console.log(err));

        reset();
        setFormValid({...initialValidState, sent:true});
        setTimeout(() => {
            setFormValid(initialValidState)
        }, 2000);
    }
    return (
        <div id="contact">
            <p className="title">Contáctame</p>
            <div className={formValid.sent ? 'modal-formSent' : 'hidden'}><p>Muchas gracias por tu mensaje!</p></div>
            <div className={ formValid.nameV && formValid.emailV && formValid.messageV ? "hidden modal-error" : "modal-error"}><p>{`El campo ${refItemError.current} es requerido`}</p></div>
                <form onSubmit={handleSendEmail}>
                    <input className={formValid.nameV ? '' : 'errorInput'} onChange={handleInputChange} value={name} name="name" type="text" placeholder="Inserte su nombre"/>   
                    <input className={formValid.emailV ? '' : 'errorInput'} onChange={handleInputChange} value={email} name="email" type="email" placeholder="Inserte su email"/>
                    <textarea className={formValid.messageV ? '' : 'errorInput'} onChange={handleInputChange} value={message} name="message" placeholder="Inserte su mensaje"/>
                    <input className="contact-submit" type="submit"/>
                </form>
            
        </div>
    )
}
