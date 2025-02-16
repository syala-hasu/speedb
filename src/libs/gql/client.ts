import { GraphQLClient } from 'graphql-request';

export const gqlClient = new GraphQLClient(import.meta.env.VITE_HASURA_URL);

export const buildGraphQLClient = (token?: string) => {
    const headers: Record<string, string> = {};

    if (token) {
        headers.authorization = `Bearer ${token}`;
    }

    return new GraphQLClient(import.meta.env.VITE_HASURA_URL, {
        headers: headers,
    });
}

