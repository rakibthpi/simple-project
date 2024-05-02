import React from 'react';
import styles from './Doubt.module.css';
import Link from 'next/link';

const DoubtCard = () => {
    return (
        <div className={styles.doubtCard}>
            <div className={styles.doubtCardInnerText}>
                <h3>Want to know more?</h3>
                <p>Check our FAQs to find an answer to any questions you may have about our QR codes.</p>
                <Link href={'/'}>Answer all your questions</Link>
            </div>
        </div>
    );
};

export default DoubtCard;