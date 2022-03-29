import React, {useEffect, useState} from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'
import './styleFormModal.css'
import {ProfileThunk} from "../../redux/thunk/ThunkPosts";
import {useDispatch} from "react-redux";

const MODAL_STYLES = {
    position: 'fixed',
    width: "35%",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,88,189, .6)',
    zIndex: 1000
}

const BUTTON_CLOUSE_STYLES = {
    position: 'fixed',
    top: 0,
    right: 0,
    border: 'none',
    zIndex: 1001,
    backgroundColor: 'rgba(0, 0, 0, .0)',

}

// это стиль для отрисовки уже на самой странице, в этом файле не используется, поэтому мы экспортим её
export const BUTTON_WRAPPER_STYLES = {
    position: "relative",
    zIndex: 1,
};


function EditUserModal({ user, open, children, onClose }) {

    const [inputs, setInputs] = useState()
    const dispatch = useDispatch();

    useEffect(() => {
        setInputs({ name: user.username, surname: user.surname, phone: user.phone, city: user.city, })
    }, [user])


    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let resp = await fetch('/users', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(inputs)
        })
        if (resp.status === 200)
            await dispatch(ProfileThunk())
        await onClose()
    }

    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div className="main-div main-w3layouts wrapper" style={OVERLAY_STYLES} />
            <div className="two-div main-agileinfo" style={MODAL_STYLES}>

                <div className="agileits-top formdesign">

                    {children}
                    <form className="" onSubmit={handleSubmit}>
                        <button onClick={onClose} style={BUTTON_CLOUSE_STYLES} ><i className="bi bi-x"/></button>
                        <input className="text inputformdecor" type="text" name="name" placeholder="Имя" required="" value={inputs?.name} onChange={handleChange} />
                        <input className="text email inputformdecor" type="text" name="surname" placeholder="Фамилия" required="" value={inputs?.surname} onChange={handleChange} />
                        <input className="text email inputformdecor" type="text" name="phone" placeholder="Телефон" required="" value={inputs?.phone} onChange={handleChange} />
                        <input className="text email inputformdecor" type="text" name="city" placeholder="Город" required="" value={inputs?.city} onChange={handleChange} />
                        <button onClick={handleSubmit} className="btnlogin"> Сохранить изменения</button>
                    </form>
                    <p>Вы передумали? <Link onClick={onClose} to="/profile"> Выйти</Link></p>

                </div>
            </div>
        </>,
        document.getElementById('portal')

    )
}

export default EditUserModal
