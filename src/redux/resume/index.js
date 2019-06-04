import actionTypes from './actionTypes';
const {GET, GET_SUCCESS, GET_FAIL} = actionTypes;

const resumeReducer = (state = {}, action) => {
  const result = {...state};
  switch(action.type) {
    case GET:
      delete result.data;
      delete result.error;
      return result;
    case GET_SUCCESS:
      delete result.error;
      result.data = action.payload.data;
      return result;
    case GET_FAIL:
      delete result.data;
      result.error = action.payload;
      return result;
    default:
      return result;
  }
}

export default resumeReducer;
