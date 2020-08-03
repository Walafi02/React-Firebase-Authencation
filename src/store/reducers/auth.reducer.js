import {
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNOUT_ERROR,
  SIGNOUT_SUCCESS
} from '../actions/actionsTypes'

const INITIAL_STATE = {
  authMsg: null,
  user: null
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS:
      return {
        ...state,
        authMsg: action.payload.authMsg,
        user: action.payload.email
      }

    case SIGNOUT_SUCCESS:
      return {
        ...state,
        authMsg: action.payload.authMsg,
        user: null
      }

    case SIGNUP_ERROR:
    case SIGNIN_ERROR:
    case SIGNOUT_ERROR:
      return {
        ...state,
        authMsg: action.payload.authMsg
      }
    default:
      return state
  }
}