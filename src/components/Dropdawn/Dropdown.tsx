import React, {FC, useState} from 'react'
import './Dropdown.scss'
import chev from './chevron.png'

interface Props {
    //defaultTitle: string
    items: Array<string>
};

const Dropdown: FC<Props> = ({items}) => {

    const [current,setCurrent] = useState(0)

    return (
        <div className='dropdown__main'>
            <div className='dropdown__title'>{items[current]} <img src={chev} alt=""/> </div>
            <ul className='dropdown__list'>
                {items.map( (el,index) => {
                    if (index !== current) {
                        return <li key={el} onClick={() => setCurrent(index)} className='dropdown__item'>{el}</li>
                    }
                })}
            </ul>
        </div>
    )
}

export default Dropdown