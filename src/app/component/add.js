'use client';
import React, { useState } from 'react';
import Number from './number';
import Button from './button';

const Add = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1); 
    };
    return (
        <div>
            <Number numberVlaue={count} />
            <Button onClick={handleIncrement} />
        </div>
    );
};

export default Add;