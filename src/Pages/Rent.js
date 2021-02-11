import React ,{useState} from 'react';
import Dropdown from '../Components/Dropdown';
import Hero from '../Components/Hero';
import InfoSection from '../Components/InfoSection';
import Navbar from '../Components/Navbar';
import { InfoDataFour, InfoDataThree, MiddleTwo } from '../Data/InfoData';
import {  SliderDataRent } from '../Data/SliderData';
import GlobalStyle from '../globalStyles';
import { AnimatePresence} from 'framer-motion';
import Footer from '../Components/Footer';
import MiddleRow from '../Components/MiddleRow';

const Rent = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen)
    }

    return (
        <>
        <GlobalStyle/>
        <AnimatePresence>
        <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Hero slides={SliderDataRent}/>
        <InfoSection {...InfoDataThree} />
        <MiddleRow {...MiddleTwo}/>
        <InfoSection {...InfoDataFour} />
        <Footer/>
        </AnimatePresence>
    </>
    )
}

export default Rent
