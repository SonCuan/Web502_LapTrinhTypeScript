import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../interface/category";
import api from "../../servis/axios";
import classNames from "classnames/bind";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faChevronDown, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

type Props = {};

const Header = (props: Props) => {
  const [category, setCategory] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () => {
      const result = await api.get("/categories");
      setCategory(result.data);
    })();
  }, []);
  return (
    <>
    <header>
      <div className ={cx("wapper")}> 
          <div className={cx("header-top")}>
            <div className={cx("sreach")}> 
                  <input type="text" placeholder="Tiếm kiếm..." />
                  <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                
            </div>
            <div className={cx("header-tr")}>
              <ul>
                <li>
                  <a href="#">Eng <FontAwesomeIcon icon={faChevronDown} /></a>
                </li>
                <li>
                  <a href="#"> <FontAwesomeIcon icon={faUser} />Account </a>
                </li>
                <li>
                  <a href="#"><FontAwesomeIcon icon={faBagShopping} /> Cart</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("header-bottom") } >
              <ul>
                <li><a href="#">Áo short nam 2024</a></li>
                <li><a href="#">Áo da nam 2024</a></li>
                <li><a href="#">Dress cao cấp 2024</a></li>
                <li><a href="#">Áo thun nam 2024</a></li>
                <li><a href="#">Quần bò cho nữ</a></li>
                <li><a href="#">Quần bò cho nam</a></li>
                <li><a href="#">Quần áo cho bé</a></li>
                <li><a href="#">Áo short nữ 2024</a></li>
              </ul>
          </div>
          
      </div>
    </header>
  
  
  </>
  )
  
};

export default Header;
