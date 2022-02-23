import { SET_USER_DETAILS, SET_USER_REPOS, SET_USER } from './actions';

const initialState = { userDetails: {}, userRepos: [], user: '' };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DETAILS:
            return { ...state, userDetails: action.payload };
        case SET_USER_REPOS:
            return { ...state, userRepos: action.payload };
        case SET_USER:
            return { ...state, user: action.payload };
      default:
        return state;
    }
  }