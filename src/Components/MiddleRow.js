import React , {useEffect, useRef, useState}  from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { motion} from 'framer-motion';
import {registerObserver} from './RegisterObserver';

const Section = styled.section`
 width:100%;
 height:100%;
 padding: 4rem 0rem;
`;
const Container = styled(motion.div)`
 background:#000;
 padding: 3rem calc((100vw - 1300px)/ 2);
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-template-rows: 500px;
 @media screen and (max-width: 768px){
     grid-template-columns:1fr;

 }
`;
const ColumnLeft = styled(motion.div)`
 background:#fff;
 display: flex;
 flex-direction: column;
 justify-content:center;
 align-items:flex-start;
 line-height:1.4;
 padding:1rem 2rem;
 order: ${({reverse}) => (reverse ? '2' : '1')};

 h1{
     margin-bottom:1rem;
     font-size:clamp(1.5rem, 6vw,2rem)
 }
 p{
     margin-bottom: 2rem;
 }
`;
const ColumnRight = styled.div`
 background:#fff;
 padding: 1rem 2rem;
 order: ${({reverse}) => (reverse ? '1' : '2')};
 display: flex;
 justify-content:center;
 align-items:center;
  
  @media screen and (max-width: 768px){
 order: ${({reverse}) => (reverse ? '2' : '1')};

  }

  img{
      width:100%;
      height:100%;
      object-fit:cover;

      @media screen and (max-width:768px){
          width:90%;
          height:90%;
      }
  }
`;


const MiddleRow = ({heading,paragraghOne,paragraghTwo,buttonLabel,reverse,image}) => {

    const StartRef = useRef(null);
    const [Animate,SetAnimate] = useState('hidden');

    useEffect(() => {
        registerObserver(StartRef.current,SetAnimate);
    },[])

    const variants = {
        visible: {
          x: 0,
          opacity: 1,
          transition: { duration: 1.5},
        },
        hidden: {
          y: 0,
          opacity: 0,
        },
    }

    return (
        <Section >
            <Container >
                <ColumnLeft ref={StartRef} reverse={reverse}>
                    <motion.h1 
                    animate={Animate}
                    initial={{x:100,opacity:0.1}}
                    variants={variants}>{heading}</motion.h1>
                    <motion.p
                    animate={Animate}
                    initial={{x:100,opacity:0.1}}
                    variants={variants}>{paragraghOne} </motion.p>
                    <motion.p
                    animate={Animate}
                    initial={{x:100,opacity:0.1}}
                    variants={variants}>{paragraghTwo}</motion.p>
                    <Button to="/" primary="true">{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse} ref={StartRef} onReset='false'>
                <motion.img 
                animate={Animate}
                initial={{x:-100,opacity:0.1}}
                variants={variants}
                src={image} alt="home" /></ColumnRight>
            </Container>
        </Section>
    )
}

export default MiddleRow
