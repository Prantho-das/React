import React from 'react'
import RowCards from '../../components/RowCards';
import { data } from '../../data';

function Product() {
    return (
      <div>
        <RowCards title="New Item" data={data} />
      </div>
    );
}

export default Product
