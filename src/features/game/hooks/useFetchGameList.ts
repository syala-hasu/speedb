import { useEffect, useState } from "react";
import {Game} from "../../../entities/Game.ts";
import client from "../../../libs/axios/client.ts";
import {GameMockResponse} from "./mocks/fetchGameList.ts";

export const useFetchGameList: () => {
    gameList: Game[];
    isLoading: boolean;
    isError: boolean
} = () => {
    const [gameList, setGameList] = useState<Game[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        (async() => {
            await client.get('/game', GameMockResponse)
                .then((response) => setGameList(response.data))
                .catch(() => setError(true))
                .finally(() => setLoading(false));
        })()
    }, []);

    return { gameList, isLoading, isError };
};