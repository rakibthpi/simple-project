"use client"
import Link from 'next/link';
import React, {  useState } from 'react';
import { TbWorldUp } from "react-icons/tb";
import styles from './styles.module.css'

const Navbar = () => {
    const [isOpenResources, setIsOpenResources] = useState(false);
  const [isOpenTbWorldUp, setIsOpenTbWorldUp] = useState(false);

  const toggleDropdownResources = () => {
    setIsOpenResources(prevState => !prevState);
    setIsOpenTbWorldUp(false); // Close the other dropdown
  };

  const toggleDropdownTbWorldUp = () => {
    setIsOpenTbWorldUp(prevState => !prevState);
    setIsOpenResources(false); // Close the other dropdown
  };

  // Add a document click listener when the component mounts
    return (
        <div className={styles.navbarMain}>
            <div className="container">
                <div className={styles.nevbarText}>
                    <div className={styles.logoArea}>
                        <Link href='/'>Logo</Link>
                    </div>
                    <div className={styles.mainMenu}>
                        <div className={styles.menuArea}>
                            <ul>
                                <li><Link href={'/'}>Plans and Prices</Link></li>
                                <li><Link href={'/'}>FAQ</Link></li>
                                <li><Link href={'/'}>API</Link></li>
                                <li><Link href={'/'}  onClick={toggleDropdownResources}>Resources</Link>
                                {isOpenResources  && (
                                    <ul>
                                        <li><Link href={'/'}>Types of QR code</Link></li>
                                        <li><Link href={'/'}>Types of QR code</Link></li>
                                        <li><Link href={'/'}>Types of QR code</Link></li>
                                    </ul>
                                )}
                                </li>
                                <li><Link href={'/'} onClick={toggleDropdownTbWorldUp}><TbWorldUp /></Link>
                                {isOpenTbWorldUp  && (
                                    <ul>
                                        <li><Link href={'/'}>Types of QR code</Link></li>
                                        <li><Link href={'/'}>Types of QR code</Link></li>
                                        <li><Link href={'/'}>Types of QR code</Link></li>
                                    </ul>
                                )}
                                </li>
                            </ul>
                        </div>
                        <div className={styles.loginRegisterArea}>
                            <Link className={styles.active} href={'/'}>Register</Link>
                            <Link  href={'/'}>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;