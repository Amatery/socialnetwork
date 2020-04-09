import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};


const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
};


const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Developer'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Luna'},
        {id: 4, name: 'Alena'},
        {id: 5, name: 'Sergey'},
        {id: 6, name: 'Irina'}
    ];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'sup brother?'},
        {id: 3, message: 'Wanna write some code?'},
        {id: 4, message: 'Yo'},
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
};


export default Dialogs;






