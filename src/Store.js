import React from 'react';
import ShopCard from './ShopCard';
import data from './data.js';
import { useState } from 'react';


const Store = (props) => {

    const [store,setStore]=useState(data);
    //console.log(store);
    return (
        
        <div className="Store">
        {store.map((element)=>(
            <ShopCard element={element} />
        ))}
        
       

        </div>
    );
};

export default Store;