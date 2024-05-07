import React, { PropsWithChildren, useRef } from 'react'
import styled from 'styled-components'
import { ModalProps } from 'types'

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  open,
  hide,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      hide()
    }
  }

  if (!open) {
    return null
  }

  return (
    <Overlay onClick={closeModal}>
      <ModalWrapper ref={modalRef}>
        <CloseButton onClick={hide}>&times;</CloseButton>
        {children}
      </ModalWrapper>
    </Overlay>
  )
}

export default Modal

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalWrapper = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
`

const CloseButton = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  font-size: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
`