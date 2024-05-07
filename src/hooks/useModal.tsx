import React, { useState } from 'react'
import { ModalProps } from 'types'

type OmitModalProps<T> = Omit<T, 'open' | 'hide'>

const useModal = <T extends ModalProps>(
  Modal: React.FC<T>,
  defaultProps?: OmitModalProps<T>
): [React.ReactNode, (data: OmitModalProps<T>) => void, boolean] => {
  const [isOpen, setIsOpen] = useState(false)
  const [props, setProps] = useState<OmitModalProps<T>>(
    defaultProps || ({} as T)
  )

  const showModal = (data: OmitModalProps<T>) => {
    setProps(data)
    setIsOpen(true)
  }

  const hide = () => setIsOpen(false)

  const RenderedModal = isOpen && (
    <Modal {...(props as T)} open={isOpen} hide={hide} />
  )

  return [RenderedModal, showModal, isOpen]
}

export default useModal