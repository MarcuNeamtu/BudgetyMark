import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import Topbar from './Topbar'
import Sidebar from './Sidebar'

const ClientView: React.FC = () => {
  return (
    <Container>
      <Topbar />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </Container>
  )
}

export default ClientView

const Container = styled.div`
  ${(p) => {
    return `
      padding-top: ${p.theme.topBarHeight}px;
      padding-left: ${p.theme.sideBarWidth}px;
    `
  }}
`

const Main = styled.div`
  padding: ${(p) => p.theme.contentGap}px;
`