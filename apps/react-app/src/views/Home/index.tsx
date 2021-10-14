import {
  Switch,
  Route,
} from "react-router-dom";
import Account from "../Account";
import Todo from "../Todo";

const Home = () => {
  return (
    <>
      <Switch>
        <Route path='/account' component={Account} />
        <Route path='/' component={Todo} />
      </Switch>
    </>
  )
}

export default Home
