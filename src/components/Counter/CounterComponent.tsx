import React, {MouseEvent, useRef} from 'react';
import {Box, Paper} from '@mui/material';
import {ValueType} from '../CommonCounter/CommonCounterComponent';
import {NumComponent} from './old/NumComponent';
import {CommonButton} from '../common/CommonButton';

type CounterComponentPropsType = {
    value: ValueType
    setCurrentNum: (newNum: number) => void
    resetValue: () => void
    changeStatus?: () => void
}

export const CounterComponent: React.FC<CounterComponentPropsType> = ({
                                                                          value,
                                                                          setCurrentNum,
                                                                          resetValue,
                                                                          changeStatus
                                                                      }) => {

    let timerRef = useRef<ReturnType<typeof setTimeout>>();
    const countIsDone = value.current === value.max.setNumber;

    const incNum = () => {
        const newNum = value.current + 1;
        !countIsDone && setCurrentNum(newNum);
    }
    const resetNum = () => {
        setCurrentNum(value.min.setNumber);
    }
    const onMouseDownHandler = (e: MouseEvent<HTMLButtonElement>) => {
        timerRef.current = setTimeout(() => {
            resetValue();
        }, 2000);
    }
    const onMouseUpHandler = () => {
        clearTimeout(timerRef.current)
    }
    const changeStatusHandler = () => {
        changeStatus && changeStatus();
    }

    return (
        <Box sx={{}}>
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: '10px',
                    height: '100%',
                    boxSizing: 'border-box',
                    gap: '10px'
                }}
            >
                <NumComponent
                    value={value}
                    countIsDone={countIsDone}
                />
                <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'stretch', height: 'auto'}}>
                    <CommonButton
                        setIcon={'AddCircleIcon'}
                        title={'inc'}
                        onClick={incNum}
                        iconColor={'primary'}
                        iconSize={'large'}
                        disabled={countIsDone}
                    />
                    {!value.view ?
                        <CommonButton
                            setIcon={'CheckCircleIcon'}
                            title={'inc'}
                            onClick={changeStatusHandler}
                            iconColor={'primary'}
                            iconSize={'large'}
                        />
                        :
                        ''
                    }
                    <CommonButton
                        setIcon={'RestartAltIcon'}
                        title={'reset'}
                        onClick={resetNum}
                        iconColor={'secondary'}
                        iconSize={'large'}
                        disabled={!value.current}
                        onMouseDown={onMouseDownHandler}
                        onMouseUp={onMouseUpHandler}
                    />
                </Box>
            </Paper>
        </Box>
    );
};