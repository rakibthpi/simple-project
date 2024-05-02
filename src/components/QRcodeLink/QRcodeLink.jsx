"use client"
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { TbWorldShare } from "react-icons/tb";
import note from '../../../public/assets/note.png'
import styles from './styles.module.css';
import Card from './Card';

const QRcodeLink = () => {
    const data = [
        {
            name: 'url',
            image: note,
            title: 'URL',
        },
        {
            name: 'text',
            image: note,
            title: 'Text',
        },
        {
            name: 'wifi',
            image: note,
            title: 'Wi-Fi',
        },
        {
            name: 'vcard',
            image: note,
            title: 'vCard',
        },
        {
            name: 'email',
            image: note,
            title: 'Email',
        },
        {
            name: 'whatsapp',
            image: note,
            title: 'Whatsapp',
        },
        {
            name: 'sms',
            image: note,
            title: 'SMS',
        },
        {
            name: 'pdf',
            image: note,
            title: 'PDF',
        },
        {
            name: 'vcardplus',
            image: note,
            title: 'vCardPlus',
        },
        {
            name: 'images',
            image: note,
            title: 'Images',
        },
        {
            name: 'video',
            image: note,
            title: 'Video',
        },
        {
            name: 'linkslist',
            image: note,
            title: 'List of links',
        },
        {
            name: 'business',
            image: note,
            title: 'Business',
        },
        {
            name: 'menu',
            image: note,
            title: 'Menu',
        },
        {
            name: 'coupon',
            image: note,
            title: 'Coupon',
        },
        {
            name: 'mp3',
            image: note,
            title: 'MP3',
        },
        {
            name: 'apps',
            image: note,
            title: 'Apps',
        },
        {
            name: 'landingpage',
            image: note,
            title: 'Landing page',
        },
        {
            name: 'event',
            image: note,
            title: 'Event',
        },
        {
            name: 'feedback',
            image: note,
            title: 'Feedback',
        },
        {
            name: 'playlist',
            image: note,
            title: 'Playlist',
        },
        {
            name: 'barcode',
            image: note,
            title: '2D Barcode',
        },
        {
            name: 'socialmedia',
            image: note,
            title: 'Social Media',
        },
    ]
    const [activeIndex, setActiveIndex] = useState(null);

  const handleColClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleSendClick = (id) => {
    console.log('Send clicked', id);
  }
  const [visible, setVisible] = useState(11);
  const showMore = () => {
    if(11 < visible){
        setVisible(preCalue => preCalue - 12);
    }
    else{
        setVisible(preCalue => preCalue + 12);
    }
    
  }

    return (
        <div className={styles.qrCodeMain}>
            <div className="container">
                <div className={styles.qrCodeArea}>
                    <div className={styles.qrCodeContent}>
                        <div className={styles.qrcodeLeft}>
                            <div className={styles.qrcodeLeftTop}>
                                <Row className='g-1 qrcodeRow'>
                                    {
                                        data?.slice(0, visible).map((place,idx) => (
                                            <Card key={idx} place={place} idx={idx} handleSendClick={handleSendClick} />
                                        ))
                                    }
                                    <Col xxl={2}  lg={3} md={4} sm={6}  className='g-1 qrcodeRow' >
                                        <button className={`${styles.qrcodeBtn} ${styles.seeMore}`} onClick={showMore}>
                                            <span>{visible === 11 ? 'See more' : 'See less'}</span>
                                        </button>
                                    </Col>
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