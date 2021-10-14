import {
  Switch,
  Route,
} from "react-router-dom";
import Account from "../Account";

const Home = () => {
  return (
    <>
      <Switch>
        <Route path='/account' component={Account} />
        <Route path='/' component={() => <p>list</p>} />
      </Switch>
    </>
  )
}

export default Home
