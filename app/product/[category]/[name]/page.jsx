import axios from 'axios';
import React from 'react'
import SingleProduct from "./SingleProduct";

async function page({ params }) {
  const { name, category } = params;
  const data = await axios.get(`https://bloomingagriafrica.tn/api/products/${category}/${name}`);
  return (
    <div>
      <SingleProduct product={data.data}/>;
    </div>
  )
}

export default page