import Image from 'next/image';
import styles from './styles.module.css';
import React from 'react';
import { Col } from 'react-bootstrap';

const Card = ({ place,handleSendClick, idx}) => {
    const {image, name, title}  = place;
    return (
        <Col xxl={2}  lg={3} md={4} sm={6} onClick={() => handleSendClick(idx)}>
            <button className={`${styles.qrcodeBtn} indexActive`}>
                <div className={styles.qrIcon}><Image src={image} alt={name}></Image></div>
                <span>{title}</span>
            </button>
        </Col>
    );
};

export default Card;