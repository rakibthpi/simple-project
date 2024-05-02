import React from 'react';
import styles from './Footer.module.css';
import bg from '../../../public/assets/footerbg.png'
import Link from 'next/link';
import Image from 'next/image';

const FooterRegister = () => {
    return (
        <div className={styles.footerTop}>
            <h1>Try our QR code generator for 7 days free.</h1>
            <Link href={'/signup'}>Register Now</Link>
            <div className={styles.footerTopImg}>
                <Image src={bg} alt={'photos'}></Image>
            </div>
        </div>
    );
};

export default FooterRegister;