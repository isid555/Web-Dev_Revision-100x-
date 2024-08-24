import React, {useMemo, useState} from 'react';

const ExpensiveComponent = ({ items }) => {
    const [count, setCount] = useState(0);


    // // Without useMemo: The filter operation runs on every render
    // console.log('Filtering items');
    // const filteredItems = items.filter(item => item.includes('a'));




    // Using useMemo: The filter operation is only recalculated when `items` change
    const filteredItems = useMemo(() => {
        console.log('Filtering items');
        return items.filter(item => item.includes('a'));
    }, [items]);

    return (
        <div>
            <h2>Filtered Items: {filteredItems.length}</h2>
            <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
        </div>
    );
};

export default ExpensiveComponent;
