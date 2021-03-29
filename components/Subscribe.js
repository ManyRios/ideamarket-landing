import { Container, Row,Col, Form, Button }  from 'react-bootstrap'

 const Subscribe = () => {
    return (
        <section id="subscribe" className="p-5 m-5">
            <Container bg={"dark"} className="text-center">
                <h1 className="titles font-weight-bold mb-5">Subscribe to our newsletter</h1>
                <Form>
                    <Form.Row >
                        <Col md={10}>
                            <Form.Control placeholder="email" type="email" />
                        </Col>
                        <Col md={2}>
                            <Button variant={"primary"}>Subscribe</Button>{' '}
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        </section>
    )
}

export default Subscribe;