import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'reactstrap';

export default () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  if (isAuthenticated) return null

  return <Button onClick={loginWithRedirect}>
    Log in
  </Button>
}
