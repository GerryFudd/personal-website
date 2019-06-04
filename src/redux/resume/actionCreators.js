import actionTypes from './actionTypes';
const {GET} = actionTypes;

export const get = () => ({
  type: GET,
  payload: {
    request: {
      url: '/resume'
    }
  }
});
