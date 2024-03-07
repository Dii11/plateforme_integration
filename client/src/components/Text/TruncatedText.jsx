import React, { useState, useEffect, useRef } from 'react';
import '../../Style/text.scss';

const Truncated = ({ text }) => {
    const [isTruncated, setIsTruncated] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const lineHeight = parseInt(window.getComputedStyle(textRef.current).lineHeight);
        const maxHeight = lineHeight * 3;
        const actualHeight = textRef.current.clientHeight;

        if (actualHeight > maxHeight) {
            setIsTruncated(true);
        }
    }, [text]);

    return (
        <div className={`truncate ${isTruncated ? 'truncated' : ''}`} ref={textRef}>
            {text}
        </div>
    );
};

const TruncatedText = () => {
    return (
        <div>
            <Truncated text="lorem ipsum ipsom kennyh sedera lorem ipsum lorem ipsum ipsom kennyh sedera lorem ipsum" />
        </div>
    );
};

export default TruncatedText;
