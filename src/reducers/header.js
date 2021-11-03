import { EDIT_INTRO } from '../actions'

const default_state = { image: '', descr: '' }

const HeaderReducer = (state = default_state, action) => {
  const { type, image, descr } = action

  switch (type) {
    case EDIT_INTRO: {
      return { ...state, image, descr }
    }
    default:
      return state
  }
}

export default HeaderReducer
