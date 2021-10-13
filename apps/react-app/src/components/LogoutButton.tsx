
import { useAuth0 } from '@auth0/auth0-react'

export default () => {
  const { logout, isAuthenticated } = useAuth0()

  if (!isAuthenticated) return null

  return <button onClick={() => logout()}>
    Log out
  </button>
}
