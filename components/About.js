import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {


  return (
   <section id="about">
    <Container className="h-25 mt-4 about-container about-text shadow p-3 mb-5 bg-white rounded">
        
        
        <Row className="h-50 d-flex">
            
            <Col md={6} className="align-self-center p-text">
            <h1 className="font-weight-bold p-2 titles mb-4">About Ideamarket</h1>
            <h2>What is Ideamarket</h2>
                <div >
                    <p>
                    Idea markets use investment to establish credibility for ideas and narratives without trusting a centralized third party.
                    Idea markets use price discovery to advance discovery.
                    </p>
                    <h2>An intellectual gold mine</h2>
                    
                    <p>
                    Idea markets allow investors to profit by identifying and popularizing under-appreciated ideas. (I call this venture philosophy.)
                    Since anyone can participate, an “intellectual gold rush” will occur, as millions of people comb the internet to find obscure geniuses and usher them into the spotlight.
                    </p>
                </div>
           
                </Col>
                <Col md={6} className="d-flex ">
                    <div className="wrapper rounded-circle text-center p-3">
                        <Image
                            src="./logo_white.png" 
                            className="img position-relative mt-3"
                            width="60%"
                            height="90%"
                                
                        />
                    </div>
                </Col>
        </Row>
    </Container>
    </section>
  );
};

export default About;
