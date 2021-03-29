import {Container, Row, Col } from 'react-bootstrap'
import {socialMedia} from './config'
import * as Icon from 'react-bootstrap-icons'


const Footer = () => {


return (
    <footer id="footer">
        <Container>
            <Row>
                <Col md={12}>
                        <h5 className="text-center font-weight-bold">Get in touch</h5>
                         <ul className="text-center">
                                 
                            <a target="_blank" href="https://ideamarket.io/" >
                                <Icon.HouseDoor id="social" lassName=" px-2"/>
                            </a>
                           
                            <a target="_blank" href="https://github.com/Ideamarket">
                                <Icon.Github id="social" className=" px-2"/>
                            </a>
                            <a target="_blank" href="https://discord.com/invite/zaXZXGE4Ke">
                                 <Icon.Discord id="social" className=" px-2"/>
                            </a> 
                                
                            <a target="_blank" href="https://twitter.com/ideamarkets_">
                                 <Icon.Twitter id="social" className="px-2"/>
                            </a>
                        </ul>
                    <div className="text-center">
                        <p>
                            Designed & build by Manuel Rios
                        </p>
                        <a href="ideamarket.com">ideamarket 2021</a>
                    </div>

                </Col>
            </Row>
        </Container>        
    </footer>
) };

export default Footer;