import React from 'react';
import styles from './Footer.module.css';
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import {  FaFacebookF, FaLinkedinIn , FaTwitter } from "react-icons/fa";
import Link from 'next/link';

const FooterCardBottom = () => {
    return (
        <div className={styles.footerBottomRight}>
            <p>2024 © QR Code Generator PRO S.L  - ‘QR Code’ is a trademark of DENSO WAVE INCORPORATED</p>
            <div className={styles.footerSocial}>
                <button><HiOutlineCurrencyDollar></HiOutlineCurrencyDollar> Currency</button>
                <button> <TbWorld></TbWorld> English</button>
                <Link href={'/'}><FaLinkedinIn /></Link>
                <Link href={'/'}><FaTwitter /></Link>
                <Link href={'/'}><FaFacebookF/></Link>
            </div>
        </div>
    );
};

export default FooterCardBottom;