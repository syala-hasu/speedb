import {Introduction} from "../../../entities/Introduction.ts";
import {fetcher} from "../../../libs/axios/client.ts";
import useSWR from "swr";

export const useFetchIntroductionList: (id: string) => {
    introductionList: Introduction[];
    error: boolean
    isLoading: boolean;
} = (id: string) => {
    const { data, error, isLoading } = useSWR(`/game/${id}/introduction`, fetcher)
    return { introductionList: data, isLoading, error };
}