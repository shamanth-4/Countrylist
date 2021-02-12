import jsonHolder from '../apis/jsonHolder';

 export const fetchPosts = () => async dispatch => {
  const response = await jsonHolder.get('/search?apiType=suggestions&siteID=th');

  dispatch({ type: 'FETCH_POSTS', payload: response });
};

