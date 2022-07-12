import React, {MouseEvent, useState} from 'react';
import {NumComponent} from './NumComponent';
import style from './CountComponent.module.css'
import {MyInputComponent} from '../../common/myOldComponents/MyInputComponent';
import {CommonButton} from '../../common/CommonButton';

type CountComponentPropsType = {}

export const CountComponent = () => {
    // const [startNum, setStartNum] = useState<number>(0);
    const [maxNum, setMaxNum] = useState<number>(0);
    const [num, setNum] = useState<number>(0);
    const [inputValue, setInputValue] = useState<number>(0);
    const [inputError, setInputError] = useState<boolean>(false);
    const [showInput, setShowInput] = useState<boolean>(false);

    const countIsDone = num === maxNum;

    const onChangeMaxHandler = (num: string) => {
        const newMaxNum = Number(num);
        if (isNaN(newMaxNum)) setInputError(true);
        else {
            setInputError(false);
            setInputValue(newMaxNum);
        }
    }
    const onEnterHandler = () => {
        setMaxNum(inputValue);
        setInputValue(0);
        setShowInput(false);
    }

    const incNum = () => {
        const newNum = num + 1;
        setNum(newNum);
    }
    const resetNum = () => {
        setNum(0);
    }

    const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        // if (e.ctrlKey) setShowInput(true);
        if (e.ctrlKey) setShowInput(true);
    }

    return (
        <div
            className={style.main}
            onClick={onClickHandler}
        >
            <NumComponent
                num={num}
                countIsDone={countIsDone}
            />
            {showInput && <MyInputComponent
                value={inputValue}
                onChangeText={onChangeMaxHandler}
                onEnter={onEnterHandler}
                error={inputError}
            />}
            {/*<MyInputComponent*/}
            {/*    value={inputValue}*/}
            {/*    onChangeText={onChangeStartHandler}*/}
            {/*    onEnter={onEnterHandler}*/}
            {/*    error={inputError}*/}
            {/*/>*/}
            <div className={style.btnArea}>
                {/*<MyButton*/}
                {/*    onClick={incNum}*/}
                {/*    disabled={countIsDone}*/}
                {/*>inc</MyButton>*/}
                <CommonButton
                    setIcon={'AddCircleIcon'}
                    title={'inc'}
                    onClick={incNum}
                    iconColor={'primary'}
                    iconSize={'medium'}
                />
                <CommonButton
                    setIcon={'RestartAltIcon'}
                    title={'reset'}
                    onClick={resetNum}
                    iconColor={'secondary'}
                    iconSize={'large'}
                    disabled={!num}
                />
                {/*<MyButton*/}
                {/*    onClick={resetNum}*/}
                {/*    disabled={!num}*/}
                {/*>reset</MyButton>*/}
            </div>
        </div>
    )
}