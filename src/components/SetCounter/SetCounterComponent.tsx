import React, {FC, memo} from 'react';
import {Box, Paper} from '@mui/material';
import {InputsComponent} from './old/InputsComponent';
import {CommonButton} from '../common/CommonButton';
import {useSelector} from 'react-redux';
import {counterStateType} from '../../store/counter-reducer';
import {rootReducerType} from '../../store/store';

type SetCounterComponentPropsType = {
    onClickButton: () => void
}

export const SetCounterComponent: FC<SetCounterComponentPropsType> = ({onClickButton}) => {

    const {min, max} = useSelector<rootReducerType, counterStateType>(state => state.state);

    const commonError = max.error || min.error
    console.log('SetCounterComponent')
    return (
        <Box>
            <Paper sx={{p: '5%'}}>
                <Box>
                    <InputsComponent/>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '5%'}}>
                    <CommonButton
                        setIcon={'CheckCircleIcon'}
                        title={'set'}
                        onClick={() => onClickButton()}
                        iconColor={'primary'}
                        iconSize={'large'}
                        disabled={commonError}
                    />
                </Box>
            </Paper>
        </Box>
    );
};