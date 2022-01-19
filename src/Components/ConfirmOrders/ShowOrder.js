import React from 'react';

import './showOrder.css'
const ShowOrder = (props) => {
    const{Name,description,country,packageName,MobileNumber,NiDorPassport,paymentMethod}=props.orders;
    return (
        <div style={{overflowX:'auto'}}>
              <table style={{ borderCollapse: 'collapse',borderSpacing: 0,width: '100%',border: '1px solid #ddd'}}>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Country</th>
    <th>Package Name</th>

    <th>Mobile Number</th>
    <th>NID or Passport</th>
    <th>Payment Method</th>
    <th>DELETE</th>
  </tr>
  <tr>
    <td>{Name}</td>
    <td>{description}</td>
    <td>{country}</td>
    <td>{packageName}</td>
    <td>{MobileNumber}</td>
    <td>{NiDorPassport}</td>
    <td>{paymentMethod}</td>
  </tr>

</table>
        </div>
    );
};

export default ShowOrder;