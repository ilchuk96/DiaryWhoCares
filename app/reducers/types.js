import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type noteStateType = {
  +counter: string
};

export type Action = {
  +type: string
};

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
