import React from 'react';
import {Box} from '@mui/material';
import {ValueType} from '../../CommonCounter/CommonCounterComponent';

type NumComponentPropsType = {
    value: ValueType
    countIsDone: boolean
}

export const NumComponent: React.FC<NumComponentPropsType> = ({value, countIsDone}) => {
    const commonError = value.max.error || value.min.error;
    const title = value.max.error ? 'wrong max value' : value.min.error ? 'wrong min value' : value.current;
    return (
        <Box
            color={countIsDone || commonError ? 'red' : 'inherit'}
            sx={{
                width: '150px',
                height: '100px',
                border: '1px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: value.max.error || value.min.error ? '24px' : '64px',
                textAlign: 'center'
            }}
        >
            {title}
        </Box>
    )
}