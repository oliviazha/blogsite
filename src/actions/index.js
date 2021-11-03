let idx = 0

export const EDIT_INTRO = 'EDIT_INTRO'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const CHANGE_EDIT_MODE = 'CHANGE_EDIT_MODE'

export const editIntro = (image, descr) => ({
  type: EDIT_INTRO,
  image,
  descr,
})

export const addPost = (title, image, descr) => ({
  type: ADD_POST,
  id: idx++,
  title,
  image,
  descr,
  deleted: false,
  isEditing: false,
})

export const deletePost = id => ({
  type: DELETE_POST,
  id,
})

export const editPost = (id, title, image, descr) => ({
  type: EDIT_POST,
  id,
  title,
  image,
  descr,
})

export const changeEditMode = id => ({
  type: CHANGE_EDIT_MODE,
  id,
})
