import {FetchRunnerByUserIdDocument, FetchRunnerByUserIdQuery, Runners} from "../../../gql/graphql.ts";
import Loading from "../../../features/common/components/Loading";
import {useAuth0} from "@auth0/auth0-react";
import {useQuery} from "../../../features/common/hooks/useQuery.ts";
import Button from "../../../features/common/components/Button";
import {useNavigate} from "react-router-dom";
import ROUTES from "../../../libs/router/routes.ts";

function MyRun() {
    const {user} = useAuth0()
    const {data, isLoading} = useQuery<FetchRunnerByUserIdQuery>(FetchRunnerByUserIdDocument, {userId: user ? user!.sub : ''})

    const navigate = useNavigate()

    const runner = data?.runners[0] as Runners

    console.log(runner)
    if (isLoading) return <Loading />

    return (
        <>
            <Button onClick={() => navigate(ROUTES.RUN_UPLOAD)}>Upload Run</Button>
        </>
    )
}

export default MyRun