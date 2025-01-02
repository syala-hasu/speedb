import { useEffect, useState } from "react";
import {Introduction} from "../../../../entities/Introduction.ts";

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
            try {
                const response = await fetch("/example");
                const data = await response.json();
                setIntroductionList(data);
            } catch(err) {
                // TODO: DEBUG
                console.error(err)
                setError(true);
            } finally {
                setLoading(false);
            }
        })()
    }, []);

    return { introductionList, isLoading, isError };
};