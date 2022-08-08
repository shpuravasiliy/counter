import React, {memo} from 'react';
import {Box} from '@mui/material';
import {useSelector} from 'react-redux';
import {counterStateType} from '../../../store/counter-reducer';
import {rootReducerType} from '../../../store/store';

export const NumComponent = memo((props: {countIsDone: boolean}) => {

    const {min, max, current} = useSelector<rootReducerType, counterStateType>(state => state.state)

    const commonError = max.error || min.error;
    const title = max.error ? 'wrong max value' : min.error ? 'wrong min value' : current;

    return (
        <Box
            color={props.countIsDone || commonError ? 'red' : 'inherit'}
            sx={{
                width: '150px',
                height: '100px',
                border: '1px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: max.error || min.error ? '24px' : '64px',
                textAlign: 'center'
            }}
        >
            {title}
        </Box>
    )
})