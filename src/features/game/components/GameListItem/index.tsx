import React from "react";

export interface Props {
    id: string;
    img: string;
    title: string;
    eventCount: number;
    onClick?: (event: MouseEvent) => void;
}

function GameListItem(props: Props): React.ReactElement {
    return (
        <>
            <a href={`/game/${props.id}`}
               className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <img
                    src={props.img}
                    loading="lazy" alt={props.title}
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
            </a>

            <div>
                <a href={`/game/${props.id}`} className="mb-1 text-accent transition duration-100 lg:text-lg">{props.title}</a>
            </div>
        </>
    )
}

export default GameListItem
