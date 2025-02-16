/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation InsertGame($name: String, $uid: String) {\n  insert_games_one(object: {name: $name, uid: $uid}) {\n    name\n    uid\n  }\n}": typeof types.InsertGameDocument,
    "mutation InsertRun($attempt_count: Int, $game_uid: String, $uid: String) {\n  insert_runs(\n    objects: {attempt_count: $attempt_count, game_uid: $game_uid, uid: $uid}\n  ) {\n    affected_rows\n    returning {\n      attempt_count\n      game_uid\n      uid\n    }\n  }\n}": typeof types.InsertRunDocument,
    "mutation InsertRunner($userId: String, $uid: String) {\n  insert_runners_one(object: {user_uid: $userId, uid: $uid}) {\n    uid\n    user_uid\n  }\n}": typeof types.InsertRunnerDocument,
    "mutation InsertSegments($segments: [segments_insert_input!]!) {\n  insert_segments(objects: $segments) {\n    returning {\n      index\n      best_time\n      current_time\n      name\n      run_uid\n      uid\n    }\n  }\n}": typeof types.InsertSegmentsDocument,
    "query GetGame($uid: String) {\n  games(where: {uid: {_eq: $uid}}) {\n    uid\n    name\n  }\n}": typeof types.GetGameDocument,
    "query FetchGameByName($name: String) {\n  games(where: {name: {_eq: $name}}) {\n    uid\n    name\n  }\n}": typeof types.FetchGameByNameDocument,
    "query FetchRunsByRunner($runner_uid: String) {\n  runs(where: {runner_uid: {_eq: $runner_uid}}) {\n    attempt_count\n    game_uid\n    runner_uid\n    uid\n  }\n}": typeof types.FetchRunsByRunnerDocument,
    "query FetchRunnerByUserId($userId: String) {\n  runners(where: {user_uid: {_eq: $userId}}) {\n    name\n    uid\n    user_uid\n  }\n}": typeof types.FetchRunnerByUserIdDocument,
};
const documents: Documents = {
    "mutation InsertGame($name: String, $uid: String) {\n  insert_games_one(object: {name: $name, uid: $uid}) {\n    name\n    uid\n  }\n}": types.InsertGameDocument,
    "mutation InsertRun($attempt_count: Int, $game_uid: String, $uid: String) {\n  insert_runs(\n    objects: {attempt_count: $attempt_count, game_uid: $game_uid, uid: $uid}\n  ) {\n    affected_rows\n    returning {\n      attempt_count\n      game_uid\n      uid\n    }\n  }\n}": types.InsertRunDocument,
    "mutation InsertRunner($userId: String, $uid: String) {\n  insert_runners_one(object: {user_uid: $userId, uid: $uid}) {\n    uid\n    user_uid\n  }\n}": types.InsertRunnerDocument,
    "mutation InsertSegments($segments: [segments_insert_input!]!) {\n  insert_segments(objects: $segments) {\n    returning {\n      index\n      best_time\n      current_time\n      name\n      run_uid\n      uid\n    }\n  }\n}": types.InsertSegmentsDocument,
    "query GetGame($uid: String) {\n  games(where: {uid: {_eq: $uid}}) {\n    uid\n    name\n  }\n}": types.GetGameDocument,
    "query FetchGameByName($name: String) {\n  games(where: {name: {_eq: $name}}) {\n    uid\n    name\n  }\n}": types.FetchGameByNameDocument,
    "query FetchRunsByRunner($runner_uid: String) {\n  runs(where: {runner_uid: {_eq: $runner_uid}}) {\n    attempt_count\n    game_uid\n    runner_uid\n    uid\n  }\n}": types.FetchRunsByRunnerDocument,
    "query FetchRunnerByUserId($userId: String) {\n  runners(where: {user_uid: {_eq: $userId}}) {\n    name\n    uid\n    user_uid\n  }\n}": types.FetchRunnerByUserIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation InsertGame($name: String, $uid: String) {\n  insert_games_one(object: {name: $name, uid: $uid}) {\n    name\n    uid\n  }\n}"): (typeof documents)["mutation InsertGame($name: String, $uid: String) {\n  insert_games_one(object: {name: $name, uid: $uid}) {\n    name\n    uid\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation InsertRun($attempt_count: Int, $game_uid: String, $uid: String) {\n  insert_runs(\n    objects: {attempt_count: $attempt_count, game_uid: $game_uid, uid: $uid}\n  ) {\n    affected_rows\n    returning {\n      attempt_count\n      game_uid\n      uid\n    }\n  }\n}"): (typeof documents)["mutation InsertRun($attempt_count: Int, $game_uid: String, $uid: String) {\n  insert_runs(\n    objects: {attempt_count: $attempt_count, game_uid: $game_uid, uid: $uid}\n  ) {\n    affected_rows\n    returning {\n      attempt_count\n      game_uid\n      uid\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation InsertRunner($userId: String, $uid: String) {\n  insert_runners_one(object: {user_uid: $userId, uid: $uid}) {\n    uid\n    user_uid\n  }\n}"): (typeof documents)["mutation InsertRunner($userId: String, $uid: String) {\n  insert_runners_one(object: {user_uid: $userId, uid: $uid}) {\n    uid\n    user_uid\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation InsertSegments($segments: [segments_insert_input!]!) {\n  insert_segments(objects: $segments) {\n    returning {\n      index\n      best_time\n      current_time\n      name\n      run_uid\n      uid\n    }\n  }\n}"): (typeof documents)["mutation InsertSegments($segments: [segments_insert_input!]!) {\n  insert_segments(objects: $segments) {\n    returning {\n      index\n      best_time\n      current_time\n      name\n      run_uid\n      uid\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetGame($uid: String) {\n  games(where: {uid: {_eq: $uid}}) {\n    uid\n    name\n  }\n}"): (typeof documents)["query GetGame($uid: String) {\n  games(where: {uid: {_eq: $uid}}) {\n    uid\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchGameByName($name: String) {\n  games(where: {name: {_eq: $name}}) {\n    uid\n    name\n  }\n}"): (typeof documents)["query FetchGameByName($name: String) {\n  games(where: {name: {_eq: $name}}) {\n    uid\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchRunsByRunner($runner_uid: String) {\n  runs(where: {runner_uid: {_eq: $runner_uid}}) {\n    attempt_count\n    game_uid\n    runner_uid\n    uid\n  }\n}"): (typeof documents)["query FetchRunsByRunner($runner_uid: String) {\n  runs(where: {runner_uid: {_eq: $runner_uid}}) {\n    attempt_count\n    game_uid\n    runner_uid\n    uid\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchRunnerByUserId($userId: String) {\n  runners(where: {user_uid: {_eq: $userId}}) {\n    name\n    uid\n    user_uid\n  }\n}"): (typeof documents)["query FetchRunnerByUserId($userId: String) {\n  runners(where: {user_uid: {_eq: $userId}}) {\n    name\n    uid\n    user_uid\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;