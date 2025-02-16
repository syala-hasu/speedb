import {useAuth0} from "@auth0/auth0-react";
import useSWR from "swr";

export const useGetAccessToken = ():{
    token: string;
    isLoading: boolean;
    error: boolean;
} => {
    const {getAccessTokenSilently} = useAuth0()
    const {data: token, isLoading, error} = useSWR<string>(
        'GetAccessToken',
        getAccessTokenSilently
    )

    if (isLoading) return {token: '', isLoading, error}

    return {token: token as string, isLoading, error}
}