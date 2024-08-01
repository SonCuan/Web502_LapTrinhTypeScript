import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../servis/axios';
import { IProducts } from '../interface/products';
import Header from '../controllers/Header';

type Props = {}

const Shop = (props: Props) => {
    const [products, setProducts] = useState<IProducts[]>([]);
    const {id} = useParams();
    useEffect (() => { 
        (async () => { 
            try {
                const {data} = await api.get(`/products?category=${id}`);
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        })()
    },[id])
  return (
   <>
        <Header />
        <h1>Shop</h1>
        <div className="container">
            <div className="row">
                {products.map((item) => (
            <div className="col-3" key={item.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={item.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href={`/detail/${item.id}`} className="btn btn-primary">
                    
                  </a>
                </div>
              </div>
            </div>
          ))}
                </div>
            </div>
   </>
  )
}

export default Shop;