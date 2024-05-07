import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LoginBackground from 'assets/login_background.png'
import Logo from 'assets/Logo'
import { Checkbox, Input, Label } from 'components/Inputs'
import Button from 'components/Button'

const Register: React.FC = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Container>
      <LeftWrapper>
        <Content>
          <Logo width={150} />

          <FormContainer>
            <FormHeader>
              <H1>Create an account</H1>
              <Sub>
                Please sign up for your personal account if you want to use all
                our premium products
              </Sub>
            </FormHeader>

            <div>
              <Label>Full Name</Label>
              <Input placeholder="Enter your full name" />
            </div>

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
              label="I agree with the Terms & Conditions"
            />

            <Button type="primary" size="large">
              Sign up
            </Button>
          </FormContainer>

          <Info>
            {`Already have an account?`}{' '}
            <BlackLink to="/auth/login">Sign in here</BlackLink>
          </Info>
        </Content>
      </LeftWrapper>
      <RightWrapper />
    </Container>
  )
}

export default Register

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