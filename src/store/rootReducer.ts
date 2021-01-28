import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { reducer as formReducer } from 'redux-form';

import loadingReducer from './loading/reducer';
import { DELETE_USER, IUserState, userReducer } from './user/reducer';

export interface IStoreState {
  isLoading: boolean;
  user: IUserState;
  form: any;
  router: RouterState;
}

export const createRootReducer = (history: History) => (
  combineReducers<IStoreState>({
    isLoading: loadingReducer,
    user: userReducer,
    form: formReducer.plugin({
      USER_FORM: (state, action) => {
        switch (action.type) {
          case DELETE_USER:
            return null;       // <--- blow away form data
          default:
            return state;
        }
      },
    }),
    router: connectRouter(history),
  })
);
