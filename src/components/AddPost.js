import React, { useState } from 'react'

import { connect } from 'react-redux'

import { addPost } from '../actions'

const AddPost = ({ dispatchAddPost }) => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [descr, setDescr] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      <button
        type="button"
        id="add-post"
        onClick={() => setIsEditing(!isEditing)}
      >
        Add Post
      </button>
      {isEditing
      && (
      <div className="post-form">
        <h3> Title </h3>
        <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter title" />
        <h3> Image </h3>
        <input type="text" id="image" value={image} onChange={e => setImage(e.target.value)} placeholder="Enter image url" />
        <h3> Description </h3>
        <textarea id="descr" value={descr} onChange={e => setDescr(e.target.value)} placeholder="Enter description" />
        <br />
        <button
          type="button"
          id="save"
          onClick={() => {
            setIsEditing(!isEditing)
            dispatchAddPost(title, image, descr)
          }}
        >
          Save
        </button>
        <button
          type="button"
          id="Cancel"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
      )}
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, image, descr) => dispatch(addPost(title, image, descr)),
})

export default connect(null, mapDispatchToProps)(AddPost)
