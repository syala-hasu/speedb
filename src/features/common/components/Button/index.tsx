import React from "react";

export interface Props {
    children: React.ReactNode;
    onClick: () => void;
}

function Button(props: Props) {
    return (
        <>
            <button className="btn" onClick={props.onClick}>
                {props.children}
            </button>
        </>
    )
}

export default Button;