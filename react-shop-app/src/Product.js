import React, {useState} from "react";

export default function Product(props){
    const [count, setCount] = useState(0);
    const {details} = props;
    console.log({details});

    function handleDecrementClick(){
        if(count>0)
            setCount(count-1);
    }

    function handleIncrementClick(){
        setCount(count+1);
    }



    return(
        <div className="product">
            <img width="50" src={details.image} alts={details.name} />
            <div>
                <h2>{details.name}</h2>
                <p>{details.description}</p>
            </div>
            <div>
                <button onClick={handleDecrementClick} disabled={count === 0}>-</button>
                <h3>{count ? count : ""}</h3>
                <button onClick={handleIncrementClick}>+</button>
            </div>
            
        </div>
    );
}