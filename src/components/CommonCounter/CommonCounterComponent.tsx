import React, {useState} from 'react';
import {Box} from '@mui/material';
import {SetCounterComponent} from '../SetCounter/SetCounterComponent';
import {CounterComponent} from '../Counter/CounterComponent';

export type ValueType = {
    min: { number: number, setNumber: number, error: boolean }
    max: { number: number, setNumber: number, error: boolean }
    current: number
}

const initialValue: ValueType = {
    min: { number: 0, setNumber: 0, error: false },
    max: { number: 1, setNumber: 1, error: false },
    current: 0,
}

export const CommonCounterComponent = () => {
    const [value, setValue] = useState<ValueType>(initialValue);

    const valueOnChangeHandler = (newValue: string, type?: 'min' | 'max') => {
        const numValue = Number(newValue);
        switch (type) {
            case 'min':
                return numValue >= value.max.number ? setValue({...value, min: {...value.min, error: true}}) : setValue({...value, min: {...value.min, error: false, number: numValue}});
            case 'max':
                return numValue <= value.min.number ? setValue({...value, max: {...value.max, error: true}}) : setValue({...value, max: {...value.max, error: false, number: numValue}});
            default:
                return;
        }
    }
const valueSetHandler = () => {
        setValue( {...value, max: {...value.max, setNumber: value.max.number}, min: {...value.min, setNumber: value.min.number}})
}

    return (
        <Box display={'flex'} justifyContent={'space-evenly'} width={'100%'}>
            <SetCounterComponent
                value={value}
                setNewMaxValue={(value) => valueOnChangeHandler(value, 'max')}
                setNewMinValue={(value) => valueOnChangeHandler(value, 'min')}
                onClickButton={valueSetHandler}
            />
            <CounterComponent/>
        </Box>
    );
};