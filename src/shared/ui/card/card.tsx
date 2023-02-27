import React, { ReactNode } from "react";
import "./card.css"

interface CardProps {
    children: ReactNode

}
const Card = (props: CardProps) => {

    const { children } = props
    return (
        <div className="card_container">
         {children}
        </div>
    )
}

export default Card;