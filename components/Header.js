import { Container, Row, Col, Button } from "react-bootstrap";
import ReactPlayer from 'react-player'


const Header = () => {

  return (
    <header id="masthead" className="mb-5">
        <Container id="hero-container" className="h-100"> 
            <Row noGutters={true} className="h-100 d-flex" >
              <Col md={4} className="header-text align-self-center ">
              
                  <div className=" text-light">
                    <h1 className=" font-weight-bold mb-5">
                      Bitcoin is "money without banks." Ideamarket is "credibility without media corporations."
                    </h1>
                  </div>
                  <Button id="header-btn" variant="primary"  href="https://ideamarket.io/">Get Started</Button>{' '}
                  
              </Col>
              <Col md={8} className="align-self-center text-center">
                 
                <div className='player-wrapper h-100 '>
                  <ReactPlayer
                    className='react-player p-3'
                    url='https://youtu.be/vmzUtpaeQ-I'
                    width='100%'
                    height='100%'
                  />
                </div>
              </Col>
            </Row>
        </Container>
    </header>
  );
};

export default Header;
