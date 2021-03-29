import { Container, Row, Col, Tab, Nav, Image }  from 'react-bootstrap'

const Testimonials = () => {

    const testimonials = [
        
        {
            name: "Margaret E.",
            description: '"This is fantastic! Thanks so much guys!"',
            url: '/testimonials-1.jpg'
        },
        {
            name: "Fred S.",
            description: `"Ideamarket is amazing. I've been using it to earn lots of profits."`,
            url: '/testimonials-2.jpg'
        },
        {
            name: "Sarah W.",
            description: '"Thanks so much for making idemarket available to us!"',
            url: '/testimonials-3.jpg'
        }
     ]
    


    return (
       <section id="testimonials" className="h-100 mt-3 text-center">
           <Container id="people" className="shadow-lg p-3 mb-5 bg-white rounded">
                <h1 class="mb-4 p-3 titles text-right font-weight-bold">What people are saying...</h1>
                <Row className="p-3">
                    {
                        testimonials.map( ({name, description, url }, i) => (
                            <Col lg={4} key={i}>
                                <div className="mx-auto mb-5 mb-lg-0">
                                    <Image 
                                        fluid={true} 
                                        className="rounded-circle mb-3" 
                                        src={url} 
                                        width="50%"
                                        height="50%"
                                        alt=""

                                    />
                                    <h5>{name}</h5>
                                    <p class="font-weight-light mb-0">{description}</p>
                                </div>
                            </Col>
                        ))
                    }

                </Row>
           </Container>
       </section>
    )
}

export default Testimonials;