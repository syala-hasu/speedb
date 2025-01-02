import { useEffect, useState } from "react";
import {Introduction} from "../../../entities/Introduction.ts";
import client from "../../../libs/axios/client.ts";
import {IntroductionMockResponse} from "./mocks/fetchIntroductionList.ts";

export const useFetchIntroductionList: () => {
    isLoading: boolean;
    introductionList: Introduction[];
    isError: boolean
} = () => {
    const [introductionList, setIntroductionList] = useState<Introduction[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        (async() => {
            await client.get('/introduction', IntroductionMockResponse)
                .then((response) => setIntroductionList(response.data))
                .catch(() => setError(true))
                .finally(() => setLoading(false));
        })()
    }, []);

    return { introductionList, isLoading, isError };
};