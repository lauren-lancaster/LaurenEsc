import { ChangeEvent, FormEvent, useState } from 'react'
import * as actions from '../actions/user'
import { useAppDispatch } from '../hooks/hooks'
import { User } from '../../models/users'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  viewForm: boolean
  setViewForm: Dispatch<SetStateAction<boolean>>
  viewStart: boolean
  setViewStart: Dispatch<SetStateAction<boolean>>
}

function StartGameForm(props: Props) {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({} as User)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    //set form data
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      currentLevelId: 0,
      time: 0,
      complete: false,
      activePlayer: true,
    })
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(actions.addUserThunk(formData))
    props.setViewForm(!props.viewForm)
    props.setViewStart(!props.viewStart)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="enter-name">
          <label htmlFor="username" className="form-label">
            ENTER NAME
          </label>
          <input
            autoComplete="off"
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            className="input-field"
            placeholder="player name"
            required
          />
        </div>
        <input
          className="blue-button"
          type="submit"
          id="submit"
          value="Ready"
        />
      </form>
    </>
  )
}

export default StartGameForm
