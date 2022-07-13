import React from 'react';
import {Box, Paper} from '@mui/material';
import {InputsComponent} from './old/InputsComponent';
import {CommonButton} from '../common/CommonButton';
import {ValueType} from '../CommonCounter/CommonCounterComponent';

type SetCounterComponentPropsType = {
    value: ValueType
    setNewMaxValue: (newMaxValue: string) => void
    setNewMinValue: (newMinValue: string) => void
    onClickButton: () => void
    setError?: ( type: 'min' | 'max') => void
}

export const SetCounterComponent: React.FC<SetCounterComponentPropsType> = ({value, setNewMaxValue, setNewMinValue, onClickButton, setError}) => {

    const commonError = value.max.error || value.min.error

    const onClickHandler = () => {
        onClickButton();
    }

    return (
        <Box>
            <Paper sx={{p: '5%'}}>
                <Box>
                    <InputsComponent
                        value={value}
                        setNewMaxValue={setNewMaxValue}
                        setNewMinValue={setNewMinValue}
                        setError={setError}
                    />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '5%'}}>
                    <CommonButton
                        setIcon={'CheckCircleIcon'}
                        title={'set'}
                        onClick={onClickHandler}
                        iconColor={'primary'}
                        iconSize={'large'}
                        disabled={commonError}
                    />
                </Box>
            </Paper>
        </Box>
    );
};