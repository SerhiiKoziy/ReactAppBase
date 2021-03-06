interface IAction {
  type: string;
  payload?: any;
}

export const actionFactory = (actionType: any, value?: any): IAction => {
  const action: IAction = { type: actionType };

  if (typeof value !== 'undefined') {
    action.payload = value;
  }

  return action;
};
