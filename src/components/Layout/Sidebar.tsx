import React from 'react'
import styled, { WebTarget } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import ProgressIcon from 'assets/ProgressIcon'
import ArrowRightIcon from 'assets/ArrowRightIcon'
import BriefcaseIcon from 'assets/BriefcaseIcon'
import {
  ROUTE_BUDGET,
  ROUTE_DASHBOARD,
  ROUTE_TRANSACTIONS,
  ROUTE_NAMES,
  ROUTES,
} from 'lib/constants'

const ICONS = {
  [ROUTE_DASHBOARD]: ProgressIcon,
  [ROUTE_TRANSACTIONS]: ArrowRightIcon,
  [ROUTE_BUDGET]: BriefcaseIcon,
} as const

const Sidebar: React.FC = () => {
  const location = useLocation()

  const isActive = (route: string) => {
    const key = location.pathname.split('/')[1]
    return route === key
  }

  return (
    <Container>
      <Menu>
        {ROUTES.map((route) => {
          const Icon = ICONS[route]

          const active = isActive(route)

          const fill = active ? '#ffab2b' : '#778ca2'
          const color = active ? '#252361' : '#778ca2'

          return (
            <ItemLink key={route} to={route} isSelected={active}>
              <Icon fill={fill} />{' '}
              <span style={{ color }}>{ROUTE_NAMES[route]}</span>
            </ItemLink>
          )
        })}
      </Menu>
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  position: fixed;
  top: ${(p) => p.theme.topBarHeight}px;
  left: 0;
  width: ${(p) => p.theme.sideBarWidth}px;
  height: 100vh;
  border-right: 1px solid #e9eef2;
  background: ${(p) => p.theme.menuBackground};
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`

const ItemLink = styled<WebTarget & { isSelected?: boolean }>(Link)`
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  gap: 15px;
  padding: ${({ theme: t }) => `15px ${t.menuMarginHorizontal}px`};
  text-transform: uppercase;
  text-decoration: none;
  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: ${(p) =>
    p.isSelected ? p.theme.colors.primary : 'transparent'};
`