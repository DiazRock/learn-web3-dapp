import {createContext, Dispatch, useContext} from 'react';

export type State = {
  index: number;
  validate: number;
  network: string;
  address?: string;
};

type Action =
  | {type: 'SetIndex'; index: number}
  | {type: 'SetValidate'; validate: number}
  | {type: 'SetNetwork'; network: string}
  | {type: 'SetAddress'; address?: string};

const initialState = {
  index: 0,
  validate: 0,
  network: 'datahub',
};

function appStateReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SetIndex':
      return {...state, index: action.index};
    case 'SetValidate':
      return {...state, validate: action.validate};
    case 'SetNetwork':
      return {...state, network: action.network};
    case 'SetAddress':
      return {...state, address: action.address};
    default:
      return state;
  }
}

const PolygonContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const useAppState = () => useContext(PolygonContext);

export {PolygonContext, initialState, appStateReducer, useAppState};