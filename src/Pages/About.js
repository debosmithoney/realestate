import React ,{useState} from 'react';
import Dropdown from '../Components/Dropdown';
import Navbar from '../Components/Navbar';
import { AboutUs} from '../Data/InfoData';
import GlobalStyle from '../globalStyles';
import { AnimatePresence} from 'framer-motion';
import Footer from '../Components/Footer';
import AboutInfo from '../Components/AboutInfo';

const About = () => {

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
        <AboutInfo {...AboutUs} />
        <Footer/>
        </AnimatePresence>
    </>
    )
}

export default About
