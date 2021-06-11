import React, { useCallback, useEffect, useState ,useRef} from 'react';

const SimpleHabit = (props) => {
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount(count +1);
    });

    useEffect(() => {
        console.log(`mounted & updated! : ${count}`);
    }, [count]);
    return (
        <li className="habit">
            <span ref={spanRef} className="habit_name">Reading</span>
            <span className="habit_count">{count}</span>
            <button className="habit_button habit_increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;