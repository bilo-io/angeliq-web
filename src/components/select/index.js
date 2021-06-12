// #region Modules
import { options } from 'marked'
import React, {
    useState,
    useEffect,
    useRef,
    useReducer
} from 'react'
// import { ProgressPlugin } from 'webpack'
// #endregion

// #region Components
// #endregion

// #region Assets & Data
// #endregion

export const Select = ({
    defaultValue,
    options,
    onChange
}) => {
    const [value, setValue] = useState(defaultValue)

    useEffect(() => {
    }, [])

    return (
        <select onChange={ (e) => {
            setValue(e.target.value)
            onChange(e.target.value)
        }}>
            {
                (options || []).map((option, i) => (
                    <option
                        key={ `select-option-${i}`}
                        value={ option.value }
                    >
                        { option.name || option.label }
                    </option>))
            }
        </select>
    )
}

export default Select
