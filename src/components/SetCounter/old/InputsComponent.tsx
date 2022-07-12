import React, {ChangeEvent, useState} from 'react';
import style from './InputsComponent.module.css'
import {CommonInput} from '../../common/CommonInput';

type InputsComponentPropsType = {
    maxValue: string
    minValue: string
    error: boolean
    setNewMaxValue: (newMaxValue: string) => void
    setNewMinValue: (newMinValue: string) => void
    setError: (error: boolean) => void
}

export const InputsComponent: React.FC<InputsComponentPropsType> = ({minValue, maxValue, setNewMaxValue, setNewMinValue, setError, error}) => {

    const maxValueOnChangeHandler = (value: string) => {
        setNewMaxValue(value)
    }
    const minValueOnChangeHandler = (value: string) => {
        setNewMinValue(value)
    }

    return (
        // <div className={`${style.numArea} ${myClassName}`}>
        <div className={style.inputArea}>
            <div className={style.inputRow}>
                <span>max value:</span>
                {/*<MyInputComponent type={'number'} value={maxValue} onChange={maxValueOnChangeHandler}/>*/}
                <CommonInput
                    value={maxValue.toString()}
                    onChange={maxValueOnChangeHandler}
                    error={error}
                    label={'max value'}
                    variant={'outlined'}
                    size={'small'}
                    helperText={'type max value'}
                    type={'number'}
                />
            </div>
            <div className={style.inputRow}>
                <span>start value:</span>
                {/*<MyInputComponent type={'number'} value={startValue} onChange={startValueOnChangeHandler}/>*/}
                <CommonInput
                    value={minValue.toString()}
                    onChange={minValueOnChangeHandler}
                    error={error}
                    label={'min value'}
                    variant={'outlined'}
                    size={'small'}
                    helperText={'type min value'}
                    type={'number'}
                />
            </div>
        </div>
    )
}