import React from "react";

export interface Props {
    img: string;
    title: string;
    description: string;
}

function IntroductionItem(props: Props): React.ReactElement {
    return (
        <>
            <div className="card card-side bg-neutral shadow-xl">
                <figure className={`w-28`}>
                    <img
                        src={props.img}
                        alt={props.title}/>
                </figure>
                <div className="card-body text-accent">
                    <h2 className="card-title mx-auto">{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default IntroductionItem
