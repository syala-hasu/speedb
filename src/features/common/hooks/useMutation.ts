import {gqlClient} from "../../../libs/gql/client.ts";
import {DocumentNode} from "graphql/language";
import {Variables} from "graphql-request";

export const useMutation = <T>(doc: DocumentNode) => {
    const mutation = async (vars: Variables) => {
        await gqlClient.request<T>(doc, vars)
    }

    return { mutation };
};

