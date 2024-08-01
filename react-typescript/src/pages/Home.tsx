import React from "react";
import { IProducts } from "../interface/products";
import { Link } from "react-router-dom";
import Product from "./admin/Product";
import { ICategory } from "../interface/category";
import Header from "../controllers/Header";


type Props = {
  products: IProducts[];
  // onDelete : (id: number) => void
  
};

const Home = ({ products,  }: Props) => {
  return (
    <>
      {/* header */}
      <Header />  
      {/* End header */}

      {/* main  */}
      <div className="container mt-5">
        <div className="row ">
          {products.map((item) => (
            <div className="col-3 mb-4" key={item.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={item.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href={`/detail/${item.id}`} className="btn btn-primary">
                    Xem chi tiet{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End main */}
    </>
  );
};

export default Home;
