import {Game} from "../../../entities/Game.ts";
import {fetcher} from "../../../libs/axios/client.ts";
import useSWR from "swr";


export const useFetchGameList: (page?: number, size?: number) => {
    gameList: Game[];
    isLoading: boolean;
    error: boolean;
} = (page?: number, size?: number) => {

    if (page) {
        page = 1
    }

    if (size) {
        size = 20
    }

    const { data, error, isLoading } = useSWR(`/game?p=${page}&s=${size}`, fetcher)
    return { gameList: data, isLoading, error };
}