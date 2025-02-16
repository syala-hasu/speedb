import React from "react";
import Loading from "../../../common/components/Loading";
import {Game} from "../../../../entities/Game.ts";

export interface Props {
    game: Game;
    isLoading?: boolean;
}

function GameDetail(props: Props): React.ReactElement {
    if (props.isLoading || !props.game) return <Loading />

    return (
        <>
            <article className={`container`}>
                <h2 className="mb-6 text-accent font-bold lg:text-4xl">{props.game.title}</h2>

                <div className={`text-center`}>

                    <div className={`join`}>
                        <div className={`join-item`}>
                            <img
                                src={props.game.img}
                                loading="lazy" alt={props.game.title}
                                className="h-96 object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                        </div>
                        <div className="join-item stats stats-vertical shadow">
                            <div className="stat">
                                <div className="stat-title">イベント採用数</div>
                                <div className="stat-value">{props.game.eventCount}</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title">走者数</div>
                                <div className="stat-value">{props.game.runnerCount}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default GameDetail
