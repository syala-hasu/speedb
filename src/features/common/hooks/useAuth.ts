import {useAuth0} from "@auth0/auth0-react";
import {useQuery} from "./useQuery.ts";
import {FetchRunnerByUserIdDocument, FetchRunnerByUserIdQuery, Runners} from "../../../gql/graphql.ts";

export const useAuth = () => {
    const {user} = useAuth0()
    const {data, isLoading, error} = useQuery<FetchRunnerByUserIdQuery>(FetchRunnerByUserIdDocument, {userId: user ? user!.sub : ''})
    const runner = data?.runners[0] as Runners

    return {runner, isLoading, error}
}