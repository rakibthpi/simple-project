"use client"
import React, { useState } from 'react';
import styles from './Doubt.module.css';
import AccordionDoubt from './AccordionDoubt';

const Doubt = () => {
    const [activeTab, setActiveTab] = useState(0); // State to manage active tab

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <div className={styles.doubt}>
            <div className="container">
                <div className={styles.doubtText}>
                    <div className={styles.doubtTextInner}>
                        <h1>Do not leave with doubt</h1>
                        <div className={styles.btnArea}>
                            {['Basic Information', 'Design & Creation', 'Scan & Print'].map((tab, index) => (
                            <button
                                key={index}
                                className={index === activeTab ? 'active' : ''}
                                onClick={() => handleTabChange(index)}
                            >
                                {tab}
                            </button>
                            ))}
                        </div>
                    </div>
                    <div className={styles.AccordionArea}>
                        {/* Render content based on active tab */}
                        {activeTab === 0 && 
                            <div>
                                <AccordionDoubt></AccordionDoubt>
                            </div>
                        }
                        {activeTab === 1 && <div>Second text content</div>}
                        {activeTab === 2 && <div>Third text content</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doubt;