import React from 'react';
import style from './NumComponent.module.css'

type NumComponentPropsType = {
    num: number
    countIsDone: boolean
}

export const NumComponent: React.FC<NumComponentPropsType> = ({num, countIsDone}) => {
    const myClassName = countIsDone ? style.isDone : style.std;
    return (
        <div className={`${style.numArea} ${myClassName}`}>
            {num}
        </div>
    )
}