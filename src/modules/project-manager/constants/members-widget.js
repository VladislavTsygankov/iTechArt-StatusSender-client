import {defineAction} from 'redux-define';

export const GET_FREE_USERS =  defineAction('GET_FREE_USERS', [
    'SUCCESS',
    'FAILURE',
    'REQUEST',
  ]);