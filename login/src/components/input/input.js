import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CustomInput } from './style'
function Input(props) {
    const { register, type, name, required, pattern, icon } = props
    const registerValues = register ? register(name, { required, pattern }) : undefined
    return (
        <CustomInput {...registerValues} type={type} name={name}>
            <FontAwesomeIcon icon="fa-solid fa-user" />
        </CustomInput>

    );
}
export default Input;
