import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editIntro } from '../actions'

const EditIntro = ({ header, dispatchEditIntro, setIsEditing }) => {
  // const [isEditButtonVisible, changeIsEditButtonVisible] = useState(true)
  const [image, setImage] = useState(header.image)
  const [descr, setDescr] = useState(header.descr)

  return (
    <div id="intro-form">
      <h3> Image </h3>
      <input type="text" id="image" value={image} onChange={e => setImage(e.target.value)} placeholder="Enter image url" />
      <h3> Description </h3>
      <textarea id="descr" value={descr} onChange={e => setDescr(e.target.value)} placeholder="Enter description" />
      <br />
      <button
        type="button"
        id="save"
        onClick={() => {
          setIsEditing(false)
          dispatchEditIntro(image, descr)
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
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (image, descr) => dispatch(editIntro(image, descr)),
})

const mapStateToProps = state => ({
  header: state.header,
})

export default connect(mapStateToProps, mapDispatchToProps)(EditIntro)
