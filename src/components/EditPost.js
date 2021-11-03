import React, { useState } from 'react'

import { connect } from 'react-redux'

import { editPost, changeEditMode, deletePost } from '../actions'

const EditPost = ({
  post, dispatchEditPost, dispatchChangeEditMode, dispatchDeletePost,
}) => {
  const [title, setTitle] = useState(post.title)
  const [image, setImage] = useState(post.image)
  const [descr, setDescr] = useState(post.descr)

  return (
    <div key={post.id} className="post-form">
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
          dispatchEditPost(post.id, title, image, descr)
          dispatchChangeEditMode(post.id)
        }}
      >
        Save
      </button>
      <button
        type="button"
        id="cancel"
        onClick={() => dispatchChangeEditMode(post.id)}
      >
        Cancel
      </button>
      <button
        type="button"
        id="delete"
        onClick={() => dispatchDeletePost(post.id)}
      >
        Delete
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: (id, title, image, descr) => dispatch(editPost(id, title, image, descr)),
  dispatchChangeEditMode: id => dispatch(changeEditMode(id)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
})

const mapStateToProps = state => ({
  posts: state.posts,
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
