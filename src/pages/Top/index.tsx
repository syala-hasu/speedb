import GameList from "../../features/game/components/GameList";
import {useFetchGameList} from "../../features/game/hooks/useFetchGameList.ts";

function Top() {
    const {gameList, isLoading} = useFetchGameList()

    return (
        <>
            <div className={`container mx-auto`}>
                <GameList gameList={gameList} isLoading={isLoading}></GameList>
            </div>
        </>
    )
}

export default Top
