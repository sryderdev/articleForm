import { Container, Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import SubmitForm from '../components/SubmitForm'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <SubmitForm />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
