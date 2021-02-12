import React   from 'react';
import styled from 'styled-components';
import {Button} from '../Components/Button';
import { motion } from 'framer-motion';


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
     font-size:clamp(2rem, 6vw,3rem)
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

const Call = () => {
    window.open('tel:9563808277');
};
const Mail = () => {
    window.open('mailto:dchoudhury2000@gmail.com')
}
const Cont= styled.div`
 display:flex;
`;
const ContCall = styled.div`
 padding:20px 20px ;
  align-items: center;

`;
const ContMAil = styled.div`
 padding:20px 20px ;
  align-items: center;

`;


const ContactME = ({heading,paragraphThree,paragraghOne,paragraghTwo,reverse,image}) => {
    const variants = {
        visible: {
          y: 0,
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
                <ColumnLeft reverse={reverse}>
                    <motion.h1 
                    animate={'visible'}
                    initial={{y:0,opacity:0}}
                    variants={variants}>{heading}</motion.h1>
                    <motion.p css={`font-size:20px;`}
                    animate={'visible'}
                    initial={{y:0,opacity:0}}
                    variants={variants}>{paragraphThree} </motion.p>
                    <motion.p
                    animate={'visible'}
                    initial={{y:0,opacity:0}}
                    variants={variants}>{paragraghOne} </motion.p>
                    <motion.p
                    animate={'visible'}
                    initial={{y:0,opacity:0}}
                    variants={variants}>{paragraghTwo}</motion.p>
                    <Cont>
                    <ContCall>
                        <Button to='/contact' primary='true'  onClick={Call}>
                            Tap to Call
                        </Button>
                    </ContCall>
                    <ContMAil>
                        <Button to='/contact' primary='true' onClick={Mail} >
                        Tap to Send Email
                        </Button>
                    </ContMAil></Cont>
                </ColumnLeft>
                <ColumnRight reverse={reverse} onReset='false'>
                <motion.img 
                animate={'visible'}
                initial={{y:100,opacity:0.1}}
                variants={variants}
                src={image} alt="home" /></ColumnRight>
            </Container>
        </Section>
    )
}

export default ContactME
