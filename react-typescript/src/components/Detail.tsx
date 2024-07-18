import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { IProducts } from '../interface/products';
import api from '../servis/axios';

type Props = {}

const Detail = (props: Props) => {
  const [products , setProducts ] = useState<IProducts>({} as IProducts)

  const {id} = useParams();
  useEffect (() => {
    (async () => { 
      try {
        const res = await api.get(`/products/${id}`);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    } )()
  })

  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={products.thumbnail} alt={products.title} height={"300px"} width={"300px"} />
        </div>
        <div className="col-md-6">
          <h1>{products.title}</h1>
          <p>{products.description}</p>
          <p>{products.price}</p>
         <Link to={`/cardform/${products.id} `} > <button className='btn btn-success'>Them vao gio hang</button></Link>
        </div>
      </div>
     </div>
    </>
    
  )
}

export default Detail;