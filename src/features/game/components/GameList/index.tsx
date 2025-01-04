import React from "react";
import Loading from "../../../common/Loading";
import GameListItem from "../GameListItem";
import {Game} from "../../../../entities/Game.tsx";


export interface Props {
    gameList: Game[];
    isLoading?: boolean;
}

function GameList(props: Props): React.ReactElement {

    if (props.isLoading || props.gameList.length == 0) return <Loading />

    const gameList = props.gameList.map(
        (game) =>
            <li className={``}>
                <GameListItem {...game} />
            </li>
    )
    return (
        <>
            <ul className={`grid grid-cols-3 gap-4`}>
                {gameList}
            </ul>
        </>
    )
}

export default GameList
