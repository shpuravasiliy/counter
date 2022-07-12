import React, {ChangeEvent, KeyboardEvent} from 'react';
import {TextField} from '@mui/material';

type CommonInputPropsType = {
    value: string
    onChange: (value: string) => void
    onKeyDown?: () => void
    error: boolean
    label: string
    disabled?: boolean
    variant: 'filled' | 'outlined' | 'standard'
    size: 'medium' | 'small' | undefined
    helperText: string
    type: string
}

export const CommonInput: React.FC<CommonInputPropsType> = ({onChange, label, error, onKeyDown, disabled, value, variant, size, helperText, type}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget && onChange(e.currentTarget.value);
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        (onKeyDown && e && e.key === 'Enter') && onKeyDown();
    }

    return (
        <>
            <TextField
                value={value}
                variant={variant}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
                label={label}
                error={error}
                disabled={disabled}
                size={size}
                helperText={helperText}
                type={type}
            />
        </>
    );
};