import { START_FETCH_LIST, startFetchList } from '../redux/actions/list';

describe('Redux tests', () => {
  it('Should return start fetch list action', () => {
    const expectedAction = {
      type: START_FETCH_LIST
    };
    expect(startFetchList()).toEqual(expectedAction);
  });
});