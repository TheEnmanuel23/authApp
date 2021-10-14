import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "react-bootstrap";
import {
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components'
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./views/Home";
import Login from "./views/Login";

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 60%;
`

function Content() {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return (
      <Wrapper>
        <Spinner animation="border" />
      </Wrapper>
    )
  }

  return (
      <Wrapper>
        <Switch>
          <Route path='/login' component={Login} />
          <ProtectedRoute path='/' component={Home} />
        </Switch>
      </Wrapper>
  )
}


function App() {
  return (
    <div>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
