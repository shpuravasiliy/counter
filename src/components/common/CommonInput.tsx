import React, {ChangeEvent, KeyboardEvent, memo} from 'react';
import {SxProps, TextField, Theme} from '@mui/material';

type CommonInputPropsType = {
    value: string
    onChange: (value: string) => void
    onKeyDown?: () => void
    onBlur?: () => void
    error: boolean
    label: string
    disabled?: boolean
    variant: 'filled' | 'outlined' | 'standard'
    size: 'medium' | 'small' | undefined
    helperText?: string
    type: string
    margin: 'dense' | 'none' | 'normal'
    sx?: SxProps<Theme> | undefined

}

export const CommonInput: React.FC<CommonInputPropsType> = memo(({onChange, label, error, onKeyDown, disabled, value, variant, size, helperText, type, sx, margin, onBlur}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget && onChange(e.currentTarget.value);
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        (onKeyDown && e && e.key === 'Enter') && onKeyDown();
    }
    const onBlurHandler = () => {
        onBlur && onBlur();
    }

    return (
        <>
            <TextField
                value={value}
                variant={variant}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
                onBlur={onBlurHandler}
                label={label}
                error={error}
                disabled={disabled}
                size={size}
                helperText={helperText}
                type={type}
                margin={margin}
                sx={sx}
            />
        </>
    );
});