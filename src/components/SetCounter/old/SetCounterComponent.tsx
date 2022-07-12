import React, {MouseEvent, useState} from 'react';
import {MyButton} from '../../common/myOldComponents/MyButton';
import {InputsComponent} from './InputsComponent';
import style from './SetCounterComponent.module.css'
import {MyInputComponent} from '../../common/myOldComponents/MyInputComponent';

type SetCounterComponentPropsType = {
    setNewMaxValue: (newMaxValue: number) => void
    setNewStartValue: (newStartValue: number) => void
    sendError: (error: boolean) => void
}

export const SetCounterComponent: React.FC<SetCounterComponentPropsType> = ({setNewMaxValue, setNewStartValue, sendError}) => {
    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);

    // const countIsDone = num === maxNum;

    const onClickHandler = () => {
        !error &&
        setNewMaxValue(maxValue);
        setNewStartValue(startValue);
    }
    
    const setNewStartValueHandler = (newStartValue: number) => {
        setStartValue(newStartValue);
    }
    const setNewMaxValueHandler = (newMaxValue: number) => {
      setMaxValue(newMaxValue);
    }
    const setErrorHandler = (newError: boolean) => {
      setError(newError);
    }

    return (
        <div className={style.main}>
            {/*<InputsComponent*/}
            {/*    maxValue={maxValue}*/}
            {/*    minValue={startValue}*/}
            {/*    setNewMinValue={setNewStartValueHandler}*/}
            {/*    setNewMaxValue={setNewMaxValueHandler}*/}
            {/*    setError={setErrorHandler}*/}
            {/*/>*/}
            {/*<div className={style.btnArea}>*/}
            {/*    <MyButton*/}
            {/*        onClick={onClickHandler}*/}
            {/*        children={'set'}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    )
}