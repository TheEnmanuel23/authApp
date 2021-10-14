import { useAuth0 } from '@auth0/auth0-react'
import Button from 'react-bootstrap/Button';


export default ({ text = 'Log in' }: { text?: string }) => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button
      onClick={loginWithRedirect}
      variant="primary"
      className="btn-margin"
    >
      {text}
    </Button>
  )
}
