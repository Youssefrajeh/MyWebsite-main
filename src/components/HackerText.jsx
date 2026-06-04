import { useState, useEffect } from 'react';

const HackerText = ({ text, className = '' }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let currentText = '';
        let index = 0;
        setDisplayText('');

        const typingInterval = setInterval(() => {
            if (index < text.length) {
                currentText += text[index];
                setDisplayText(currentText);
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 200); // Typing speed: 200ms per character

        return () => {
            clearInterval(typingInterval);
        };
    }, [text]);

    return (
        <span
            className={className}
            style={{
                display: 'inline-block',
                position: 'relative'
            }}
        >
            {displayText}
            <span className="cursor-blink">|</span>
            <style>{`
                @keyframes cursorBlink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .cursor-blink {
                    animation: cursorBlink 0.9s infinite;
                    color: #00f2ff;
                    margin-left: 4px;
                    font-weight: 400;
                }
            `}</style>
        </span>
    );
};

export default HackerText;
