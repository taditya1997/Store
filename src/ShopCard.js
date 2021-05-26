import React, { useState } from 'react';

const ShopCard = ({ element }) => {


    const [shoesStock, setShoeStock] = useState(element.Stock);
    function handleIncrement() {
        setShoeStock(shoesStock + 1);
    }
    function handlerDecrement() {
        if (shoesStock > 0) {
            setShoeStock(shoesStock - 1);
        }
    }

    return (

        <div className="ShopCard">
            <div className="brandLogo">
                <h1>{element.ShoeBrand}</h1>
                <img src={element.logo} />
            </div>


            <div className="Accesories-Count">
                {shoesStock > 0 ? <h2 className="count">{`Shoes Stock ${shoesStock}`}</h2> : <h2 className="outOfStock">Sorry Out Of Stock!!</h2>}

            </div>
            <button className="BuyButton" onClick={handlerDecrement}>Buy</button>

        </div>
    );
};

export default ShopCard;