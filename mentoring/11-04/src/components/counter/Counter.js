import { useState } from "react";

function Counter() {
    
    const [counter, setCounter] = useState(0)

    return (  

        <div>
            <button 
                onClick={() => setCounter(prevState => prevState - 1) }
                data-testid='minusbutton'
            >-</button>

            <span data-testid='counter'>{counter}</span>
            
            <button  
                data-testid='plusbutton'
                onClick={() => setCounter(prevState => prevState + 1)}>+</button>
        </div>
    );
}

export default Counter;