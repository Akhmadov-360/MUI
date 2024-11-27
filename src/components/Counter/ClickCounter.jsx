import React, { useEffect, useState } from "react";

const ClickCounter = () => {
    const [click, setClick] = useState(0);

    useEffect(() => {
        const handleClick = () => {
            setClick ((prevClick) => prevClick + 1);
        }

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        }
    }, [])

    return (
        <div>
            <p>Clicks: {click}</p>
        </div>
    );
};

export default ClickCounter;