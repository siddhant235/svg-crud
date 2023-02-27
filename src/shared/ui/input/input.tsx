import React, { useState } from "react";

interface InputProps {
    placeholder?: string,
    type?: "text" | "number",
    style?: {},
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    value: any


}
const Input = (props: InputProps) => {



    const defaultStyle: any = {

        borderBottom: "1px solid black",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        outline: "none",
        marginTop: "10px"
    }


    const { placeholder = "", type = "text", style = defaultStyle, onChange, value } = props

    return (
        <input placeholder={placeholder} type={type} value={value} onChange={(e)=>onChange(e)} style={style} />
    )
}

export default Input