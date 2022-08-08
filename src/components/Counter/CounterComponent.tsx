import React, {MouseEvent, useCallback, useRef} from 'react';
import {Box, Paper} from '@mui/material';
import {ValueType} from '../CommonCounter/CommonCounterComponent';
import {NumComponent} from './old/NumComponent';
import {CommonButton} from '../common/CommonButton';
import {useDispatch, useSelector} from 'react-redux';
import {changeCounterStatusAC, counterStateType, resetValuesAC, setCurrentValueAC} from '../../store/counter-reducer';
import {rootReducerType} from '../../store/store';

export const CounterComponent = () => {

    const {min, max, current, view, counterStatus} = useSelector<rootReducerType, counterStateType>(state => state.state)
    const dispatch = useDispatch();

    const setCurrentValue = (newValue: string) => dispatch(setCurrentValueAC(newValue))
    const resetValues = () => dispatch(resetValuesAC())
    const changeCounterStatus = useCallback(() => {
        dispatch(changeCounterStatusAC())
    }, [dispatch]);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const countIsDone = (current === max.setNumber);

    const incNum = useCallback(() => {
        const newNum = current + 1;
        !countIsDone && setCurrentValue(newNum.toString())
    }, [setCurrentValue, countIsDone, current]);
    const resetNum = useCallback(() => {
        setCurrentValue(min.setNumber.toString());
    }, [setCurrentValue, min.setNumber]);
    const onMouseDownHandler = useCallback(() => {
        timerRef.current = setTimeout(() => {
            resetValues();
        }, 2000);
    }, [timerRef]);
    const onMouseUpHandler = useCallback(() => {
        clearTimeout(timerRef.current)
    }, [timerRef]);

    return (
        <Box sx={{}}>
            <Paper sx={{display: 'flex', flexDirection: 'column', p: '10px', height: '100%', boxSizing: 'border-box', gap: '10px'}}>
                <NumComponent countIsDone={countIsDone}/>
                <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'stretch', height: 'auto'}}>
                    <CommonButton
                        setIcon={'AddCircleIcon'}
                        title={'inc'}
                        onClick={incNum}
                        iconColor={'primary'}
                        iconSize={'large'}
                        disabled={countIsDone}
                    />
                    {!view && <CommonButton
                            setIcon={'CheckCircleIcon'}
                            title={counterStatus ? 'set' : 'change status'}
                            onClick={changeCounterStatus}
                            iconColor={'primary'}
                            iconSize={'large'}
                        />
                    }
                    <CommonButton
                        setIcon={'RestartAltIcon'}
                        title={'reset'}
                        onClick={resetNum}
                        iconColor={'secondary'}
                        iconSize={'large'}
                        disabled={!current}
                        onMouseDown={onMouseDownHandler}
                        onMouseUp={onMouseUpHandler}
                    />
                </Box>
            </Paper>
        </Box>
    );
};