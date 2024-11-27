import React, { useEffect, useState } from "react";

const Data = () => {
    const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

    return (
        <div>
            <h2>{date.toLocaleString()}</h2>
        </div>
    );
};

export default Data;