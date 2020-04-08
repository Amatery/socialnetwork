import React from "react";
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Developer
                </div>
                <div className={s.dialog}>
                    Nastya
                </div>
                <div className={s.dialog}>
                    Alena
                </div>
                <div className={s.dialog}>
                    Sergey
                </div>
                <div className={s.dialog}>
                    Irina
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>sup brother?</div>
                <div className={s.message}>Wanna make some code?</div>
            </div>
        </div>

    )
}


export default Dialogs;