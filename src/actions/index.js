import jsonPlaceholder from '../apis/jsonPlaceHolder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
export const fetchUser = () => async dispatch => {
  const response =  await jsonPlaceholder.get(`/user/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data});

};
