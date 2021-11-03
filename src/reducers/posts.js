import {
  ADD_POST, DELETE_POST, EDIT_POST, CHANGE_EDIT_MODE,
} from '../actions'

const default_state = []

const PostsReducer = (state = default_state, action) => {
  const {
    type, id, title, image, descr,
  } = action

  switch (type) {
    case ADD_POST:
      return [...state, {
        id, title, image, descr,
      }]
    case DELETE_POST:
      return state.map(post => {
        if (post.id === id) {
          return { ...post, deleted: true }
        }
        return post
      })
    case EDIT_POST:
      return state.map(post => {
        if (post.id === id) {
          return {
            ...post, title, image, descr,
          }
        }
        return post
      })
    case CHANGE_EDIT_MODE:
      return state.map(post => {
        if (post.id === id) {
          return { ...post, isEditing: !post.isEditing }
        }
        return post
      })
    default:
      return state
  }
}

export default PostsReducer
