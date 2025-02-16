import GameList from "../../features/game/components/GameList";
import {useFetchGameList} from "../../features/game/hooks/useFetchGameList.ts";
import {useFetchGame} from "../../features/game/hooks/useFetchGame.ts";
import {useQuery} from "../../features/common/hooks/useQuery.ts";
import {FetchGameByNameDocument, FetchGameByNameQuery} from "../../gql/graphql.ts";

function Top() {
    // const {gameList, isLoading} = useFetchGameList()

    const {data, error} = useQuery<FetchGameByNameQuery>(FetchGameByNameDocument, {name: ''})

    return (
        <>
            {/*<div className={`container mx-auto`}>*/}
            {/*    <GameList gameList={gameList} isLoading={isLoading}></GameList>*/}
            {/*</div>*/}
        </>
    )
}

export default Top
