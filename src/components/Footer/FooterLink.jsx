import React from 'react';
import styles from './Footer.module.css'
import Link from 'next/link';


const FooterLink = () => {
    return (
        <div className={styles.footerBottomMiddle}>
            <div className={styles.singleItemFooter}>
                <h5>QRFY</h5>
                <ul>
                    <li><Link href={'/'}>QR Code Generator</Link></li>
                    <li><Link href={'/'}>Plans and prices</Link></li>
                </ul>
            </div>
            <div className={styles.singleItemFooter}>
                <h5>COMPANY</h5>
                <ul>
                    <li><Link href={'/'}>Terms of Use and Contract</Link></li>
                    <li><Link href={'/'}>Privacy Policy</Link></li>
                    <li><Link href={'/'}>Cookies Policy</Link></li>
                    <li><Link href={'/'}>GDPR</Link></li>
                    <li><Link href={'/'}>Blog</Link></li>
                </ul>
            </div>
            <div className={styles.singleItemFooter}>
                <h5>RESOURCES</h5>
                <ul>
                    <li><Link href={'/'}>QR Codes for</Link></li>
                    <li><Link href={'/'}>QR Codes on</Link></li>
                </ul>
            </div>
            <div className={` ${styles.singleItemFooter} ${styles.footerGroups} `}>
                <h5>QR CODES</h5>
                <div className={styles.footerGroup}>
                    <ul>
                        <li><Link href={'/'}>Website</Link></li>
                        <li><Link href={'/'}>PDF</Link></li>
                        <li><Link href={'/'}>vCard Plus</Link></li>
                        <li><Link href={'/'}>Images</Link></li>
                        <li><Link href={'/'}>Video</Link></li>
                        <li><Link href={'/'}>List of links</Link></li>
                        <li><Link href={'/'}>Business</Link></li>
                        <li><Link href={'/'}>Menu</Link></li>
                    </ul>
                    <ul>
                        <li><Link href={'/'}>Website</Link></li>
                        <li><Link href={'/'}>PDF</Link></li>
                        <li><Link href={'/'}>vCard Plus</Link></li>
                        <li><Link href={'/'}>Images</Link></li>
                        <li><Link href={'/'}>Video</Link></li>
                        <li><Link href={'/'}>List of links</Link></li>
                        <li><Link href={'/'}>Business</Link></li>
                        <li><Link href={'/'}>Menu</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.singleItemFooter}>
                <h5>HELP</h5>
                <ul>
                    <li><Link href={'/'}>Contact us</Link></li>
                    <li><Link href={'/'}>FAQ</Link></li>
                    <li><Link href={'/'}>API Docs</Link></li>
                    <li><Link href={'/'}>Report abuse</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default FooterLink;