import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from './MyButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const MyButton: React.FC<DefaultButtonPropsType> = (props) => {
    return (
        <>
         <button className={style.std} {...props}/>
        </>
    );
};

