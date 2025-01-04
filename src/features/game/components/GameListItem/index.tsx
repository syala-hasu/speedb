import React from "react";

export interface Props {
    id: string;
    img: string;
    title: string;
}

function GameListItem(props: Props): React.ReactElement {
    return (
        <>
            <a href={`/game/${props.id}`}>
                <div className="card card-side bg-neutral shadow-xl">
                    <figure className={`w-28`}>
                        <img
                            src={props.img}
                            alt={props.title}/>
                    </figure>
                    <div className="card-body text-accent">
                        <h2 className="card-title mx-auto">{props.title}</h2>
                    </div>
                </div>
            </a>
        </>
    )
}

export default GameListItem
