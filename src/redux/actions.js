export const SET_USER_DETAILS = 'SET_USER_DETAILS';
export const SET_USER_REPOS = 'SET_USER_REPO';
export const SET_USER = 'SET_USER';

export const getUserDetails = (value) => async (dispatch) => {
    let details = await fetch(
        "https://api.github.com/users/" + value
      )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    dispatch({ type: SET_USER_DETAILS, payload: details });
};

export const getUserRepos = (value) => async (dispatch) => {
    let repos = await fetch(
        "https://api.github.com/users/" + value + "/repos"
      )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    dispatch({ type: SET_USER_REPOS, payload: repos });
};

export const setUser = (value) => {
    return {type: SET_USER, payload: value}
}

export const resetUser = () => {
    return {type: SET_USER, payload: ''}
}

export const resetUserDetails = () => {
    return {type: SET_USER_DETAILS, payload: {}}
}

export const resetUserRepos = () => {
    return {type: SET_USER_REPOS, payload: []}
}
