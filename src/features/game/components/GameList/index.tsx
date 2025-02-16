import React from "react";
import Loading from "../../../common/components/Loading";
import GameListItem from "../GameListItem";
import {Game} from "../../../../entities/Game.ts";
import {mutate} from "swr";


export interface Props {
    gameList: Game[];
    isLoading?: boolean;
}

function GameList(props: Props): React.ReactElement {

    if (props.isLoading || props.gameList.length == 0) return <Loading />

    const gameList = props.gameList.map(
        (game) => {
            mutate(`/game?id=${game.id}`, game).then();

            return (
                <>
                    <li key={game.id}>
                        <GameListItem {...game} />
                    </li>
                </>
            )
        }

    )
    return (
        <>
            <ul className={`grid gap-x-4 gap-y-5 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4`}>
                {gameList}
            </ul>
        </>
    )
}

export default GameList
