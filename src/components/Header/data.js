import logo from './images/jalenscript-logo.png';

export const logoData = {
    href: '/', 
    alt: 'JalenScript',
    src: logo
}

export const navigationData = [
    {
        text: 'About',
        path: '#About',
        stubLink: true,
    },
    {
        text: 'Skills',
        path: '#Skills',
        stubLink: true,
    },
    {
        text: 'Experience',
        path: '#Experience',
        stubLink: true,
    },
    {
        text: 'Resume',
        path: `${process.env.PUBLIC_URL}/Jalen Moorer Resume - 2020.pdf`
    },
    {
        text: 'Contact',
        path: '#mailto:example.com'
    }
]