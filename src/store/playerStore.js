import { number, string } from 'prop-types'
import { createStore } from 'redux'

const initialState = {
  playerName: string,
  playerMMR: number,
}

const loadStateFromApi = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'SET_LOAD_STATE_FROM_API':
      return { ...state, ...rest }
    default:
      return state
  }
}

const storePlayers = createStore(loadStateFromApi)
export default storePlayers
