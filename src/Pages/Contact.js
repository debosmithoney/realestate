import React ,{useState} from 'react';
import Dropdown from '../Components/Dropdown';
import Navbar from '../Components/Navbar';
import { AboutMe } from '../Data/InfoData';
import GlobalStyle from '../globalStyles';
import { AnimatePresence} from 'framer-motion';
import ContactME from '../Components/ContactME';
import Footer from '../Components/Footer';

const Contact = () => {
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
        <ContactME {...AboutMe} />
        <Footer/>
        </AnimatePresence>
    </>
    )
}

export default Contact
