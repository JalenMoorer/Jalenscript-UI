import React from 'react';
import styles from './Header.scss';
import logo from './images/jalenscript-logo.png';

function Header(props) {

    console.log(styles)

let buttonChild;

    if (!props.mobileNav) {
        buttonChild = (
            <button
            type="button"
            className={styles.hamburgerMenu} 
            aria-label="Open Navigation Menu"
            aria-controls="mobileNavMenu"
            id="hamburgerMenu"
            onClick={props.onOpenMobileNav}
        >
            <div></div>
            <div></div>
            <div></div>
        </button>
        )
    }
    else {
    buttonChild = ( 
        <button
            type="button"
            className={styles.closeMobileButton} 
            aria-label="Close Navigation Menu"
            aria-Controls=""
            id="closeMobileNavigation"
            onClick={props.oncloseMobileNav}
        >
            <div></div>
        </button>
        )
    }

    return (
        <header className={styles.header}>
            <div className={styles.logoArea}>
            <div className={styles.logo}>
                <a href="/" alt="JalenScript"><img alt="JalenScript" src={logo}/></a>  
            </div>
            <div className={styles.navigationArea} >
                    <nav className={styles.navigation}>
                        <div className={styles.hideNavButton}>
                            {buttonChild}
                        </div>
                        <ul className={styles.hideNav}>
                            <li><a onClick={props.scrollToTargetAdjusted} href="#About">About me</a></li>
                            <li><a onClick={props.scrollToTargetAdjusted} href="#Skills">Skills</a></li>
                            <li><a onClick={props.scrollToTargetAdjusted} href="#Experience">Experience</a></li>
                            <li><a  href={`${process.env.PUBLIC_URL}/Jalen Moorer Resume - 2020.pdf`} download>Resume</a></li>
                            <li><a onClick={props.scrollToTargetAdjusted} href="mailto:jalenmmoorer@gmail.com">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;