import React, { useEffect, useState } from 'react';
import ShowOrder from './ShowOrder';

const ConfirmOrders = () => {
    const[orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
     
        <div>
            {
  orders.map(orders=><ShowOrder
  key={orders._id}
  orders={orders}
  
  >


  </ShowOrder>)
            }
       
        </div>
    );
};

export default ConfirmOrders;