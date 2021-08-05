import { types } from '../types';

export function addUser(payload) {
  return {
    type: types.USER_ADD,
    payload,
  };
}

export function removeUser() {
  return {
    type: types.USER_REMOVE,
    payload: {},
  };
}
