import { SECTIONS_DATA } from './sections-data';
const INITIAL_STATE = {
  sectionsData: SECTIONS_DATA,
};

const sectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sectionsReducer;
