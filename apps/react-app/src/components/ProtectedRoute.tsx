import { useAuth0 } from "@auth0/auth0-react"
import { Redirect, Route } from "react-router-dom"

type Props = {
  path: string,
  component: React.FunctionComponent<any>
}

const ProtectedRoute = ({ path, component: Component, ...restProps }: Props) => {
  const { isAuthenticated } = useAuth0()

  return <Route
    path={path}
    component={(props: { [x: string]: any }) => {
      if (!isAuthenticated) {
        return <Redirect to="/login" />
      }

      return <Component {...props} />
    }}
    {...restProps}
  >
  </Route >
}

export default ProtectedRoute
