// @flow

export type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  trailer: string,
  poster: string,
  rating?: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};
//an ActionType can be one of these strings.
declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_API_DATA';
// A & P are generic action types
// < is like parameters you're giving
declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

export type Action = ActionT<'SET_SEARCH_TERM', string> | ActionT<'ADD_API_DATA', Show>;
