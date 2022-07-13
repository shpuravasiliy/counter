import React from 'react';
import {CommonInput} from '../../common/CommonInput';
import {Box} from '@mui/material';
import {ValueType} from '../../CommonCounter/CommonCounterComponent';

type InputsComponentPropsType = {
    value: ValueType
    setNewMaxValue: (newMaxValue: string) => void
    setNewMinValue: (newMinValue: string) => void
    setError?: ( type: 'min' | 'max') => void
}

export const InputsComponent: React.FC<InputsComponentPropsType> = ({value, setNewMaxValue, setNewMinValue, setError}) => {

    const maxValueOnChangeHandler = (value: string) => {
        setNewMaxValue(value)
    }
    const minValueOnChangeHandler = (value: string) => {
        setNewMinValue(value)
    }

    return (
        <Box sx={{p: '10px', border: '1px solid black', height: 'min-content', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <CommonInput
                value={value.max.number.toString()}
                onChange={maxValueOnChangeHandler}
                error={value.max.error}
                label={value.max.error ? 'wrong max value' : 'max value'}
                variant={'outlined'}
                size={'small'}
                type={'number'}
                margin={'none'}
                sx={{m: '5px', width: '150px'}}
                onBlur={() => value.max.error && setError && setError('max')}
            />
            <CommonInput
                value={value.min.number.toString()}
                onChange={minValueOnChangeHandler}
                error={value.min.error}
                label={value.min.error ? 'wrong min value' : 'min value'}
                variant={'outlined'}
                size={'small'}
                type={'number'}
                margin={'none'}
                sx={{m: '5px', width: '150px'}}
                onBlur={() => value.min.error && setError && setError('min')}
            />
        </Box>
    )
}