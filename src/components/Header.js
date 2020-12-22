import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Container>
      <div className='starter-template text-center mt-5'>
        <h1>Article Suggestion Form</h1>
        <p className='lead'>
          Hi There! 👋🏾 
        </p>
        <p className='lead'>
          I love writing Technical articles. Do you have any suggestions or a topic/tutorial you would love to read about? Submit the title in the form below and checkout my blogging site for updates!
        </p>
      </div>
    </Container>
  )
}

export default Header
