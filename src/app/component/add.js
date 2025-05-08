'use client'
import { useState } from 'react';
import Button from './button';

const Add = ()  => {
    const [number, setCount] = useState(0);
    const numberIncrement = () => {
        setCount(number + 1);
    };

    return (
        numberIncrement = (index, item) => (
            <div key={index}>
                <Button buttonValue={item} />
                <Number numberValue={item} />
            </div>
        )
    );
};

export default Add;