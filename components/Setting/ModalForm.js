import React from 'react'
import styled from 'react-emotion'

import colors from '../Core/colors'
import UserForm from './UserForm'

const ModalContainer = styled.div`
  display: ${props => props.check ? 'block' : 'none'};
`

const Modal = styled.div`
  display: ${props => props.check ? 'block' : 'none'};
  background: ${colors.modalBackground};
`

const ModalForm = ({ check, handler }) => (
  <ModalContainer check={check}>
    <Modal
      check={check}
      handler={handler}
      className='modal animated fadeInUp'
    >
      <UserForm handler={handler} />
    </Modal>
  </ModalContainer>
)

export default ModalForm
