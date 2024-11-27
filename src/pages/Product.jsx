import React, { useEffect, useState } from "react";
import Data from '../components/DataSet/Data';
import ClickCounter from "../components/Counter/clickCounter";

const Product = () => {
    return (
        <div>
            <Data />
            <ClickCounter />
        </div>
    );
};

export default Product;
