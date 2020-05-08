import React, {useState, useEffect} from 'react';
import { logoData, navigationData } from './data';
import Header from './Header';

export default { title: 'Header' };

export const HeaderNavigation = () => {
    const [mobileNav, toggleMobileNav] = useState(false);

    useEffect(() => {
        function onResize(e) {
          if (e.target.innerWidth >= 1024 && mobileNav)
            toggleMobileNav(false);
        }
    
        window.addEventListener("resize", onResize);
    
        return () => window.removeEventListener("resize", onResize);
    
      }, [mobileNav]);

    function handleOpenMobileNav(e) {
        toggleMobileNav(true);
    }

    function handleCloseMobileNav(e) {
        toggleMobileNav(false);
    }

    function scrollToTargetAdjusted(e){
        e.preventDefault();
        const link = e.target.getAttribute('href')
        const id = link.substring(1);
        if (mobileNav)
          toggleMobileNav(false);
    
        const element = document.getElementById(id)
    
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        window.history.pushState(null, null, link);
    }

    return (
    <Header
        logoData={logoData}
        navigationData={navigationData}
        onOpenMobileNav={handleOpenMobileNav}
        oncloseMobileNav={handleCloseMobileNav}
        mobileNav={mobileNav}
        scrollToTargetAdjusted={scrollToTargetAdjusted}
    />
    );
}