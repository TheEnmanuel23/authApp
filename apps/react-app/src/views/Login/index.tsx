import { useAuth0 } from "@auth0/auth0-react"
import { Redirect } from "react-router-dom"
import LoginButton from "../../components/LoginButton"
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
  
  p {
    font-size: 50px;
    font-weight: bold;
  }
`

const Login = () => {
  const { isAuthenticated } = useAuth0()

  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <Wrapper>
      <p>Organize it all</p>
      <p>with Todo List</p>
      <LoginButton text="Get Started" />
    </Wrapper >
  )
}

export default Login
