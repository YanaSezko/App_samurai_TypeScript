import React from "react";
import s from './Dialogs.module.css'

const Dialogs: React.FC<any> = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                <li className={s.dialog +" "+ s.active}>Yana</li>
                <li className={s.dialog}>Olya</li>
                <li className={s.dialog}>Vova</li>
                <li className={s.dialog}>Alex</li>
                <li className={s.dialog}>Zlata</li>
            </ul>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>


        </div>
    )
}
export default Dialogs;
