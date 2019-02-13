import { SET_LIST } from '../actions/list';

const INITIAL_STATE = [];

export default function list(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LIST:
      return action.list;
    default:
      return state;
  }
}
