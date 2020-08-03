import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { signin } from '../store/actions/authActionsCriator'
import Card from './Card'

export default function SignIn() {
  const dispatch = useDispatch()
  const userMsg = useSelector(state => state.authReducer.authMsg)

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(
      signin(login, password, () => {})
    )

    setLogin('')
    setPassword('')
  }

  return (
    <Card title="Login Page">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Login: </label>
          <input className="form-control" value={login} onChange={e => setLogin(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Password: </label>
          <input className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <input type="submit" value="Enter" className="btn btn-primary" />
      </form>
      {userMsg &&
        <div className="alert alert-info" style={{ marginTop: '5px' }}>
          {userMsg}
        </div>
      }
    </Card>
  )
}
