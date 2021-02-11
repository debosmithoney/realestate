import React , {useState} from 'react';
import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import { menuData } from '../Data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';
import { motion} from 'framer-motion';

const Nav = styled(motion.nav)`
 margin:0;
 height: 80px;
 display: flex;
 justify-content: space-between;
 padding: 1rem 1rem;
 z-index:100;
 position:fixed;
 width: 100%;
 background:'transparent';
 margin-bottom:20px;
 transition: 200ms ease-in;

 &:active{
     background:'#CD853F'
 }
`;
const NavLink = css`
 color : #fff;
 display: inline-block;
  padding: 15px 20px;
  position: relative;
  justify-content: center;
  align-items: center;
 height: 100%;
 cursor: pointer;
 text-decoration: none;
`;

const Logo = styled(Link)`
 color: #ffffff;
 font-style: italic;
 font-size:1.2rem;
 font-weight: 800;
 ${NavLink}
`;

const NavBars = styled(FaBars)`
 display: none;
 cursor:pointer;

 @media screen and (max-width: 768px){
     display:block;
     color: #ffffff;
 }
`;

const NavMenu = styled.div`
 display: flex;
 align-items: center;
 margin-right: -48px;



 @media screen and (max-width: 768px){
     display: none;
 }
`;

const NavMenuLinks = styled(Link)`
${NavLink}

&:after {
  background: none repeat scroll 0 0 transparent;
  bottom: -15px;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
&:hover{
    transform: scale(1.05);
}

&:hover:after {
  width: 100%;
  left: 0;

}
&:active{
    transform: scale(0.95);
 }

`;

const NavBtn  = styled.div`
 display:flex;
 align-items: center;
 margin-right: 24px;
 @media screen and (max-width: 768px){
     display: none;
 }
`;


const Navbar = ({toggle}) => {

    const [navbar,setNavbar]=useState("transparent");

    const ChangeBackground = () => {
        if(window.scrollY >= 250){
            setNavbar('#CD853F');
        } else {
            setNavbar('transparent');
        }
    };


    window.addEventListener('scroll',ChangeBackground);

    return (
        <Nav style={{background:`${navbar}`}}>
            <Logo to='/'>Builder Base</Logo>
            <NavBars onClick={toggle}/>
            <NavMenu>
            {menuData.map((item,index) => (
                <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>
            ))}
            </NavMenu>
            <NavBtn>
            <Button to='/contact' primary='true'>Contact US</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
