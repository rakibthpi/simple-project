import React from 'react';
import styles from './Footer.module.css';
import FooterCardBottom from './FooterCardBottom';
import FooterTop from './FooterTop';
import FooterLink from './FooterLink';
import FooterRegister from './FooterRegister';




const Footer = () => {
    return (
        <div className={styles.footerMain}>
            <div className="container">
                <div className={styles.footerText}>
                    <FooterRegister></FooterRegister>
                    {/* Footer Botttom Area start  */}
                    <div className='footerBottom'>
                        <FooterTop></FooterTop>
                        <FooterLink></FooterLink>
                        <FooterCardBottom></FooterCardBottom>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;