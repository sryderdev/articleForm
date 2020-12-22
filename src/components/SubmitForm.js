import Iframe from 'react-iframe'
import { Container, Form } from 'react-bootstrap'

const SubmitForm = () => {
  return (
    <>
      <Container className='starter-template text-center mt-5'>
        <Form>
          {/* <iframe class="airtable-embed" src="https://airtable.com/embed/shrjETyScwwO77l1O?backgroundColor=green" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>*/}
          <Iframe
            src='https://airtable.com/embed/shrjETyScwwO77l1O?backgroundColor=green'
            width='450px'
            height='450px'
            id='myId'
            className='airtable-embed'
            display='initial'
            position='relative'
          />
        </Form>
      </Container>
    </>
  )
}

export default SubmitForm
