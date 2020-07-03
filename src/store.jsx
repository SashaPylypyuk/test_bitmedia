import { createStore } from 'redux';

const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS = 'SET_USERS';
const SET_USER_BY_ID = 'GET_USER_BY_ID';

export const getPage = () => ({ type: GET_CURRENT_PAGE });
export const setPage = currentPage => ({
  type: SET_CURRENT_PAGE, currentPage,
});
export const setUsers = users => ({
  type: SET_USERS, users,
});

const initialState = {
  currentPage: 0,
  users: [],
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case GET_CURRENT_PAGE:
      return {
        ...state.currentPage,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        state: action.currentPage,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);
