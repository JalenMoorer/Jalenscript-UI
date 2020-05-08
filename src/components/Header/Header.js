import React from 'react';
import styles from './Header.scss';

function Header(props) {

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
            aria-Controls="desktopNavMenu"
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
                    <a 
                    href={props.logoData.href} alt={props.logoData.alt}><img alt={props.logoData.alt} src={props.logoData.src}/></a>  
                </div>
                <div className={styles.navigationArea} >
                        <nav className={styles.navigation}>
                            <div className={styles.hideNavButton}>
                                {buttonChild}
                            </div>
                            <ul className={styles.hideNav}>
                                {props.navigationData.map((item, i) => (
                                    <li key={i} >
                                        <a onClick={item.stubLink 
                                            ? props.scrollToTargetAdjusted 
                                            : undefined
                                        } 
                                        href={item.path}
                                        >
                                            {item.text}
                                        </a>
                                    </li>

                                ))}
                            </ul>
                        </nav>
                    </div>
            </div>
        </header>
    );
}

export default Header;