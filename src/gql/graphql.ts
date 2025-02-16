/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "games" */
export type Games = {
  __typename?: 'games';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "games" */
export type Games_Aggregate = {
  __typename?: 'games_aggregate';
  aggregate?: Maybe<Games_Aggregate_Fields>;
  nodes: Array<Games>;
};

/** aggregate fields of "games" */
export type Games_Aggregate_Fields = {
  __typename?: 'games_aggregate_fields';
  avg?: Maybe<Games_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Games_Max_Fields>;
  min?: Maybe<Games_Min_Fields>;
  stddev?: Maybe<Games_Stddev_Fields>;
  stddev_pop?: Maybe<Games_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Games_Stddev_Samp_Fields>;
  sum?: Maybe<Games_Sum_Fields>;
  var_pop?: Maybe<Games_Var_Pop_Fields>;
  var_samp?: Maybe<Games_Var_Samp_Fields>;
  variance?: Maybe<Games_Variance_Fields>;
};


/** aggregate fields of "games" */
export type Games_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Games_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Games_Avg_Fields = {
  __typename?: 'games_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "games". All fields are combined with a logical 'AND'. */
export type Games_Bool_Exp = {
  _and?: InputMaybe<Array<Games_Bool_Exp>>;
  _not?: InputMaybe<Games_Bool_Exp>;
  _or?: InputMaybe<Array<Games_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "games" */
export enum Games_Constraint {
  /** unique or primary key constraint on columns "id" */
  GamePkey = 'game_pkey',
  /** unique or primary key constraint on columns "uid" */
  GameUidKey = 'game_uid_key',
  /** unique or primary key constraint on columns "name" */
  GamesNameKey = 'games_name_key'
}

/** input type for incrementing numeric columns in table "games" */
export type Games_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "games" */
export type Games_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Games_Max_Fields = {
  __typename?: 'games_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Games_Min_Fields = {
  __typename?: 'games_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "games" */
export type Games_Mutation_Response = {
  __typename?: 'games_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Games>;
};

/** on_conflict condition type for table "games" */
export type Games_On_Conflict = {
  constraint: Games_Constraint;
  update_columns?: Array<Games_Update_Column>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** Ordering options when selecting data from "games". */
export type Games_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: games */
export type Games_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "games" */
export enum Games_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "games" */
export type Games_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Games_Stddev_Fields = {
  __typename?: 'games_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Games_Stddev_Pop_Fields = {
  __typename?: 'games_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Games_Stddev_Samp_Fields = {
  __typename?: 'games_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "games" */
export type Games_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Games_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Games_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Games_Sum_Fields = {
  __typename?: 'games_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "games" */
export enum Games_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Games_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Games_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Games_Set_Input>;
  /** filter the rows which have to be updated */
  where: Games_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Games_Var_Pop_Fields = {
  __typename?: 'games_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Games_Var_Samp_Fields = {
  __typename?: 'games_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Games_Variance_Fields = {
  __typename?: 'games_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "games" */
  delete_games?: Maybe<Games_Mutation_Response>;
  /** delete single row from the table: "games" */
  delete_games_by_pk?: Maybe<Games>;
  /** delete data from the table: "runners" */
  delete_runners?: Maybe<Runners_Mutation_Response>;
  /** delete single row from the table: "runners" */
  delete_runners_by_pk?: Maybe<Runners>;
  /** delete data from the table: "runs" */
  delete_runs?: Maybe<Runs_Mutation_Response>;
  /** delete single row from the table: "runs" */
  delete_runs_by_pk?: Maybe<Runs>;
  /** delete data from the table: "segments" */
  delete_segments?: Maybe<Segments_Mutation_Response>;
  /** delete single row from the table: "segments" */
  delete_segments_by_pk?: Maybe<Segments>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "games" */
  insert_games?: Maybe<Games_Mutation_Response>;
  /** insert a single row into the table: "games" */
  insert_games_one?: Maybe<Games>;
  /** insert data into the table: "runners" */
  insert_runners?: Maybe<Runners_Mutation_Response>;
  /** insert a single row into the table: "runners" */
  insert_runners_one?: Maybe<Runners>;
  /** insert data into the table: "runs" */
  insert_runs?: Maybe<Runs_Mutation_Response>;
  /** insert a single row into the table: "runs" */
  insert_runs_one?: Maybe<Runs>;
  /** insert data into the table: "segments" */
  insert_segments?: Maybe<Segments_Mutation_Response>;
  /** insert a single row into the table: "segments" */
  insert_segments_one?: Maybe<Segments>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "games" */
  update_games?: Maybe<Games_Mutation_Response>;
  /** update single row of the table: "games" */
  update_games_by_pk?: Maybe<Games>;
  /** update multiples rows of table: "games" */
  update_games_many?: Maybe<Array<Maybe<Games_Mutation_Response>>>;
  /** update data of the table: "runners" */
  update_runners?: Maybe<Runners_Mutation_Response>;
  /** update single row of the table: "runners" */
  update_runners_by_pk?: Maybe<Runners>;
  /** update multiples rows of table: "runners" */
  update_runners_many?: Maybe<Array<Maybe<Runners_Mutation_Response>>>;
  /** update data of the table: "runs" */
  update_runs?: Maybe<Runs_Mutation_Response>;
  /** update single row of the table: "runs" */
  update_runs_by_pk?: Maybe<Runs>;
  /** update multiples rows of table: "runs" */
  update_runs_many?: Maybe<Array<Maybe<Runs_Mutation_Response>>>;
  /** update data of the table: "segments" */
  update_segments?: Maybe<Segments_Mutation_Response>;
  /** update single row of the table: "segments" */
  update_segments_by_pk?: Maybe<Segments>;
  /** update multiples rows of table: "segments" */
  update_segments_many?: Maybe<Array<Maybe<Segments_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_GamesArgs = {
  where: Games_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Games_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RunnersArgs = {
  where: Runners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Runners_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RunsArgs = {
  where: Runs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Runs_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SegmentsArgs = {
  where: Segments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Segments_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_GamesArgs = {
  objects: Array<Games_Insert_Input>;
  on_conflict?: InputMaybe<Games_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Games_OneArgs = {
  object: Games_Insert_Input;
  on_conflict?: InputMaybe<Games_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RunnersArgs = {
  objects: Array<Runners_Insert_Input>;
  on_conflict?: InputMaybe<Runners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Runners_OneArgs = {
  object: Runners_Insert_Input;
  on_conflict?: InputMaybe<Runners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RunsArgs = {
  objects: Array<Runs_Insert_Input>;
  on_conflict?: InputMaybe<Runs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Runs_OneArgs = {
  object: Runs_Insert_Input;
  on_conflict?: InputMaybe<Runs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SegmentsArgs = {
  objects: Array<Segments_Insert_Input>;
  on_conflict?: InputMaybe<Segments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Segments_OneArgs = {
  object: Segments_Insert_Input;
  on_conflict?: InputMaybe<Segments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GamesArgs = {
  _inc?: InputMaybe<Games_Inc_Input>;
  _set?: InputMaybe<Games_Set_Input>;
  where: Games_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Games_By_PkArgs = {
  _inc?: InputMaybe<Games_Inc_Input>;
  _set?: InputMaybe<Games_Set_Input>;
  pk_columns: Games_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Games_ManyArgs = {
  updates: Array<Games_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RunnersArgs = {
  _inc?: InputMaybe<Runners_Inc_Input>;
  _set?: InputMaybe<Runners_Set_Input>;
  where: Runners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Runners_By_PkArgs = {
  _inc?: InputMaybe<Runners_Inc_Input>;
  _set?: InputMaybe<Runners_Set_Input>;
  pk_columns: Runners_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Runners_ManyArgs = {
  updates: Array<Runners_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RunsArgs = {
  _inc?: InputMaybe<Runs_Inc_Input>;
  _set?: InputMaybe<Runs_Set_Input>;
  where: Runs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Runs_By_PkArgs = {
  _inc?: InputMaybe<Runs_Inc_Input>;
  _set?: InputMaybe<Runs_Set_Input>;
  pk_columns: Runs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Runs_ManyArgs = {
  updates: Array<Runs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SegmentsArgs = {
  _inc?: InputMaybe<Segments_Inc_Input>;
  _set?: InputMaybe<Segments_Set_Input>;
  where: Segments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Segments_By_PkArgs = {
  _inc?: InputMaybe<Segments_Inc_Input>;
  _set?: InputMaybe<Segments_Set_Input>;
  pk_columns: Segments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Segments_ManyArgs = {
  updates: Array<Segments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** fetch aggregated fields from the table: "games" */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "runners" */
  runners: Array<Runners>;
  /** fetch aggregated fields from the table: "runners" */
  runners_aggregate: Runners_Aggregate;
  /** fetch data from the table: "runners" using primary key columns */
  runners_by_pk?: Maybe<Runners>;
  /** fetch data from the table: "runs" */
  runs: Array<Runs>;
  /** fetch aggregated fields from the table: "runs" */
  runs_aggregate: Runs_Aggregate;
  /** fetch data from the table: "runs" using primary key columns */
  runs_by_pk?: Maybe<Runs>;
  /** fetch data from the table: "segments" */
  segments: Array<Segments>;
  /** fetch aggregated fields from the table: "segments" */
  segments_aggregate: Segments_Aggregate;
  /** fetch data from the table: "segments" using primary key columns */
  segments_by_pk?: Maybe<Segments>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Query_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Query_RootGames_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRunnersArgs = {
  distinct_on?: InputMaybe<Array<Runners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Runners_Order_By>>;
  where?: InputMaybe<Runners_Bool_Exp>;
};


export type Query_RootRunners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Runners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Runners_Order_By>>;
  where?: InputMaybe<Runners_Bool_Exp>;
};


export type Query_RootRunners_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRunsArgs = {
  distinct_on?: InputMaybe<Array<Runs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Runs_Order_By>>;
  where?: InputMaybe<Runs_Bool_Exp>;
};


export type Query_RootRuns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Runs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Runs_Order_By>>;
  where?: InputMaybe<Runs_Bool_Exp>;
};


export type Query_RootRuns_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSegmentsArgs = {
  distinct_on?: InputMaybe<Array<Segments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Segments_Order_By>>;
  where?: InputMaybe<Segments_Bool_Exp>;
};


export type Query_RootSegments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Segments_Order_By>>;
  where?: InputMaybe<Segments_Bool_Exp>;
};


export type Query_RootSegments_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** columns and relationships of "runners" */
export type Runners = {
  __typename?: 'runners';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  user_uid: Scalars['String']['output'];
};

/** aggregated selection of "runners" */
export type Runners_Aggregate = {
  __typename?: 'runners_aggregate';
  aggregate?: Maybe<Runners_Aggregate_Fields>;
  nodes: Array<Runners>;
};

/** aggregate fields of "runners" */
export type Runners_Aggregate_Fields = {
  __typename?: 'runners_aggregate_fields';
  avg?: Maybe<Runners_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Runners_Max_Fields>;
  min?: Maybe<Runners_Min_Fields>;
  stddev?: Maybe<Runners_Stddev_Fields>;
  stddev_pop?: Maybe<Runners_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Runners_Stddev_Samp_Fields>;
  sum?: Maybe<Runners_Sum_Fields>;
  var_pop?: Maybe<Runners_Var_Pop_Fields>;
  var_samp?: Maybe<Runners_Var_Samp_Fields>;
  variance?: Maybe<Runners_Variance_Fields>;
};


/** aggregate fields of "runners" */
export type Runners_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Runners_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Runners_Avg_Fields = {
  __typename?: 'runners_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "runners". All fields are combined with a logical 'AND'. */
export type Runners_Bool_Exp = {
  _and?: InputMaybe<Array<Runners_Bool_Exp>>;
  _not?: InputMaybe<Runners_Bool_Exp>;
  _or?: InputMaybe<Array<Runners_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_uid?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "runners" */
export enum Runners_Constraint {
  /** unique or primary key constraint on columns "id" */
  RunnersPkey = 'runners_pkey',
  /** unique or primary key constraint on columns "uid" */
  RunnersUidKey = 'runners_uid_key'
}

/** input type for incrementing numeric columns in table "runners" */
export type Runners_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "runners" */
export type Runners_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Runners_Max_Fields = {
  __typename?: 'runners_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_uid?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Runners_Min_Fields = {
  __typename?: 'runners_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_uid?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "runners" */
export type Runners_Mutation_Response = {
  __typename?: 'runners_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Runners>;
};

/** on_conflict condition type for table "runners" */
export type Runners_On_Conflict = {
  constraint: Runners_Constraint;
  update_columns?: Array<Runners_Update_Column>;
  where?: InputMaybe<Runners_Bool_Exp>;
};

/** Ordering options when selecting data from "runners". */
export type Runners_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: runners */
export type Runners_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "runners" */
export enum Runners_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "runners" */
export type Runners_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Runners_Stddev_Fields = {
  __typename?: 'runners_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Runners_Stddev_Pop_Fields = {
  __typename?: 'runners_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Runners_Stddev_Samp_Fields = {
  __typename?: 'runners_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "runners" */
export type Runners_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Runners_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Runners_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Runners_Sum_Fields = {
  __typename?: 'runners_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "runners" */
export enum Runners_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

export type Runners_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Runners_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Runners_Set_Input>;
  /** filter the rows which have to be updated */
  where: Runners_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Runners_Var_Pop_Fields = {
  __typename?: 'runners_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Runners_Var_Samp_Fields = {
  __typename?: 'runners_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Runners_Variance_Fields = {
  __typename?: 'runners_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "runs" */
export type Runs = {
  __typename?: 'runs';
  attempt_count: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  game_uid: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  runner_uid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "runs" */
export type Runs_Aggregate = {
  __typename?: 'runs_aggregate';
  aggregate?: Maybe<Runs_Aggregate_Fields>;
  nodes: Array<Runs>;
};

/** aggregate fields of "runs" */
export type Runs_Aggregate_Fields = {
  __typename?: 'runs_aggregate_fields';
  avg?: Maybe<Runs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Runs_Max_Fields>;
  min?: Maybe<Runs_Min_Fields>;
  stddev?: Maybe<Runs_Stddev_Fields>;
  stddev_pop?: Maybe<Runs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Runs_Stddev_Samp_Fields>;
  sum?: Maybe<Runs_Sum_Fields>;
  var_pop?: Maybe<Runs_Var_Pop_Fields>;
  var_samp?: Maybe<Runs_Var_Samp_Fields>;
  variance?: Maybe<Runs_Variance_Fields>;
};


/** aggregate fields of "runs" */
export type Runs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Runs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Runs_Avg_Fields = {
  __typename?: 'runs_avg_fields';
  attempt_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "runs". All fields are combined with a logical 'AND'. */
export type Runs_Bool_Exp = {
  _and?: InputMaybe<Array<Runs_Bool_Exp>>;
  _not?: InputMaybe<Runs_Bool_Exp>;
  _or?: InputMaybe<Array<Runs_Bool_Exp>>;
  attempt_count?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  game_uid?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  runner_uid?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "runs" */
export enum Runs_Constraint {
  /** unique or primary key constraint on columns "id" */
  RunsPkey = 'runs_pkey',
  /** unique or primary key constraint on columns "uid" */
  RunsUidKey = 'runs_uid_key'
}

/** input type for incrementing numeric columns in table "runs" */
export type Runs_Inc_Input = {
  attempt_count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "runs" */
export type Runs_Insert_Input = {
  attempt_count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  game_uid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  runner_uid?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Runs_Max_Fields = {
  __typename?: 'runs_max_fields';
  attempt_count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  game_uid?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  runner_uid?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Runs_Min_Fields = {
  __typename?: 'runs_min_fields';
  attempt_count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  game_uid?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  runner_uid?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "runs" */
export type Runs_Mutation_Response = {
  __typename?: 'runs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Runs>;
};

/** on_conflict condition type for table "runs" */
export type Runs_On_Conflict = {
  constraint: Runs_Constraint;
  update_columns?: Array<Runs_Update_Column>;
  where?: InputMaybe<Runs_Bool_Exp>;
};

/** Ordering options when selecting data from "runs". */
export type Runs_Order_By = {
  attempt_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  game_uid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  runner_uid?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: runs */
export type Runs_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "runs" */
export enum Runs_Select_Column {
  /** column name */
  AttemptCount = 'attempt_count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameUid = 'game_uid',
  /** column name */
  Id = 'id',
  /** column name */
  RunnerUid = 'runner_uid',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "runs" */
export type Runs_Set_Input = {
  attempt_count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  game_uid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  runner_uid?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Runs_Stddev_Fields = {
  __typename?: 'runs_stddev_fields';
  attempt_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Runs_Stddev_Pop_Fields = {
  __typename?: 'runs_stddev_pop_fields';
  attempt_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Runs_Stddev_Samp_Fields = {
  __typename?: 'runs_stddev_samp_fields';
  attempt_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "runs" */
export type Runs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Runs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Runs_Stream_Cursor_Value_Input = {
  attempt_count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  game_uid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  runner_uid?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Runs_Sum_Fields = {
  __typename?: 'runs_sum_fields';
  attempt_count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "runs" */
export enum Runs_Update_Column {
  /** column name */
  AttemptCount = 'attempt_count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameUid = 'game_uid',
  /** column name */
  Id = 'id',
  /** column name */
  RunnerUid = 'runner_uid',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Runs_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Runs_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Runs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Runs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Runs_Var_Pop_Fields = {
  __typename?: 'runs_var_pop_fields';
  attempt_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Runs_Var_Samp_Fields = {
  __typename?: 'runs_var_samp_fields';
  attempt_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Runs_Variance_Fields = {
  __typename?: 'runs_variance_fields';
  attempt_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "segments" */
export type Segments = {
  __typename?: 'segments';
  best_time: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  current_time: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  run_uid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "segments" */
export type Segments_Aggregate = {
  __typename?: 'segments_aggregate';
  aggregate?: Maybe<Segments_Aggregate_Fields>;
  nodes: Array<Segments>;
};

/** aggregate fields of "segments" */
export type Segments_Aggregate_Fields = {
  __typename?: 'segments_aggregate_fields';
  avg?: Maybe<Segments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Segments_Max_Fields>;
  min?: Maybe<Segments_Min_Fields>;
  stddev?: Maybe<Segments_Stddev_Fields>;
  stddev_pop?: Maybe<Segments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Segments_Stddev_Samp_Fields>;
  sum?: Maybe<Segments_Sum_Fields>;
  var_pop?: Maybe<Segments_Var_Pop_Fields>;
  var_samp?: Maybe<Segments_Var_Samp_Fields>;
  variance?: Maybe<Segments_Variance_Fields>;
};


/** aggregate fields of "segments" */
export type Segments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Segments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Segments_Avg_Fields = {
  __typename?: 'segments_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "segments". All fields are combined with a logical 'AND'. */
export type Segments_Bool_Exp = {
  _and?: InputMaybe<Array<Segments_Bool_Exp>>;
  _not?: InputMaybe<Segments_Bool_Exp>;
  _or?: InputMaybe<Array<Segments_Bool_Exp>>;
  best_time?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  current_time?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  run_uid?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "segments" */
export enum Segments_Constraint {
  /** unique or primary key constraint on columns "id" */
  SegmentsPkey = 'segments_pkey',
  /** unique or primary key constraint on columns "uid" */
  SegmentsUidKey = 'segments_uid_key'
}

/** input type for incrementing numeric columns in table "segments" */
export type Segments_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "segments" */
export type Segments_Insert_Input = {
  best_time?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  current_time?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  run_uid?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Segments_Max_Fields = {
  __typename?: 'segments_max_fields';
  best_time?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  current_time?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  run_uid?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Segments_Min_Fields = {
  __typename?: 'segments_min_fields';
  best_time?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  current_time?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  run_uid?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "segments" */
export type Segments_Mutation_Response = {
  __typename?: 'segments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Segments>;
};

/** on_conflict condition type for table "segments" */
export type Segments_On_Conflict = {
  constraint: Segments_Constraint;
  update_columns?: Array<Segments_Update_Column>;
  where?: InputMaybe<Segments_Bool_Exp>;
};

/** Ordering options when selecting data from "segments". */
export type Segments_Order_By = {
  best_time?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  run_uid?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: segments */
export type Segments_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "segments" */
export enum Segments_Select_Column {
  /** column name */
  BestTime = 'best_time',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentTime = 'current_time',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  RunUid = 'run_uid',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "segments" */
export type Segments_Set_Input = {
  best_time?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  current_time?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  run_uid?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Segments_Stddev_Fields = {
  __typename?: 'segments_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Segments_Stddev_Pop_Fields = {
  __typename?: 'segments_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Segments_Stddev_Samp_Fields = {
  __typename?: 'segments_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "segments" */
export type Segments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Segments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Segments_Stream_Cursor_Value_Input = {
  best_time?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  current_time?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  run_uid?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Segments_Sum_Fields = {
  __typename?: 'segments_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "segments" */
export enum Segments_Update_Column {
  /** column name */
  BestTime = 'best_time',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentTime = 'current_time',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  RunUid = 'run_uid',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Segments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Segments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Segments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Segments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Segments_Var_Pop_Fields = {
  __typename?: 'segments_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Segments_Var_Samp_Fields = {
  __typename?: 'segments_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Segments_Variance_Fields = {
  __typename?: 'segments_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** fetch aggregated fields from the table: "games" */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table in a streaming manner: "games" */
  games_stream: Array<Games>;
  /** fetch data from the table: "runners" */
  runners: Array<Runners>;
  /** fetch aggregated fields from the table: "runners" */
  runners_aggregate: Runners_Aggregate;
  /** fetch data from the table: "runners" using primary key columns */
  runners_by_pk?: Maybe<Runners>;
  /** fetch data from the table in a streaming manner: "runners" */
  runners_stream: Array<Runners>;
  /** fetch data from the table: "runs" */
  runs: Array<Runs>;
  /** fetch aggregated fields from the table: "runs" */
  runs_aggregate: Runs_Aggregate;
  /** fetch data from the table: "runs" using primary key columns */
  runs_by_pk?: Maybe<Runs>;
  /** fetch data from the table in a streaming manner: "runs" */
  runs_stream: Array<Runs>;
  /** fetch data from the table: "segments" */
  segments: Array<Segments>;
  /** fetch aggregated fields from the table: "segments" */
  segments_aggregate: Segments_Aggregate;
  /** fetch data from the table: "segments" using primary key columns */
  segments_by_pk?: Maybe<Segments>;
  /** fetch data from the table in a streaming manner: "segments" */
  segments_stream: Array<Segments>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootGames_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGames_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Games_Stream_Cursor_Input>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootRunnersArgs = {
  distinct_on?: InputMaybe<Array<Runners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Runners_Order_By>>;
  where?: InputMaybe<Runners_Bool_Exp>;
};


export type Subscription_RootRunners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Runners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Runners_Order_By>>;
  where?: InputMaybe<Runners_Bool_Exp>;
};


export type Subscription_RootRunners_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootRunners_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Runners_Stream_Cursor_Input>>;
  where?: InputMaybe<Runners_Bool_Exp>;
};


export type Subscription_RootRunsArgs = {
  distinct_on?: InputMaybe<Array<Runs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Runs_Order_By>>;
  where?: InputMaybe<Runs_Bool_Exp>;
};


export type Subscription_RootRuns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Runs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Runs_Order_By>>;
  where?: InputMaybe<Runs_Bool_Exp>;
};


export type Subscription_RootRuns_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootRuns_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Runs_Stream_Cursor_Input>>;
  where?: InputMaybe<Runs_Bool_Exp>;
};


export type Subscription_RootSegmentsArgs = {
  distinct_on?: InputMaybe<Array<Segments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Segments_Order_By>>;
  where?: InputMaybe<Segments_Bool_Exp>;
};


export type Subscription_RootSegments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Segments_Order_By>>;
  where?: InputMaybe<Segments_Bool_Exp>;
};


export type Subscription_RootSegments_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSegments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Segments_Stream_Cursor_Input>>;
  where?: InputMaybe<Segments_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  last_login_at: Scalars['timestamptz']['output'];
  uid: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_login_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "uid" */
  UsersUidKey = 'users_uid_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_login_at?: InputMaybe<Scalars['timestamptz']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_login_at?: Maybe<Scalars['timestamptz']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_login_at?: Maybe<Scalars['timestamptz']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_login_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastLoginAt = 'last_login_at',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_login_at?: InputMaybe<Scalars['timestamptz']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_login_at?: InputMaybe<Scalars['timestamptz']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastLoginAt = 'last_login_at',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type InsertGameMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertGameMutation = { __typename?: 'mutation_root', insert_games_one?: { __typename?: 'games', name: string, uid: string } | null };

export type InsertRunMutationVariables = Exact<{
  attempt_count?: InputMaybe<Scalars['Int']['input']>;
  game_uid?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertRunMutation = { __typename?: 'mutation_root', insert_runs?: { __typename?: 'runs_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'runs', attempt_count: number, game_uid: string, uid: string }> } | null };

export type InsertRunnerMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertRunnerMutation = { __typename?: 'mutation_root', insert_runners_one?: { __typename?: 'runners', uid: string, user_uid: string } | null };

export type InsertSegmentsMutationVariables = Exact<{
  segments: Array<Segments_Insert_Input> | Segments_Insert_Input;
}>;


export type InsertSegmentsMutation = { __typename?: 'mutation_root', insert_segments?: { __typename?: 'segments_mutation_response', returning: Array<{ __typename?: 'segments', index: number, best_time: string, current_time: string, name: string, run_uid: string, uid: string }> } | null };

export type GetGameQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetGameQuery = { __typename?: 'query_root', games: Array<{ __typename?: 'games', uid: string, name: string }> };

export type FetchGameByNameQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchGameByNameQuery = { __typename?: 'query_root', games: Array<{ __typename?: 'games', uid: string, name: string }> };

export type FetchRunsByRunnerQueryVariables = Exact<{
  runner_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchRunsByRunnerQuery = { __typename?: 'query_root', runs: Array<{ __typename?: 'runs', attempt_count: number, game_uid: string, runner_uid: string, uid: string }> };

export type FetchRunnerByUserIdQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchRunnerByUserIdQuery = { __typename?: 'query_root', runners: Array<{ __typename?: 'runners', name: string, uid: string, user_uid: string }> };


export const InsertGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_games_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]} as unknown as DocumentNode<InsertGameMutation, InsertGameMutationVariables>;
export const InsertRunDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertRun"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attempt_count"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"game_uid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_runs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"attempt_count"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attempt_count"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"game_uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"game_uid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attempt_count"}},{"kind":"Field","name":{"kind":"Name","value":"game_uid"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]} as unknown as DocumentNode<InsertRunMutation, InsertRunMutationVariables>;
export const InsertRunnerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertRunner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_runners_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"user_uid"}}]}}]}}]} as unknown as DocumentNode<InsertRunnerMutation, InsertRunnerMutationVariables>;
export const InsertSegmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertSegments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"segments"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"segments_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_segments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"segments"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"best_time"}},{"kind":"Field","name":{"kind":"Name","value":"current_time"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"run_uid"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]} as unknown as DocumentNode<InsertSegmentsMutation, InsertSegmentsMutationVariables>;
export const GetGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"games"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetGameQuery, GetGameQueryVariables>;
export const FetchGameByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchGameByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"games"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FetchGameByNameQuery, FetchGameByNameQueryVariables>;
export const FetchRunsByRunnerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchRunsByRunner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runner_uid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"runs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"runner_uid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runner_uid"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attempt_count"}},{"kind":"Field","name":{"kind":"Name","value":"game_uid"}},{"kind":"Field","name":{"kind":"Name","value":"runner_uid"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]} as unknown as DocumentNode<FetchRunsByRunnerQuery, FetchRunsByRunnerQueryVariables>;
export const FetchRunnerByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchRunnerByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"runners"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_uid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"user_uid"}}]}}]}}]} as unknown as DocumentNode<FetchRunnerByUserIdQuery, FetchRunnerByUserIdQueryVariables>;