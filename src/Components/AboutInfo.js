import React , {useEffect}  from 'react';
import { useInView } from "react-intersection-observer"; 
import styled from 'styled-components';
import { Button } from './Button';
import { motion, useAnimation} from 'framer-motion';

const Section = styled.section`
 width:100%;
 height:100%;
 padding: 4rem 0rem;
background-color:#000;
`;

const Container = styled(motion.div)`
 z-index:1000;
 padding: 3rem calc((100vw - 1300px)/ 2);
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-template-rows: 700px;
 @media screen and (max-width: 768px){
     grid-template-columns:1fr;

 }
`;
const ColumnLeft = styled(motion.div)`
 display: flex;
 flex-direction: column;
 justify-content:center;
 align-items:flex-start;
 line-height:1.4;
 padding:1rem 1rem;
 order: ${({reverse}) => (reverse ? '2' : '1')};

 h1{
     color:#fff;
     margin-bottom:1rem;
     font-size:clamp(1.5rem, 6vw,2rem)
 }
 p{
     color:#fff;
     margin-bottom: 2rem;
 }
`;
const ColumnRight = styled.div`
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
const AboutInfo = ({heading,paragraphThree,paragraghOne,paragraghTwo,buttonLabel,reverse,image}) => {
    
    const animation = useAnimation();    
        const [ref, inView, entry] = useInView({ threshold: 0.2 });
    
        useEffect(() => {
          if (inView) {
            animation.start("visible");
          }
        }, [animation, inView]);
    
        const variants = {
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 1.5},
            },
            hidden: {
              y: entry,
              opacity: 0,
            },
        }

    return (
        
        <Section >
            
            <Container >
                <ColumnLeft ref={ref} reverse={reverse}>
                    <motion.h1 
                    animate={animation}
                    initial={{y:-100,opacity:0.1}}
                    variants={variants}>{heading}</motion.h1>
                    <motion.p
                    animate={animation}
                    initial={{y:-100,opacity:0.1}}
                    variants={variants}>{paragraphThree} </motion.p>
                    <motion.p
                    animate={animation}
                    initial={{y:-100,opacity:0.1}}
                    variants={variants}>{paragraghTwo} </motion.p>
                    <motion.p
                    animate={animation}
                    initial={{y:-100,opacity:0.1}}
                    variants={variants}>{paragraghOne}</motion.p>
                    <Button to="/contact" primary="true">{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse} ref={ref} onReset='false'>
                <motion.img 
                animate={animation}
                initial={{y:100,opacity:0.1}}
                variants={variants}
                src={image} alt="home" /></ColumnRight>
            </Container>
        </Section>
    )
}

export default AboutInfo
