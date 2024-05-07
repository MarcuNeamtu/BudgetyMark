import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import Logo from 'assets/Logo'
import { ROUTES, ROUTE_NAMES } from 'lib/constants'
import MenuIcon from 'assets/MenuIcon'

const Topbar: React.FC = () => {
  const location = useLocation()

  const route = location.pathname.split('/')[1]
  const isRoute = (ROUTES as readonly string[]).includes(route)

  return (
    <Container>
      <LogoContainer>
        <Logo width={120} />
      </LogoContainer>
      <TopMenu>
        {isRoute && (
          <TabTitle>
            <MenuIcon width={20} />
            {ROUTE_NAMES[route as keyof typeof ROUTE_NAMES]}
          </TabTitle>
        )}
        <UserMenu>User</UserMenu>
      </TopMenu>
    </Container>
  )
}

export default Topbar

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(p) => p.theme.topBarHeight}px;
  border-bottom: 1px solid #e9eef2;

  display: grid;
  grid-template-columns: ${(p) => p.theme.sideBarWidth}px 1fr;
  background: ${(p) => p.theme.menuBackground};
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid #e9eef2;
  padding: ${({ theme: t }) =>
    `${t.menuMarginVertical}px ${t.menuMarginHorizontal}px`};
`

const TopMenu = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme: t }) =>
    `${t.menuMarginVertical}px ${t.menuMarginHorizontal}px`};
`

const UserMenu = styled.div`
  margin-left: auto;
`

const TabTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`