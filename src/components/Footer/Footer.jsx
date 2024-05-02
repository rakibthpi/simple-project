import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import bg from '../../../public/assets/footerbg.png'
import logo from '../../../public/assets/logo.png'

const Footer = () => {
    return (
        <div className={styles.footerMain}>
            <div className="container">
                <div className={styles.footerText}>
                    <div className={styles.footerTop}>
                        <h1>Try our QR code generator for 7 days free.</h1>
                        <Link href={'/signup'}>Register Now</Link>
                        
                        <div className={styles.footerTopImg}>
                            <Image src={bg} alt={'photos'}></Image>
                        </div>
                    </div>
                    {/* Footer Botttom Area start  */}
                    <div className='footerBottom'>
                        <div className={styles.footerLogo}>
                            <div className={styles.footerLogoArea}>
                                <Image src={logo} alt={'flogo'}></Image>
                                <p>Create your own QR codes and boost your business or idea</p>
                            </div>
                            <div className={styles.footerLogoRight}>
                                <Link href={'/'}><Image src={logo} alt={'flogo'}></Image></Link>
                                
                            </div>
                        </div>
                        <div className={styles.footerBottomMiddle}></div>
                        <div className={styles.footerBottomRight}>
                            <p>© 2022 QRFY. All rights reserved.</p>
                            <div className={styles.footerSocial}>
                                <Image src={logo} alt={'flogo'}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;