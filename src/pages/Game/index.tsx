import {useParams} from "react-router-dom";
import {useQuery} from "../../features/common/hooks/useQuery.ts";
import {GetGameDocument, GetGameQuery} from "../../gql/graphql.ts";

function Game() {
    // const { id } = useParams();

    // const { game } = useFetchGame(id ?? '')

    // const { uid } = useParams();

    // const {data} = useQuery<GetGameQuery>(GetGameDocument, {uid: uid ?? ''})

    // const {introductionList, isLoading} = useFetchIntroductionList(id ?? '')

    return (
        <>
            {/*<div className={`container mx-auto`}>*/}
            {/*    <GameDetail game={game} />*/}
            {/*    <IntroductionList introductionList={introductionList} isLoading={isLoading}></IntroductionList>*/}
            {/*</div>*/}
        </>
    )
}

export default Game
