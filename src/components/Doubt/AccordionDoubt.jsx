import React from 'react';
import { Accordion } from 'react-bootstrap';
import styles from './Doubt.module.css';

const AccordionDoubt = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is QR code generator?</Accordion.Header>
                    <Accordion.Body>It is a tool that allows you to generate different types of QR codes, in an easy and intuitive way. The rise of QR codes has made our QR code generator sought after and required by many people and businesses, with businesses of all kinds: you can use our QR code generator to create QR codes for your website, share a PDF, a photo gallery, a playlist, a price list or menu, connect your customers with a service available in your business (WiFi network, attention, shifts, payments, etc.), advertise shows or other events on public roads through the link to the trailer or trailer, create a vCard with contact information and share it with your customers, and much more.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Are QR codes free?</Accordion.Header>
                    <Accordion.Body>
                    Our qr code generator has a free trial version for seven days: the QR codes you generate are yours forever. From there, if you are satisfied with the product, you can access the plan that best suits your needs. By contracting the service, you will have unlimited access to all the functions: unlimited dynamic and editable QR creation, all the variety of QR types, QR editing and management, unlimited scans, complete analytics of your QRs and a variety of download formats.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default AccordionDoubt;