import React from 'react'
import { ModalProps } from 'types'
import Modal from './Modal'

const UpdateTransaction: React.FC<ModalProps> = ({ open, hide }) => {
  return (
    <Modal open={open} hide={hide}>
      <div>Hello world</div>
    </Modal>
  )
}

export default UpdateTransaction