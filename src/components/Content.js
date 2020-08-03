import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { signout } from '../store/actions/authActionsCriator'

import Card from './Card'

export default function Content({ history }) {
  const dispatch = useDispatch()
  const firebaseAuth = useSelector(state => state.firebaseReducer.auth)

  const logout = () => {
    dispatch(signout(() => { }))
    history.push('/signin')
  }

  useEffect(() => {
    if (firebaseAuth.isLoaded && firebaseAuth.isEmpty)
      history.push('/signin')
  }, [firebaseAuth.isLoaded, firebaseAuth.isEmpty, history])

  return (
    <Card title="Content Page">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor, consequuntur aliquam tempore doloribus omnis possimus quae voluptatum at eius maxime non sequi ex corporis. Corrupti odit qui ipsa aliquid!

      <div style={{paddingTop: '10px', display: 'flex', justifyContent: 'flex-end'}}>
        <button className="btn btn-danger" onClick={() => logout()}>
          Logout
        </button>
      </div>
    </Card>
  )
}
