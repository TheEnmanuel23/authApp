import { useAuth0 } from '@auth0/auth0-react'
import Button from 'react-bootstrap/Button';

export default () => {
  const { logout } = useAuth0()


  return (
    <Button
      onClick={() => logout()}
      variant="danger"
      className="btn-margin"
    >
      Log out
    </Button>
  )
}
