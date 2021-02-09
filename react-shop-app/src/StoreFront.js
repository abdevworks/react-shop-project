import React, {useEffect, useState} from 'react';
import Product from "./Product.js";

export default function StoreFront() {

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        fetch("https://react-tutorial-demo.firebaseio.com/products.json").then(
          response=>response.json()
        ).then(data=>{
          console.log(data);
          setProducts(data);
        }).catch(error=>{
          console.log(error);
        });
    
      },[]);

    return (
        <div className="store-front">
            {products.map(product=>{
                return <Product details={product} />;
            })}
        </div>
    );
}