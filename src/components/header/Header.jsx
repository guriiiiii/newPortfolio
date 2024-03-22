import React, {useState} from "react";
import './header.css';
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, HiOutlinePhotograph, HiOutlineMail, HiX, HiOutlineMenu } from "react-icons/hi";


const Header = () => {
       
    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
    
        // Get the offset position of each section
        var sectionOffsets = [
            document.getElementById('home').offsetTop,
            document.getElementById('about').offsetTop,
            document.getElementById('skills').offsetTop,
            document.getElementById('portfolio').offsetTop,
            document.getElementById('contact').offsetTop
        ];
    
        // Find the index of the closest section to the current scroll position
        var closestIndex = 0;
        var minDistance = Math.abs(scrollPosition - sectionOffsets[0]);
        for (var i = 1; i < sectionOffsets.length; i++) {
            var distance = Math.abs(scrollPosition - sectionOffsets[i]);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        }
    
        // Update the active link based on the closest section
        var navLinks = document.querySelectorAll('ul li a');
        for (var j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove('active-link');
        }
        navLinks[closestIndex].classList.add('active-link');
    });
    

    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">gurteg.dev</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")} 
                            className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineHome className="nav__icon"/>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav("#about")} 
                            className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineUser className="nav__icon"/>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav("#skills")} 
                            className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineBadgeCheck className="nav__icon"/>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} 
                            className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlinePhotograph className="nav__icon"/>Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav("#contact")} 
                            className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineMail className="nav__icon"/>Contact
                            </a>
                        </li>
                    </ul>
                    <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}

export default Header