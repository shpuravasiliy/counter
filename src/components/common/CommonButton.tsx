import React, {MouseEvent} from 'react';
import {IconButton, Tooltip} from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

type IconType = 'AddCircleIcon' | 'RemoveCircleIcon' | 'CheckCircleIcon' | 'RestartAltIcon'

type CommonButtonPropsType = {
    setIcon: IconType
    title: string
    onClick: () => void
    disabled?: boolean
    iconColor: 'inherit'
        | 'action'
        | 'disabled'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
        | undefined
    iconSize: 'inherit'
        | 'large'
        | 'medium'
        | 'small'
        | undefined
    onMouseDown?: (e: MouseEvent<HTMLButtonElement>) => void
    onMouseUp?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const CommonButton: React.FC<CommonButtonPropsType> = ({
                                                                  setIcon,
                                                                  title,
                                                                  onClick,
                                                                  iconColor,
                                                                  iconSize,
                                                                  disabled,
                                                                  onMouseDown,
                                                                  onMouseUp
                                                              }) => {
    const iconType = (setIcon: IconType) => {
        switch (setIcon) {
            case 'AddCircleIcon':
                return <AddCircleIcon
                    color={disabled ? 'inherit' : iconColor}
                    fontSize={iconSize}
                />
            case 'CheckCircleIcon':
                return <CheckCircleIcon
                    color={disabled ? 'inherit' : iconColor}
                    fontSize={iconSize}
                />
            case 'RemoveCircleIcon':
                return <RemoveCircleIcon
                    color={disabled ? 'inherit' : iconColor}
                    fontSize={iconSize}
                />
            case 'RestartAltIcon':
                return <RestartAltIcon
                    color={disabled ? 'inherit' : iconColor}
                    fontSize={iconSize}
                />
            default:
                return
        }
    }

    return (
        <Tooltip title={title}>
            <span>
                <IconButton
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onClick={onClick}
                disabled={disabled}
                color={'success'}
            >
                {iconType(setIcon)}
            </IconButton>
            </span>
        </Tooltip>
    )
}