import { useState, useEffect, useRef } from 'react';

const HackerText = ({ text, className = '' }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef(null);

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    const animate = () => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        // Initial animation on mount
        animate();
        
        // Set up interval to repeat animation every 5 seconds
        const repeatInterval = setInterval(() => {
            animate();
        }, 5000);
        
        return () => {
            clearInterval(intervalRef.current);
            clearInterval(repeatInterval);
        };
    }, [text]);

    const handleMouseEnter = () => {
        setIsHovering(true);
        animate();
    };

    return (
        <span
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovering(false)}
            style={{
                fontFamily: 'monospace',
                cursor: 'pointer',
                display: 'inline-block',
                minWidth: `${text.length}ch`
            }}
        >
            {displayText}
        </span>
    );
};

export default HackerText;
