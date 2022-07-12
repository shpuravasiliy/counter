import React, {useState} from 'react';
import {Box} from '@mui/material';
import {SetCounterComponent} from '../SetCounter/SetCounterComponent';
import {CounterComponent} from '../Counter/CounterComponent';

type ValueType = {
    min: number
    max: number
    current: number
    error: boolean
}

const initialValue: ValueType = {
    min: 0,
    max: 1,
    current: 0,
    error: false,
}

export const CommonCounterComponent = () => {
    const [value, setValue] = useState<ValueType>(initialValue);

    const valueOnChangeHandler = (newValue: string, type?: 'min' | 'max') => {
        const numValue = Number(newValue);
        switch (type) {
            case 'min':
                return numValue >= value.max ? setValue({...value, error: true}) : setValue({...value, error: false, min: numValue});
            case 'max':
                return numValue <= value.min ? setValue({...value, error: true}) : setValue({...value, error: false, max: numValue});
            default:
                return
        }
    }

    return (
        <Box>
            <SetCounterComponent/>
            <CounterComponent/>
        </Box>
    );
};