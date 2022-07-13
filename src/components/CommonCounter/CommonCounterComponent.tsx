import React, {useEffect, useState} from 'react';
import {Box} from '@mui/material';
import {SetCounterComponent} from '../SetCounter/SetCounterComponent';
import {CounterComponent} from '../Counter/CounterComponent';
import {CommonButton} from '../common/CommonButton';

export type ValueType = {
    min: { number: number, setNumber: number, error: boolean }
    max: { number: number, setNumber: number, error: boolean }
    current: number
    view: boolean
    counterStatus: boolean
}

const initialValue: ValueType = {
    min: {number: 0, setNumber: 0, error: false},
    max: {number: 1, setNumber: 1, error: false},
    current: 0,
    view: false,
    counterStatus: false
}

export const CommonCounterComponent = () => {

    const [value, setValue] = useState<ValueType>(initialValue);

    useEffect(() => {
        const storeValue = localStorage.getItem('store');
        storeValue && setValue(JSON.parse(storeValue));
    }, [])
    useEffect(() => {
        localStorage.setItem('store', JSON.stringify(value))
    }, [value])

    const valueOnChangeHandler = (newValue: string, type?: 'min' | 'max') => {
        const numValue = Number(newValue);
        switch (type) {
            case 'min':
                return numValue >= value.max.number ? setValue({
                    ...value,
                    min: {...value.min, error: true}
                }) : setValue({...value, min: {...value.min, error: false, number: numValue}});
            case 'max':
                return numValue <= value.min.number ? setValue({
                    ...value,
                    max: {...value.max, error: true}
                }) : setValue({...value, max: {...value.max, error: false, number: numValue}});
            default:
                return;
        }
    }
    const valueSetHandler = () => {
        setValue({
            ...value,
            max: {...value.max, setNumber: value.max.number},
            min: {...value.min, setNumber: value.min.number},
            current: value.current < value.min.number ? value.min.number : value.current > value.max.number ? value.max.number : value.current
        })
    }
    const currentValueSetHandler = (newValue: number) => {
        setValue({
            ...value,
            current: newValue
        })
    }
    const setErrorHandler = (type: 'min' | 'max') => {
        switch (type) {
            case 'max':
                return setValue({...value, max: {...value.max, error: false}});
            case 'min':
                return setValue({...value, min: {...value.min, error: false}});
            default:
                return;
        }
    }
    const resetValueHandler = () => {
        setValue(initialValue);
    }
    const onClickChangeTypeHandler = () => {
        setValue({...value, view: !value.view});
    }
    const changeStatusHandler = () => {
        setValue({...value, counterStatus: !value.counterStatus});
    }
    const valueSetHandlerAnotherType = () => {
        setValue({
            ...value,
            max: {...value.max, setNumber: value.max.number},
            min: {...value.min, setNumber: value.min.number},
            current: value.current < value.min.number ? value.min.number : value.current > value.max.number ? value.max.number : value.current,
            counterStatus: !value.counterStatus
        })
    }

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            justifyItems={'center'}
        >
            <Box
                margin={'auto'}
            >
                <CommonButton
                    setIcon={'RestartAltIcon'}
                    title={'Change type of counter'}
                    onClick={onClickChangeTypeHandler}
                    iconColor={'error'}
                    iconSize={'large'}
                />
            </Box>
            {value.view ?
                <Box
                    display={'flex'}
                    justifyContent={'space-evenly'}
                    width={'100%'}
                >
                    <SetCounterComponent
                        value={value}
                        setNewMaxValue={(value) => valueOnChangeHandler(value, 'max')}
                        setNewMinValue={(value) => valueOnChangeHandler(value, 'min')}
                        onClickButton={valueSetHandler}
                        setError={setErrorHandler}
                    />
                    <CounterComponent
                        value={value}
                        setCurrentNum={currentValueSetHandler}
                        resetValue={resetValueHandler}
                    />
                </Box>
                :
                <Box
                    display={'flex'}
                    justifyContent={'space-evenly'}
                    width={'100%'}
                >
                    {value.counterStatus ?
                        <SetCounterComponent
                            value={value}
                            setNewMaxValue={(value) => valueOnChangeHandler(value, 'max')}
                            setNewMinValue={(value) => valueOnChangeHandler(value, 'min')}
                            onClickButton={valueSetHandlerAnotherType}
                            setError={setErrorHandler}
                        />
                        :
                        <CounterComponent
                            value={value}
                            setCurrentNum={currentValueSetHandler}
                            resetValue={resetValueHandler}
                            changeStatus={changeStatusHandler}
                        />
                    }
                </Box>
            }
        </Box>
    );
};