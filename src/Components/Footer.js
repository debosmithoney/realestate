import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {RiFacebookFill,RiInstagramLine,RiLinkedinFill,RiTwitterFill} from 'react-icons/ri';

const Container = styled.div`
 padding:80px 60px;
 background: #000;
`;
const Wrapper = styled.div`
 display:flex;
 flex-direction: column;
 justify-content:center;
 max-width:1000px;
 margin: 0 auto;

`;
const Column = styled.div`
 display: flex;
 flex-direction: column;
 text-align: left;
 margin-left: 60px;

  & h1{
      color:#fff;
      font-size:32px;
      text-align: center;
      width: 300px;
      margin-bottom:40px;
  }
  @media (max-width: 768px){
    margin-left:0;
      text-align: center;

      & h1{
          margin-left:40px;
      }
  }
`;

const Row = styled.div`
 display:grid;
 grid-template-columns: repeat(auto-fill, minmax(230px,1fr));
 grid-gap: 20px;

  @media (max-width: 768px){
 grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
  }
`;
const Links = styled(Link)`
 color: #fff;
 margin-bottom:20px;
 font-size:16px;
 text-decoration:none;
 align-items:center;

 &:hover{
     color:#ff9c00;
     transition:200ms ease-in;
 }
`;
const Title = styled.div`
 color: #fff;
 margin-bottom:40px;
 font-size:24px;
 font-weight:bold;
`;






const Facebook =styled(RiFacebookFill)`
font-size:16px;
 &:hover{
     color:#385898;
 }
`;
const Instagram =styled(RiInstagramLine)`
&:hover{
    color:#8a3ab9;
}
`;
const Linkdin =styled(RiLinkedinFill)`
&:hover{
    color:#0e76a8;
}
`;
const Twitter =styled(RiTwitterFill)`
&:hover{
    color:#1DA1F2;
}
`;


const Footer = () => {
    return (
        <Container>
            <Wrapper>
                    <Row>
                    <Column>
                        <h1>Let us Find You a Home 🏡</h1>
                    </Column>
                    <Column>
                         
                     </Column>
                    <Column>
                        <Title>Contact  Us</Title>
                        <Links  to="/contact">Asansol</Links>
                        <Links to="/contact">Mumbai</Links>
                        <Links to="/contact">Delhi</Links>
                        <Links to="/contact">Hyderabad</Links>
                    </Column>
                    <Column>
                        <Title>Social</Title>
                        <Links onClick={(e) => {
                            window.open('https://www.facebook.com/HoneyDC2000/');
                            }}><Facebook/>  Facebook</Links>
                        <Links onClick={(e) => {
                            window.open('https://www.instagram.com/debosmithoney/');
                            }}><Instagram/>  Instagram</Links>
                        <Links onClick={(e) => {
                            window.open('https://www.instagram.com/debosmithoney/');
                            }}><Linkdin/>  Linkedin</Links>
                        <Links onClick={(e) => {
                            window.open('https://twitter.com/DebosmitHoney');
                            }}><Twitter/>  Twitter</Links>
                    </Column>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Footer
