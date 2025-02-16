import {Navigate, Outlet} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "../../features/common/components/Loading";
import {useQuery} from "../../features/common/hooks/useQuery.ts";
import {FetchGameByNameDocument, FetchGameByNameQuery} from "../../gql/graphql.ts";

function Private() {
    const { isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();

    if (isLoading) return <Loading />

    if (!isAuthenticated) return <Navigate to={`/`} />;

    return <Outlet />;
}

export default Private
