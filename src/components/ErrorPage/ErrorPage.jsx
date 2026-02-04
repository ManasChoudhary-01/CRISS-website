import React from 'react';
import styles from './errorpage.module.css';

export default function ErrorPage() {
    return (
        <div className={styles.errorContainer}>
            <div className={styles.contentWrapper}>
                {/* Animated Robot SVG */}
                <div className={styles.robotWrapper}>
                    <svg className={styles.robot} viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Antenna */}
                        <line x1="100" y1="10" x2="100" y2="30" stroke="#14A1E8" strokeWidth="3" strokeLinecap="round" className={styles.antenna} />
                        <circle cx="100" cy="8" r="5" fill="#14A1E8" className={styles.antennaBulb} />

                        {/* Head */}
                        <rect x="70" y="30" width="60" height="50" rx="8" fill="#00275B" stroke="#14A1E8" strokeWidth="2" />

                        {/* Eyes */}
                        <circle cx="85" cy="50" r="8" fill="#14A1E8" className={styles.eyeLeft} />
                        <circle cx="115" cy="50" r="8" fill="#14A1E8" className={styles.eyeRight} />
                        <circle cx="85" cy="50" r="4" fill="#FFFFFF" />
                        <circle cx="115" cy="50" r="4" fill="#FFFFFF" />

                        {/* Mouth */}
                        <path d="M 80 65 Q 100 72 120 65" stroke="#14A1E8" strokeWidth="2" fill="none" strokeLinecap="round" />

                        {/* Body */}
                        <rect x="60" y="85" width="80" height="90" rx="10" fill="#00275B" stroke="#14A1E8" strokeWidth="2" />

                        {/* Chest Panel */}
                        <rect x="75" y="100" width="50" height="60" rx="5" fill="#1E293B" stroke="#14A1E8" strokeWidth="1.5" />

                        {/* Display Lines */}
                        <line x1="85" y1="110" x2="115" y2="110" stroke="#14A1E8" strokeWidth="2" opacity="0.7" />
                        <line x1="85" y1="120" x2="110" y2="120" stroke="#14A1E8" strokeWidth="2" opacity="0.5" />
                        <line x1="85" y1="130" x2="115" y2="130" stroke="#14A1E8" strokeWidth="2" opacity="0.6" />
                        <line x1="85" y1="140" x2="105" y2="140" stroke="#14A1E8" strokeWidth="2" opacity="0.4" />

                        {/* Arms */}
                        <rect x="35" y="95" width="20" height="60" rx="10" fill="#00275B" stroke="#14A1E8" strokeWidth="2" className={styles.armLeft} />
                        <rect x="145" y="95" width="20" height="60" rx="10" fill="#00275B" stroke="#14A1E8" strokeWidth="2" className={styles.armRight} />

                        {/* Hands */}
                        <circle cx="45" cy="160" r="8" fill="#14A1E8" className={styles.handLeft} />
                        <circle cx="155" cy="160" r="8" fill="#14A1E8" className={styles.handRight} />

                        {/* Legs */}
                        <rect x="75" y="180" width="18" height="50" rx="9" fill="#00275B" stroke="#14A1E8" strokeWidth="2" />
                        <rect x="107" y="180" width="18" height="50" rx="9" fill="#00275B" stroke="#14A1E8" strokeWidth="2" />

                        {/* Feet */}
                        <ellipse cx="84" cy="230" rx="12" ry="6" fill="#14A1E8" />
                        <ellipse cx="116" cy="230" rx="12" ry="6" fill="#14A1E8" />
                    </svg>
                </div>

                {/* Error Message */}
                <div className={styles.errorCode}>
                    <span className={styles.four}>4</span>
                    <span className={styles.zero}>0</span>
                    <span className={styles.fourTwo}>4</span>
                </div>

                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.description}>
                    Oops! Our robot searched everywhere but couldn't find this page.
                    It seems you've ventured into uncharted territory.
                </p>

                {/* Action Buttons */}
                <div className={styles.buttonGroup}>
                    <button className={styles.primaryButton} onClick={() => window.location.href = '/'}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L3 9H5V16H9V12H11V16H15V9H17L10 3Z" fill="currentColor" />
                        </svg>
                        Back to Home
                    </button>
                    <button className={styles.secondaryButton} onClick={() => window.history.back()}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L3 10L10 17V12C15 12 17 14 17 17C17 14 15 8 10 8V3Z" fill="currentColor" />
                        </svg>
                        Go Back
                    </button>
                </div>
            </div>

            {/* Background Decoration */}
            <div className={styles.bgDecoration}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
            </div>
        </div>
    );
};