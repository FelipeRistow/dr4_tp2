import React from "react";
import {Checkbox, CheckboxProps} from "@mui/material";

interface ICheckboxProps extends CheckboxProps {
}

const CheckboxComponent: React.FC<ICheckboxProps> = ({...props}) => {
    return <Checkbox {...props}/>
}

export default CheckboxComponent;
