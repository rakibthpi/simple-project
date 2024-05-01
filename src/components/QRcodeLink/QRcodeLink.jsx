"use client"
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { TbWorldShare } from "react-icons/tb";

import styles from './styles.module.css';

const QRcodeLink = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const handleColClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
    return (
        <div className={styles.qrCodeMain}>
            <div className="container">
                <div className={styles.qrCodeArea}>
                    <div className={styles.qrCodeContent}>
                        <div className={styles.qrcodeLeft}>
                            <div className={styles.qrcodeLeftTop}>
                                <Row className='g-1 qrcodeRow'>
                                    {[0, 1, 2].map((index) => (
                                        <Col key={index} lg={3} md={4} sm={6} className={activeIndex === index ? 'active' : 'hidden'} onClick={() => handleColClick(index)}>
                                        <button className={`${styles.qrcodeBtn} indexActive`}>
                                            <div className={styles.qrIcon}><TbWorldShare /> </div>
                                            <span>URL</span>
                                        </button>
                                        </Col>
                                    ))}
                                    {/* <Col lg={3} md={4} sm={6} className={activeIndex===1 ? 'active' : ''} onClick={() => handleColClick(1)}>
                                        <button className={`${styles.qrcodeBtn} indexActive`}>
                                            <div className={styles.qrIcon}><TbWorldShare /> </div>
                                            <span>URL</span>
                                        </button>
                                    </Col>
                                    <Col lg={3} md={4} sm={6} className={activeIndex===2 ? 'active' : ''} onClick={() => handleColClick(2)}>
                                        <button className={`${styles.qrcodeBtn} indexActive`}>
                                            <div className={styles.qrIcon}><TbWorldShare /> </div>
                                            <span>URL</span>
                                        </button>
                                    </Col>
                                    <Col lg={3} md={4} sm={6} className={activeIndex===3 ? 'active' : ''} onClick={() => handleColClick(3)}>
                                        <button className={`${styles.qrcodeBtn} indexActive`}>
                                            <div className={styles.qrIcon}><TbWorldShare /> </div>
                                            <span>URL</span>
                                        </button>
                                    </Col>
                                    <Col lg={3} md={4} sm={6} className={activeIndex===4 ? 'active' : ''} onClick={() => handleColClick(4)}>
                                        <button className={`${styles.qrcodeBtn} indexActive`}>
                                            <div className={styles.qrIcon}><TbWorldShare /> </div>
                                            <span>URL</span>
                                            
                                        </button>
                                    </Col> */}
                                </Row>
                            </div>
                            <div className={styles.leftQRcodeBottom}>
                                <h3>QR Code</h3>
                                <p>Get feedback and evaluations</p>
                                <button><span>Register now</span></button>
                            </div>
                        </div>
                        <div className={styles.qrcodeRight}>
                            fldfldlfl
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QRcodeLink;