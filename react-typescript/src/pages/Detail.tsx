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
      <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={products.thumbnail}
            alt={products.title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1>{products.title}</h1>
          <p className="text-muted">{products.description}</p>
          <p><strong>Price:</strong> ${products.price}</p>
          <p><strong>Category:</strong> {products.category}</p>
          <Link to={`/cart/${products.id}`}>
            <button className="btn btn-success">Thêm vào giỏ hàng </button>
          </Link>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Detail;