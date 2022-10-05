import React from "react";
import styles from './WorkCard.module.scss'

const WorkCard = ({ name, stack, link }) => {
    return (
        <div>
            <div>{name}</div>
            <div>{stack}</div>
            <a href={link}>Посмотреть работу</a>
        </div>
    )
}

export default WorkCard;