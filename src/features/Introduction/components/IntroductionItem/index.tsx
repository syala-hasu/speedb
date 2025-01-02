import React from "react";

export interface Props {
    img: string;
    title: string;
    description: string;
}

function IntroductionItem(props: Props): React.ReactElement {
    return (
        <>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={props.img}
                        alt={props.title}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default IntroductionItem
