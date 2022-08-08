import React, {memo, useCallback} from 'react';
import {CommonInput} from '../../common/CommonInput';
import {Box} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {changeMaxValueAC, changeMinValueAC, counterStateType, resetMaxErrorAC, resetMinErrorAC} from '../../../store/counter-reducer';
import {rootReducerType} from '../../../store/store';

export const InputsComponent = memo(() => {

    const {min, max} = useSelector<rootReducerType, counterStateType>(state => state.state);

    const dispatch = useDispatch();

    const changeMinValue = useCallback((newValue: string) => dispatch(changeMinValueAC(newValue)), [dispatch]);
    const changeMaxValue = useCallback((newValue: string) => dispatch(changeMaxValueAC(newValue)), [dispatch]);
    const resetMinError = useCallback(() => dispatch(resetMinErrorAC()), [dispatch]);
    const resetMaxError = useCallback(() => dispatch(resetMaxErrorAC()), [dispatch]);

    return (
        <Box
            sx={{
                p: '10px',
                border: '1px solid black',
                height: 'min-content',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <CommonInput
                value={max.number.toString()}
                onChange={changeMaxValue}
                error={max.error}
                label={max.error ? 'wrong max value' : 'max value'}
                variant={'outlined'}
                size={'small'}
                type={'number'}
                margin={'none'}
                sx={{m: '5px', width: '150px'}}
                onBlur={() => max.error && resetMaxError()}
            />
            <CommonInput
                value={min.number.toString()}
                onChange={changeMinValue}
                error={min.error}
                label={min.error ? 'wrong min value' : 'min value'}
                variant={'outlined'}
                size={'small'}
                type={'number'}
                margin={'none'}
                sx={{m: '5px', width: '150px'}}
                onBlur={() => min.error && resetMinError()}
            />
        </Box>
    )
})