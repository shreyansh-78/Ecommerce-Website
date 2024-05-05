import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:8000/').then((res) => setData(res.data));
  }, []);

  const [{ basket }, dispatch] = useStateValue();
  
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        category: props.category
      },
    });
  };
  



  const arr = data
    .filter((itm) => {
      return itm.category === props.category;
    })


    .map((item, index) => {
      return (
        <div className='product'>
          <div className='product__container'>
            <div className='product__info'>
              <p>{item.name}</p>
              <p className='product__price'>
                <small>{item.currency}</small>
                <strong>{item.price}</strong>
              </p>
              <div className='product__rating'>{item.rating}</div>
            </div>
            <div className='product__image-container'>
              <img src={item.Image} className='product__image' alt='' />
            </div>
          </div>
          <button onClick={addToBasket}>Add to Basket</button>
          
        </div>
      );
    });



  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {arr}
    </div>
  );
}

export default Product;


