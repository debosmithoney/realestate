import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuData } from '../Data/MenuData';
import { Button } from './Button';

const DropDownContainer = styled.div`
 position: fixed;
 z-index: 999;
 width: 100%;
 height: 100%;
 background: #CD853F;
 display:grid;
 align-items: center;
 top: 0;
 left: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
 top:${({isOpen}) => (isOpen ? '0' : '-100%')}; 
`;
const Icon = styled.div`
 position: absolute;
 top: 1.2rem;
 right: 1.5rem;
 background: transparent;
 font-size: 2rem;
 cursor: pointer;
 outline:none;

`;
const CloseIcon =  styled(FaTimes)`
 color: #000d1a;
`;
const DropdownWrapper = styled.div`
 
`;
const DropdowMenu = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(4,80px);
 text-align: center;
 margin-bottom: 4rem;
 
 @media screen and (max-width: 480px){
 grid-template-rows: repeat(4,80px);
     
 }
`;
const DropdownLink = styled(Link)`
 display: flex;
 color: #ffffff;
 align-items:center;
 justify-content:center;
 text-decoration: none;
 list-style: none;
 color: #fff;
 cursor:pointer;
 transition: 0.3s ease-in-out;

 &:hover{
     color: #000d1a;

 }
`;
const BtnWrap = styled.div`
 display:flex;
 justify-content:center;
`;

const Dropdown = ({isOpen,toggle}) => {
    return (
        <DropDownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
            <DropdowMenu>
                {menuData.map((item,index) => (
                    <DropdownLink to={item.link} key={index}>
                        {item.title}
                    </DropdownLink>
                ))}
            </DropdowMenu>
            <BtnWrap>
                <Button primary="true" round="true" big="true" to="/contact">Contact Us</Button>
            </BtnWrap>
            </DropdownWrapper>
        </DropDownContainer>
    )
}

export default Dropdown
