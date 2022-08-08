export type counterStateType = {
    min: { number: number, setNumber: number, error: boolean }
    max: { number: number, setNumber: number, error: boolean }
    current: number
    view: boolean
    counterStatus: boolean
}

const initialState: counterStateType = {
    min: {
        number: 0,
        setNumber: 0,
        error: false,
    },
    max: {
        number: 1,
        setNumber: 1,
        error: false,
    },
    current: 0,
    view: false,
    counterStatus: false
}

export const counterReducer = (state: counterStateType = initialState, action: ActionType): counterStateType => {
    switch (action.type) {
        case 'CHANGE-MIN-VALUE':
            return {
                ...state,
                min: action.payload.newValue >= state.max.number ? {...state.min, error: true} : {
                    ...state.min,
                    number: action.payload.newValue,
                    error: false
                }
            };
        case 'CHANGE-MAX-VALUE':
            return {
                ...state,
                max: action.payload.newValue <= state.min.number ? {...state.max, error: true} : {
                    ...state.max,
                    number: action.payload.newValue,
                    error: false
                }
            };
        case 'RESET-MIN-ERROR':
            return {...state, min: {...state.min, error: false}};
        case 'RESET-MAX-ERROR':
            return {...state, max: {...state.max, error: false}};
        case 'SET-ALL-VALUES':
            return {
                ...state,
                min: {...state.min, setNumber: state.min.number},
                max: {...state.max, setNumber: state.max.number},
                current: state.current < state.min.number ? state.min.number : state.current > state.max.number ? state.max.number : state.current
            };
        case 'ALT-SET-ALL-VALUES':
            return {
                ...state,
                min: {...state.min, setNumber: state.min.number},
                max: {...state.max, setNumber: state.max.number},
                current: state.current < state.min.number ? state.min.number : state.current > state.max.number ? state.max.number : state.current,
                counterStatus: !state.counterStatus,
            };
        case 'RESET-VALUES':
            return initialState;
        case 'SET-CURRENT-VALUE':
            return {
                ...state,
                current: action.payload.newValue,
            };
        case 'CHANGE-VIEW':
            return {
                ...state,
                view: !state.view,
            };
        case 'CHANGE-COUNTER-STATUS':
            return {
                ...state,
                counterStatus: !state.counterStatus,
            };
        default:
            return state;
    }
}

type ActionType =
    changeMinValueACType
    | changeMaxValueACType
    | resetMinErrorACType
    | resetMaxErrorACType
    | setAllValuesACType
    | altSetAllValuesACType
    | resetValuesACType
    | setCurrentValueACType
    | changeViewACType
    | changeCounterStatusACType

type changeMinValueACType = ReturnType<typeof changeMinValueAC>
type changeMaxValueACType = ReturnType<typeof changeMaxValueAC>
type resetMinErrorACType = ReturnType<typeof resetMinErrorAC>
type resetMaxErrorACType = ReturnType<typeof resetMaxErrorAC>
type setAllValuesACType = ReturnType<typeof setAllValuesAC>
type altSetAllValuesACType = ReturnType<typeof altSetAllValuesAC>
type resetValuesACType = ReturnType<typeof resetValuesAC>
type setCurrentValueACType = ReturnType<typeof setCurrentValueAC>
type changeViewACType = ReturnType<typeof changeViewAC>
type changeCounterStatusACType = ReturnType<typeof changeCounterStatusAC>

export const changeMinValueAC = (newValue: string) => ({
    type: 'CHANGE-MIN-VALUE',
    payload: {
        newValue: +newValue
    }
} as const)
export const changeMaxValueAC = (newValue: string) => ({
    type: 'CHANGE-MAX-VALUE',
    payload: {
        newValue: +newValue
    }
} as const)
export const resetMinErrorAC = () => ({
    type: 'RESET-MIN-ERROR',
} as const)
export const resetMaxErrorAC = () => ({
    type: 'RESET-MAX-ERROR',
} as const)
export const setAllValuesAC = () => ({
    type: 'SET-ALL-VALUES',
} as const)
export const altSetAllValuesAC = () => ({
    type: 'ALT-SET-ALL-VALUES',
} as const)
export const resetValuesAC = () => ({
    type: 'RESET-VALUES',
} as const)
export const setCurrentValueAC = (newValue: string) => ({
    type: 'SET-CURRENT-VALUE',
    payload: {
        newValue: +newValue
    }
} as const)
export const changeViewAC = () => ({
    type: 'CHANGE-VIEW',
} as const)
export const changeCounterStatusAC = () => ({
    type: 'CHANGE-COUNTER-STATUS',
} as const)