import { useState } from 'react'
import Modal from 'react-docs/Modal'

/** Default Modal (without any custom props). Click on Open Modal to view modal. */
const BasicModal = () => {
  const [modal, triggerModal] = useState(false)

  return (
    <div>
      <button className="button" onClick={() => triggerModal(!modal)}>
        Open Modal
      </button>

      <Modal
        title="Modal Title"
        body="Welcome to my modal."
        toggle={modal}
        callback={() => triggerModal(false)}
      />
    </div>
  )
}

export default BasicModal
