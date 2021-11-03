import React, { useState } from 'react'
import { connect } from 'react-redux'
import EditIntro from './EditIntro'

const Intro = ({ header }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div id="header">
      <h1 id="title"> Hey this is me!</h1>
      {isEditing && (
        <EditIntro header={header} setIsEditing={setIsEditing} />
      )}
      {!isEditing
      && (
      <>
        <div id="intro">
          <img src={header.image} alt="" />
          <p>
            {header.descr}
          </p>
        </div>
        <button
          type="button"
          id="edit-intro"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
      )}
    </div>
  )
}
const mapStateToProps = state => ({
  header: state.header,
})

export default connect(mapStateToProps)(Intro)
