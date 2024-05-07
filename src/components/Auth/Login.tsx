import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LoginBackground from "@/assets/login_background.png"
import Logo from "@/assets/Logo"
import { Checkbox, Input, Label } from '@/components/Inputs'
import Button from '@/components/Button'

const Login: React.FC = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Container>
      <LeftWrapper>
        <Content>
          <Logo width={150} />

          <FormContainer>
            <FormHeader>
              <H1>Sign in</H1>
              <Sub>
                Please sign in to your personal account if you want to use all
                our premium products
              </Sub>
            </FormHeader>

            <div>
              <Label>Username</Label>
              <Input placeholder="Enter your username" />
            </div>

            <div>
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
            </div>

            <Checkbox
              checked={checked}
              onClick={() => setChecked(!checked)}
              label="Remember me"
            />

            <Button type="primary" size="large">
              Sign in
            </Button>
          </FormContainer>

          <Info>
            {`Don't have an account?`}{' '}
            <BlackLink to="/auth/register">Sign up here</BlackLink>
          </Info>
        </Content>
      </LeftWrapper>
      <RightWrapper />
    </Container>
  )
}

export default Login

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

const LeftWrapper = styled.div`
  flex: 1;
`

const RightWrapper = styled.div`
  flex: 1 1;
  background-image: url(${LoginBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const Content = styled.div`
  height: 100%;
  width: 500px;
  margin-left: auto;
  padding: 40px 70px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FormHeader = styled.div`
  margin-bottom: 30px;
`

const H1 = styled.h1`
  font-weight: 400;
  margin-bottom: 10px;
`

const Sub = styled.p`
  color: ${(p) => p.theme.colors.textSecondary};
  font-weight: 300;
`
const Info = styled.div`
  color: ${(p) => p.theme.colors.textSecondary};
`

const BlackLink = styled(Link)`
  &,
  &:focus {
    color: #252631;
    text-decoration: none;
  }

  &:active,
  &:hover {
    text-decoration: underline;
  }
`