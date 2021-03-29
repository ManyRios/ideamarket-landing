import {useState, useEffect} from 'react'
import {Container, Row, Image } from 'react-boostrap'
import gsap from 'gsap'

const Loader = ({finishLoading}) => {

    const Animetions = gsap.registerPlugin(ScrollTrigger);

    
    
    return (
        <Container className="h-100 position-fixed">
            
        </Container>
    )
}


export default Loader;