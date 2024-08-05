import React, { useEffect, useState } from "react";
import { IProducts } from "../../interface/products";
import { Link } from "react-router-dom";
import Product from "../admin/Product";
import { ICategory } from "../../interface/category";
import Header from "../../controllers/Header/Header";
import Footer from "../../controllers/Footer/Footer";
import classNames from "classnames/bind";
import style from "./Home.module.scss";
import api from "../../servis/axios";

type Props = {
  product: IProducts[];
  // onDelete : (id: number) => void
};
const st = classNames.bind(style);
const Home = ({ product }: Props) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () =>  {
      try {
        const res = await api.get("/products?_limit=9&_order=desc");  
        const data = await api.get("/categories?_limit=8&_order=desc");
        setCategory(data.data);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    })()
  },[]);
  const products4 = products.slice(0, 4);
  const products1 = products.slice(4, 5);
  const products5 = products.slice(5, 9);


  return (
    <>
      {/* header */}
      <Header />
      {/* End header */}

      {/* main  */}
      <div className={st("main")}>
        <div className={st("best-seller")}>
          <div className={st("title")}>
            <h2>Best Seller</h2>
          </div>
          <div className={st("content-top")}>
            {products4.map((item) => (
              <div className={st("product")}>
              <img src={item.thumbnail} alt="" />
              <p>{item.title}</p>
              <div className={st("price")}>
                <p>{item.brand}</p>
                <p>${item.price}</p>
              </div>
            </div>
            ))}
          </div>
          <div className={st("eng")}>
            <div className={st("content-bottom")}>
             {products1.map((item) => (
                <div className={st("products-left")}>
                <img src={item.thumbnail} alt="" />
                <div className={st("title")}>
                  <p>{item.title}</p>
                </div>
              </div>
             ))}
              <div className={st("products-right")}>
                {products5.map ((item) => (
                  <div className={st("product")}>
                  <img src={item.thumbnail} alt="" />
                  <div className={st("title")}>
                    <p>{item.title}</p>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        <div className={st("categories")}>
          <div className={st("title")}>
            <h2>Category</h2>
          </div>
          <div className={st("content")}>
            {category.map((item) => (
              <Link to={`/shop/${item.id}`}>
                  <div className={st("category")}>
              <img src={item.thumbnail}alt="" />
                <div className={st("title")}>
                  <p>{item.title}</p>
                  <p>{item.title}</p>
                </div>
            </div>  
              </Link> 
            ))}       
          </div>
         
        </div>
      </div>

      {/* End main */}
      {/* Footer  */}
      <Footer />
      {/* End Footer */}
    </>
  );
};

export default Home;
