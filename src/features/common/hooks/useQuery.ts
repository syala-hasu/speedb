import useSWR from "swr";
import {buildGraphQLClient} from "../../../libs/gql/client.ts";
import {DocumentNode} from "graphql/language";
import {Variables} from "graphql-request";
import {useGetAccessToken} from "../../auth0/hooks/useGetAccessToken.ts";

export const useQuery = <T>(doc: DocumentNode, vars: Variables) => {
    const {token} = useGetAccessToken();

    const client = buildGraphQLClient(token)

    const {data, isLoading, error} = useSWR<T>(
        ['aaaa', vars],
        () => client.request<T>(doc, vars)
    )

    return { data, isLoading, error };
};

