import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react';
import style from './MyInputComponent.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type MyInputComponentPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: boolean
}

export const MyInputComponent: React.FC<MyInputComponentPropsType> = ({
                                                                          onChange,
                                                                          onChangeText,
                                                                          onKeyDown,
                                                                          onEnter,
                                                                          error,
                                                                          className,
                                                                          ...restProps
                                                                      }) => {

    const onChangeCallBack = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeText && onChangeText(e.currentTarget.value);
        onChange && onChange(e);
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        onEnter && e.key === 'Enter' && onEnter();
        onKeyDown && onKeyDown(e);
    }

    return (
        <span>
            <input
                {...restProps}
                onChange={onChangeCallBack}
                onKeyDown={onKeyDownHandler}
                className={style.std}
            />
            {error && <div className={style.error}>Enter only numbers!</div>}
        </span>
    );
};

