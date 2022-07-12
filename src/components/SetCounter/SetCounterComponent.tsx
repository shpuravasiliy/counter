import React from 'react';
import {Box, Paper} from '@mui/material';
import {InputsComponent} from './old/InputsComponent';
import {CommonButton} from '../common/CommonButton';

type SetCounterComponentPropsType = {

}

export const SetCounterComponent: React.FC<SetCounterComponentPropsType> = ({}) => {

const onClickHandler = () => {

}

    return (
        <Box>
            <Paper>
                <Box>
                    <InputsComponent
                        minValue={}
                        maxValue={}
                        setNewMaxValue={}
                        setNewMinValue={}
                        setError={}
                    />
                </Box>
                <Box>
                    <CommonButton
                        setIcon={'CheckCircleIcon'}
                        title={'set'}
                        onClick={onClickHandler}
                        iconColor={'inherit'}
                        iconSize={'inherit'}
                    />
                </Box>
            </Paper>
        </Box>
    );
};