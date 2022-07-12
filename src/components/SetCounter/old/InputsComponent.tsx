import React from 'react';
import {CommonInput} from '../../common/CommonInput';
import {Box} from '@mui/material';
import {ValueType} from '../../CommonCounter/CommonCounterComponent';

type InputsComponentPropsType = {
    value: ValueType
    setNewMaxValue: (newMaxValue: string) => void
    setNewMinValue: (newMinValue: string) => void
    setError?: (error: boolean) => void
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
                label={'max value'}
                variant={'outlined'}
                size={'small'}
                // helperText={error ? 'incorrect input' : ''}
                type={'number'}
                margin={'none'}
                sx={{m: '5px', width: '150px'}}
            />
            <CommonInput
                value={value.min.number.toString()}
                onChange={minValueOnChangeHandler}
                error={value.min.error}
                label={'min value'}
                variant={'outlined'}
                size={'small'}
                // helperText={error ? 'incorrect input' : ''}
                type={'number'}
                margin={'none'}
                sx={{m: '5px', width: '150px'}}
            />
        </Box>
    )
}