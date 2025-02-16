import useSWR from "swr";
import {GetGameDocument, GetGameQuery} from "../../../gql/graphql.ts";
import {gqlClient} from "../../../libs/gql/client.ts";

export const useFetchGame: (uid: string) => {
    data: GetGameQuery | undefined;
    isLoading: boolean;
    error: boolean;
} = (uid: string) => {

    const {data, isLoading, error} = useSWR<GetGameQuery>(
        [GetGameDocument, uid],
        () => gqlClient.request<GetGameQuery>(GetGameDocument, { uid: uid })
    )

    return { data, isLoading, error };
}

