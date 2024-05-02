import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/assets/logo.png'
import googlestar from '../../../public/assets/google.png'
import styles from './Footer.module.css';


const FooterTop = () => {
    return (
        <div className={styles.footerLogo}>
            <div className={styles.footerLogoArea}>
                <Image src={logo} alt={'flogo'}></Image>
                <p>Create your own QR codes and boost your business or idea</p>
            </div>
            <div className={styles.footerLogoRight}>
                <Link href={'/'}><Image src={googlestar} alt={'flogo'}></Image></Link>
            </div>
        </div>
        
    );
};

export default FooterTop;