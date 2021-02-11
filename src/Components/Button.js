import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
 background: ${({primary}) => (primary ? '#000d1a' : '#CD853F')};
 white-space: nowrap;
 outline: none;
 border: none;
 border-radius: 25px;
 min-width: 100px;
 max-width: 200px;
 cursor:pointer;
 text-decoration: none;
 transition:0.2s;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
 color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
 font-size: ${({big}) => (big ? '20px ' : '14px')};
 
 &:hover{
     transform: scale(1.05);
     transition: 200ms ease-in;
 }

 &:active{
    transform: scale(0.95);
    background: #cd853f;

 }

`;