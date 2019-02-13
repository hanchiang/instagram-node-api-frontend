export const SET_LIST = 'SET_LIST';
export const START_FETCH_LIST = 'START_FETCH_LIST';

export function startFetchList() {
  return { type: START_FETCH_LIST };
}

export function setList(list) {
  return {
    type: SET_LIST,
    list
  };
}
