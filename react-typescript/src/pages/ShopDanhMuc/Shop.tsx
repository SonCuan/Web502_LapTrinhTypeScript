import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../servis/axios";
import { IProducts } from "../../interface/products";
import Header from "../../controllers/Header/Header";
import Footer from "../../controllers/Footer/Footer";
import classNames from "classnames/bind";
import style from "./Shop.module.scss";

type Props = {};

const Shop = (props: Props) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/products?category=${id}`);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  const st = classNames.bind(style);
  return (
    <>
      <Header />
      <div className={st("wapper")}>
        <div className={st("fillter")}>
          <div className={st("input")}>
            <p>Short By : </p>
            <select name="" id="">
              <option value="">Popularity</option>
              <option value="">Price: High to Low</option>
              <option value="">Price: Low to High</option>
              <option value="">Newest</option>
            </select>
          </div>
          <div className={st("input")}>
            <p>Show: </p>
            <select name="" id="">
              <option value="">Popularity</option>
              <option value="">Price: High to Low</option>
              <option value="">Price: Low to High</option>
              <option value="">Newest</option>
            </select>
          </div>
        </div>
        <div className={st("content")}>
          <div className={st("products")}>
            {products.map((product) => (
              <div className={st("product")} key={product.id}>
                <img src={product.thumbnail} alt="" />
                <p>{product.title}</p>
                <p>
                  {product.price} <del> $200</del>
                </p>
              </div>
            ))}
          </div>
          <div className={st("nav")}>
            <h2>Category</h2>
            <div className={st("inputs")}>
              <div className={st("input")}>
                <input type="checkbox" />
                <label htmlFor="">Category Hi Hi</label>
              </div>
              <div className={st("input")}>
                <input type="checkbox" />
                <label htmlFor="">Category Hi Hi</label>
              </div>
              <div className={st("input")}>
                <input type="checkbox" />
                <label htmlFor="">Category Hi Hi</label>
              </div>
              <div className={st("input")}>
                <input type="checkbox" />
                <label htmlFor="">Category Hi Hi</label>
              </div>
              <div className={st("input")}>
                <input type="checkbox" />
                <label htmlFor="">Category Hi Hi</label>
              </div>
            </div>
            <div className={st("faverite")}>
              <img src="https://picsum.photos/200" alt="" />
              <a href="">Shop now</a>
              <h4>Bo quan vi dai</h4>
            </div>
            <div className={st("fillters")}>
              <div className={st("fillter")}>
                <input type="range" min="0" max="100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
