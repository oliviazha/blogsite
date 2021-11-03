import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeEditMode } from '../actions'
import EditPost from './EditPost'
import AddPost from './AddPost'

const BlogList = ({ posts, dispatchChangeEditMode }) => (
  <>
    <div id="blog-title">
      <h1> Blog Posts </h1>
      <AddPost />
    </div>
    <div id="blog-list">
      {posts.map(post => {
        if (!post.deleted) {
          if (!post.isEditing) {
            return (
              <div key={post.id} className="post">
                <h2 className="post-title">
                  Post #
                  { post.id + 1 }
                  :
                  { post.title }
                </h2>
                <img src={post.image} alt="image" />
                <p>
                  { post.descr }
                </p>
                <button
                  type="button"
                  id="edit-post"
                  onClick={() => dispatchChangeEditMode(post.id)}
                >
                  Edit Post
                </button>
              </div>
            )
          }
          return (
            <>
              <EditPost post={post} />
            </>
          )
        }
        return null
      })}
    </div>
  </>
)

const mapDispatchToProps = dispatch => ({
  dispatchChangeEditMode: id => dispatch(changeEditMode(id)),
})

const mapStateToProps = state => ({
  posts: state.posts,
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogList)
