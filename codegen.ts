
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [process.env.HASURA_URL ?? "http://localhost:8080/v1/graphql"]: {},
  },
  documents: "src/**/*.graphql",
  generates: {
    "src/gql/": {
      preset: "client-preset",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
