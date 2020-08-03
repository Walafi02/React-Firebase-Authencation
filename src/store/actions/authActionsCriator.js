import {
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNOUT_ERROR,
  SIGNOUT_SUCCESS
} from './actionsTypes'

import firebase from '../../utils/firebase'

export const signup = (email, password) => {
  return (dispatch) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase.auth().onAuthStateChanged((user) => {
            if (user)
              dispatch({
                type: SIGNUP_SUCCESS,
                payload: {
                  authMsg: `Success on user register`,
                  email: user.email
                }
              })
            else
              dispatch({
                type: SIGNUP_ERROR,
                payload: {
                  authMsg: 'No connection'
                }
              })
          })
        })
        .catch((error) => {
          dispatch({
            type: SIGNUP_ERROR,
            payload: {
              authMsg: `Error on create user: ${error}`
            }
          })
        })
    } catch (error) {
      dispatch({
        type: SIGNUP_ERROR,
        payload: { authMsg: `Error on connection with firebase: ${error}` }
      })
    }
  }
}

export const signin = (email, password, callback) => {
  return (dispatch) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data) => {
          dispatch({
            type: SIGNIN_SUCCESS,
            payload: {
              authMsg: `Success on user login`,
              email: data.user.email
            }
          })
          callback()
        })
        .catch((error) => {
          dispatch({
            type: SIGNIN_ERROR,
            payload: {
              authMsg: `Error on user login: ${error}`
            }
          })
          callback()
        })
    } catch (error) {
      dispatch({
        type: SIGNIN_ERROR,
        payload: { authMsg: `Error connection with firebase: ${error}` }
      })
      callback()
    }
  }
}

export const signout = (callback) => {
  return (dispatch) => {
    try {
      firebase.auth().signOut()
        .then(() => {
          dispatch({
            type: SIGNOUT_SUCCESS,
            payload: { authMsg: `success on user logout` }
          })
          callback()
        })
        .catch((error) => {
          dispatch({
            type: SIGNOUT_ERROR,
            payload: {
              authMsg: `Erro on logout: ${error}`
            }
          })
          callback()
        })
    } catch (error) {
      dispatch({
        type: SIGNOUT_ERROR,
        payload: { authMsg: `Error on connection with firebase: ${error}` }
      })
      callback()
    }
  }
}