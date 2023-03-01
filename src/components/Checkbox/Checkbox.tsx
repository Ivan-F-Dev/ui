import React, {FC} from 'react'
import s from './Checkbox.module.scss'

interface Props {

};

const Checkbox: FC<Props> = (props) => {
    return (
        <label className={s.checkbox__label}>
            <input className={s.checkbox__input} type="checkbox"/>
            <div className={s.checkbox__check}></div>
        </label>
    )
}

export default Checkbox