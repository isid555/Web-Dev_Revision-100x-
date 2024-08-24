import React, { useState, useCallback, useEffect } from 'react';

function ParentComponent() {
    const [count, setCount] = useState(0);
    const [forceRender, setForceRender] = useState(0);

    // Without useCallback
    // const handleClick = () => {
    //   console.log('handleClick created');
    //   setCount(prevCount => prevCount + 1);
    // };

    // With useCallback
    const handleClick = useCallback(() => {
        console.log('handleClick called');
        setCount(prevCount => prevCount + 1);
    }, []);

    useEffect(() => {
        console.log('ParentComponent rendered');
    });

    return (
        <div>
            <ChildComponent onClick={handleClick} />
            <p>Count: {count}</p>
            <button onClick={() => setForceRender(prev => prev + 1)}>
                Force re-render
            </button>
        </div>
    );
}

const ChildComponent = React.memo(({ onClick }) => {
    console.log('ChildComponent rendered');
    return <button onClick={onClick}>Increment</button>;
});

export default ParentComponent;