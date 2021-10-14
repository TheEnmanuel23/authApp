import { useAuth0 } from "@auth0/auth0-react"
import { Container, Row, Col } from "react-bootstrap"
import Alert from "react-bootstrap/Alert"

const Account = () => {
  const { user = {}, isLoading } = useAuth0()

  if (isLoading) return <p>loading</p>

  return (
    <Container>
      <Row className="align-items-center justify-content-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt={user.name}
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <div>
            <strong>User:</strong> {user.name}
          </div>
          <div>
            <strong>Nickname:</strong> {user.nickname}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
        </Col>
      </Row>
      <Row>
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </Row>
      <Row>
        {!user.email_verified &&
          <Alert variant="danger">Unverified email</Alert>
        }
      </Row>
    </Container>
  )
}


export default Account
