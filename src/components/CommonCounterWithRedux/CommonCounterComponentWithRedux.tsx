import React, {memo, useCallback} from 'react';
import {Box} from '@mui/material';
import {CounterComponent} from '../Counter/CounterComponent';
import {CommonButton} from '../common/CommonButton';
import {useDispatch, useSelector} from 'react-redux';
import {altSetAllValuesAC, changeViewAC, counterStateType, setAllValuesAC} from '../../store/counter-reducer';
import {SetCounterComponent} from '../SetCounter/SetCounterComponent';
import {rootReducerType} from '../../store/store';

export const CommonCounterComponentWithRedux = memo(() => {

    const {view, counterStatus} = useSelector<rootReducerType, counterStateType>(state => state.state);

    const dispatch = useDispatch();

    const setAllValues = useCallback(() => dispatch(setAllValuesAC()), [dispatch]);
    const altSetAllValues = useCallback(() => dispatch(altSetAllValuesAC()), [dispatch]);
    const changeView = useCallback(() => dispatch(changeViewAC()), [dispatch]);

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            justifyItems={'center'}
        >
            <Box margin={'auto'}>
                <CommonButton
                    setIcon={'RestartAltIcon'}
                    title={'Change type of counter'}
                    onClick={changeView}
                    iconColor={'error'}
                    iconSize={'large'}
                />
            </Box>
            <Box
                display={'flex'}
                justifyContent={'space-evenly'}
                width={'100%'}
            >
                {view ?
                    <>
                        <SetCounterComponent onClickButton={setAllValues}/>
                        <CounterComponent/>
                    </>
                    :
                counterStatus ? <SetCounterComponent onClickButton={altSetAllValues}/> : <CounterComponent/>
                }
            </Box>
        </Box>
    );
});