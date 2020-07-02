import { createStore } from 'redux';

const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const getPage = () => ({ type: GET_CURRENT_PAGE });
export const setPage = currentPage => ({
  type: SET_CURRENT_PAGE, currentPage,
});

const initialState = {
  currentPage: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_PAGE:
      return {
        ...state.currentPage,
      };
    case SET_CURRENT_PAGE:
      console.log(state);
      console.log(action);

      return {
        state: action.currentPage,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);
