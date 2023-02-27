import React from "react";

interface ButtonProps{
    title:string;
    style?:{};
    onClick:()=>void
}

const Button=(props:ButtonProps)=>{
    const {style,title,onClick}=props

    const defaultStyle={
        width:"100%",
        height:"100%",
        padding:"5px",
        outline:"none",
        border:"none",
        ...style

    }



    return (
 <div onClick={onClick}>
            <button style={defaultStyle}>{title}</button>
 </div>
    )
}

export default Button