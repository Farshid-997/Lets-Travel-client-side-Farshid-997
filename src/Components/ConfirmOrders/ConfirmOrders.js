import React, { useEffect, useState } from 'react';

const ConfirmOrders = () => {
    const[manageOrders,setmanageOrders]=useState([]);
  useEffect(()=>{
      fetch('https://chilling-moonlight-57105.herokuapp.com/orders')
      .then(res=>res.json())
      .then(data=>setmanageOrders(data))
  },[])

  const handleDelete=id=>{
      const url=`https://chilling-moonlight-57105.herokuapp.com/orders/${id}`
      fetch(url,{
          method:'DELETE',

      })
      .then(res=>res.jsoon())
      .then(data=>console.log(data))
  }
    return (
        <div>
            <h2>Manage Orders</h2>
          
{
    manageOrders.map(mo=><div key={manageOrders._id}>
<p>{mo.Name}</p>
<p>{mo.description}</p>
<p>{mo.country}</p>
<p>{mo.packageName}</p>
<p>{mo.MobileNumber}</p>

<p>{mo.NiDorPassport}</p>

<button onClick={()=>handleDelete(mo._id)}>X</button>

    </div>)
}

        </div>
    );
};

export default ConfirmOrders;